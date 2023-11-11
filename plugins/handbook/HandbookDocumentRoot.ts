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
  SimpleDocumentRoot,
  DocumentRootWatcher
} from "@webiny/docs-generator";
import { HandbookMdxFileFactory } from "./HandbookMdxFileFactory";
import { remarkResolveAssets } from "./remarkResolveAssets";

export class HandbookDocumentRoot {
  private readonly documentRoot: IDocumentRoot;
  private readonly documentRootWatcher: IDocumentRootWatcher;

  constructor(cache: MdxFileCache) {
    const handbookRootDir = path.resolve("library/handbook");
    const handbookOutputDir = "pages";
    const handbookLinkPrefix = "/docs/handbook";
    const handbookNavigationPath = `${handbookRootDir}/navigation.tsx`;
    const handbookNavigationOutputPath = `data/navigation.${md5(handbookRootDir).slice(-6)}.json`;

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
      new PageNavigationProcessor(`@/${handbookNavigationOutputPath}`)
    ]);

    const mdxFileLoader = new MdxFileLoader(
      handbookRootDir,
      cache,
      handbookProcessor,
      new HandbookMdxFileFactory()
    );

    const mdxFileWriter = new CompositeMdxFileWriter([
      // Write the processed MDX file.
      new MdxFileWriter(handbookOutputDir),
      // Write sitemap XML file for each MDX file.
      new SitemapFileWriter(handbookOutputDir),
      // Write a JS file compiled from the MDX file.
      new CompiledMdxFileWriter(handbookOutputDir, new MdxCompiler([remarkResolveAssets()]))
    ]);

    const navigationLoader = new NavigationLoader(
      handbookNavigationPath,
      handbookLinkPrefix,
      mdxFileLoader
    );
    const navigationWriter = new NavigationWriter(handbookNavigationOutputPath, mdxFileWriter);

    this.documentRoot = new SimpleDocumentRoot(navigationLoader, navigationWriter);
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
