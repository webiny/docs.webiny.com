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
  NavigationCache,
  PassthroughFileWriter,
  IMdxProcessor,
  NonVersionedMdxFileFactoryCallable,
  IDocumentRootFactory,
  IMdxRemarkPlugin
} from "@webiny/docs-generator";
import { NonVersionedMdxFileFactory } from "./NonVersionedMdxFileFactory";
import { NonVersionedAssetResolverRemarkPlugin } from "./NonVersionedAssetResolverRemarkPlugin";
import { AppConfig } from "../../app/AppConfig";
import { RemarkPluginsRunner } from "../../app/mdxCompiler/RemarkPluginsRunner";
import { NextLinksRemarkPlugin } from "../../app/mdxCompiler/remark/NextLinksRemarkPlugin";
import { AbsolutePathProcessor } from "../../app/processors/AbsolutePathProcessor";
import { ProcessedFileWriter } from "../../app/ProcessedFileWriter";

interface Config {
  rootDir: string;
  linkPrefix: `/${string}`;
  outputDir: string;
  pageLayout: string;
  mdxFileProcessors: IMdxProcessor[];
  mdxFileFactory: NonVersionedMdxFileFactoryCallable;
  mdxRemarkPlugins: IMdxRemarkPlugin[];
}

export class NonVersionedDocumentRootFactory implements IDocumentRootFactory {
  private readonly documentRoot: IDocumentRoot;
  private readonly documentRootWatcher: IDocumentRootWatcher;

  constructor(appConfig: AppConfig, config: Config) {
    const rootDir = config.rootDir;
    const outputDir = config.outputDir;
    const linkPrefix = config.linkPrefix;
    const navigationSourcePath = `${rootDir}/navigation.tsx`;
    const navigationRelativeOutputPath = `data/navigation.${md5(rootDir).slice(-6)}.json`;
    const navigationAbsoluteOutputPath = `${appConfig.getProjectRootDir()}/${navigationRelativeOutputPath}`;

    const mdxFileProcessors: IMdxProcessor[] = [
      // Add a separator before code generated via processors.
      new CodeSeparatorProcessor(),
      // Inject layout component import.
      new LayoutProcessor(config.pageLayout),
      // Inject pageData into the page contents.
      new PageDataProcessor(),
      // Inject Algolia indexing data.
      new DocsearchProcessor(),
      // Inject navigation file import.
      new PageNavigationProcessor(`@/${navigationRelativeOutputPath}`),
      ...config.mdxFileProcessors
    ];

    if (appConfig.isDevMode()) {
      // Inject absolute file path for development purposes.
      mdxFileProcessors.push(new AbsolutePathProcessor(appConfig.getProjectRootDir()));
    }

    const handbookProcessor = new CompositeMdxProcessor(mdxFileProcessors);

    const mdxFileLoader = new MdxFileLoader(new NonVersionedMdxFileFactory(config.mdxFileFactory));

    const mdxCompiler = new MdxCompiler([
      RemarkPluginsRunner.create([
        ...appConfig.getMdxRemarkPlugins(),
        ...config.mdxRemarkPlugins,
        new NonVersionedAssetResolverRemarkPlugin(),
        new NextLinksRemarkPlugin()
      ])
    ]);

    const mdxFileWriter = new ProcessedFileWriter(
      handbookProcessor,
      new CompositeMdxFileWriter([
        // In dev mode, we write the processed MDX file for debugging purposes.
        appConfig.isDevMode() ? new MdxFileWriter(outputDir) : new PassthroughFileWriter(),
        // Write sitemap XML file for each MDX file.
        new SitemapFileWriter(outputDir),
        // Write a JS file compiled from the MDX file.
        new CompiledMdxFileWriter(outputDir, mdxCompiler)
      ])
    );

    const navigationLoader = new NavigationLoader(
      navigationSourcePath,
      linkPrefix,
      mdxFileLoader,
      new NavigationCache()
    );

    const navigationWriter = new NavigationWriter(
      navigationSourcePath,
      navigationAbsoluteOutputPath,
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
