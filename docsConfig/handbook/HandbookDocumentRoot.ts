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
  PassthroughFileWriter
} from "@webiny/docs-generator";
import { HandbookMdxFileFactory } from "./HandbookMdxFileFactory";
import { remarkResolveAssets } from "./remarkResolveAssets";
import { MdxLinkResolver } from "./MdxLinkResolver";
import { Config } from "../Config";

export class HandbookDocumentRoot {
  private readonly documentRoot: IDocumentRoot;
  private readonly documentRootWatcher: IDocumentRootWatcher;

  constructor(config: Config, rootDir: string) {
    const outputDir = "pages";
    const linkPrefix = "/docs/handbook";
    const navigationSourcePath = `${rootDir}/navigation.tsx`;
    const navigationOutputPath = `data/navigation.${md5(rootDir).slice(-6)}.json`;

    const handbookProcessor = new CompositeMdxProcessor([
      // Add a separator before code generated via processors.
      new CodeSeparatorProcessor(),
      // Inject layout component import.
      new LayoutProcessor("@/layouts/HandbookLayout"),
      // Inject pageData into the page contents.
      new PageDataProcessor(),
      // Inject Algolia indexing data.
      new DocsearchProcessor(),
      // Inject navigation file import.
      new PageNavigationProcessor(`@/${navigationOutputPath}`)
    ]);

    const mdxFileLoader = new MdxFileLoader(
      rootDir,
      handbookProcessor,
      new HandbookMdxFileFactory()
    );

    const mdxFileWriter = new CompositeMdxFileWriter([
      // In dev mode, we write the processed MDX file for debugging purposes.
      config.isDevMode() ? new MdxFileWriter(outputDir) : new PassthroughFileWriter(),
      // Write sitemap XML file for each MDX file.
      new SitemapFileWriter(outputDir),
      // Write a JS file compiled from the MDX file.
      new CompiledMdxFileWriter(
        outputDir,
        new MdxCompiler([
          remarkResolveAssets(),
          withNextLinks(new MdxLinkResolver(rootDir, linkPrefix))
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
