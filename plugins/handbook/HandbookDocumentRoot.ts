import path from "path";
import md5 from "md5";
import {
  IDocumentRoot,
  IDocumentRootWatcher,
  MdxFileCache,
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
  DocumentRootWatcher
} from "@webiny/docs-generator";
import { HandbookMdxFileFactory } from "./HandbookMdxFileFactory";
import { remarkResolveAssets } from "./remarkResolveAssets";

export class HandbookDocumentRoot {
  private readonly documentRoot: IDocumentRoot;
  private readonly documentRootWatcher: IDocumentRootWatcher;

  constructor(cache: MdxFileCache, rootDir: string) {
    const outputDir = "pages";
    const linkPrefix = "/docs/handbook";
    const navigationPath = `${rootDir}/navigation.tsx`;
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
      cache,
      handbookProcessor,
      new HandbookMdxFileFactory()
    );

    const mdxFileWriter = new CompositeMdxFileWriter([
      // Write the processed MDX file.
      new MdxFileWriter(outputDir),
      // Write sitemap XML file for each MDX file.
      new SitemapFileWriter(outputDir),
      // Write a JS file compiled from the MDX file.
      new CompiledMdxFileWriter(outputDir, new MdxCompiler([remarkResolveAssets()]))
    ]);

    const navigationLoader = new NavigationLoader(navigationPath, linkPrefix, mdxFileLoader);
    const navigationWriter = new NavigationWriter(navigationOutputPath, mdxFileWriter);

    this.documentRoot = new DocumentRoot(navigationLoader, navigationWriter);
    this.documentRootWatcher = new DocumentRootWatcher(
      path.resolve("src"),
      cache,
      this.documentRoot
    );
  }

  getDocumentRoot() {
    return this.documentRoot;
  }

  getDocumentRootWatcher() {
    return this.documentRootWatcher;
  }
}
