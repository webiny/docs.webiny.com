import md5 from "md5";
import {
  IDocumentRoot,
  IDocumentRootWatcher,
  CompositeMdxProcessor,
  CodeSeparatorProcessor,
  LayoutProcessor,
  PageDataProcessor,
  DocsearchProcessor,
  PageNavigationProcessor,
  MdxFileLoader,
  CompositeMdxFileWriter,
  MdxFileWriter,
  SitemapFileWriter,
  CompiledMdxFileWriter,
  MdxCompiler,
  NavigationLoader,
  NavigationWriter,
  DocumentRoot,
  DocumentRootWatcher,
  withNextLinks,
  NavigationCache,
  PassthroughFileWriter,
  IMdxProcessor,
  NonVersionedMdxFileFactoryCallable,
  IDocumentRootFactory
} from "@webiny/docs-generator";
import { NonVersionedMdxFileFactory } from "./NonVersionedMdxFileFactory";
import { NonVersionedAssetResolver } from "./NonVersionedAssetResolver";
import { NonVersionedMdxLinkResolver } from "./NonVersionedMdxLinkResolver";
import { AppConfig } from "../../app/AppConfig";
import { IMdxCompilerPlugin } from "../../abstractions/IMdxCompilerPlugin";

interface Config {
  rootDir: string;
  linkPrefix: `/${string}`;
  outputDir: string;
  pageLayout: string;
  mdxFileProcessors: IMdxProcessor[];
  mdxFileFactory: NonVersionedMdxFileFactoryCallable;
  mdxCompilerPlugins: IMdxCompilerPlugin[];
}

export class NonVersionedDocumentRootFactory implements IDocumentRootFactory {
  private readonly documentRoot: IDocumentRoot;
  private readonly documentRootWatcher: IDocumentRootWatcher;

  constructor(appConfig: AppConfig, config: Config) {
    const rootDir = config.rootDir;
    const outputDir = config.outputDir;
    const linkPrefix = config.linkPrefix;
    const navigationSourcePath = `${rootDir}/navigation.tsx`;
    const navigationOutputPath = `data/navigation.${md5(rootDir).slice(-6)}.json`;

    const handbookProcessor = new CompositeMdxProcessor([
      // Add a separator before code generated via processors.
      new CodeSeparatorProcessor(),
      // Inject layout component import.
      new LayoutProcessor(config.pageLayout),
      // Inject pageData into the page contents.
      new PageDataProcessor(),
      // Inject Algolia indexing data.
      new DocsearchProcessor(),
      // Inject navigation file import.
      new PageNavigationProcessor(`@/${navigationOutputPath}`),
      ...config.mdxFileProcessors
    ]);

    const mdxFileLoader = new MdxFileLoader(
      handbookProcessor,
      new NonVersionedMdxFileFactory(config.mdxFileFactory)
    );

    const mdxFileWriter = new CompositeMdxFileWriter([
      // In dev mode, we write the processed MDX file for debugging purposes.
      appConfig.isDevMode() ? new MdxFileWriter(outputDir) : new PassthroughFileWriter(),
      // Write sitemap XML file for each MDX file.
      new SitemapFileWriter(outputDir),
      // Write a JS file compiled from the MDX file.
      new CompiledMdxFileWriter(
        outputDir,
        new MdxCompiler([
          NonVersionedAssetResolver.create(),
          withNextLinks(new NonVersionedMdxLinkResolver(rootDir, linkPrefix)),
          ...config.mdxCompilerPlugins
        ])
      )
    ]);

    const navigationLoader = new NavigationLoader(
      navigationSourcePath,
      linkPrefix,
      mdxFileLoader,
      new NavigationCache()
    );

    const navigationWriter = new NavigationWriter(
      navigationSourcePath,
      navigationOutputPath,
      mdxFileWriter
    );

    this.documentRoot = new DocumentRoot(navigationLoader, navigationWriter);
    this.documentRootWatcher = new DocumentRootWatcher(this.documentRoot, [navigationSourcePath]);
  }

  getDocumentRoot() {
    return this.documentRoot;
  }

  getDocumentRootWatcher() {
    return this.documentRootWatcher;
  }
}
