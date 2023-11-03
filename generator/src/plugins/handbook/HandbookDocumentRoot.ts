import { IDocumentRoot, IDocumentRootWatcher } from "../../abstractions/IDocumentRoot";
import { MdxFileCache } from "../../app/MdxFileCache";
import path from "path";
import md5 from "md5";
import { CompositeMdxProcessor } from "../../app/CompositeMdxProcessor";
import { CodeSeparatorProcessor } from "../../app/processors/CodeSeparatorProcessor";
import { LayoutProcessor } from "../../app/processors/LayoutProcessor";
import { PageDataProcessor } from "../../app/processors/PageDataProcessor";
import { DocsearchProcessor } from "../../app/processors/DocsearchProcessor";
import { PageNavigationProcessor } from "../../app/processors/PageNavigationProcessor";
import { MdxFileLoader } from "../../app/MdxFileLoader";
import { HandbookMdxFileFactory } from "./HandbookMdxFileFactory";
import { CompositeMdxFileWriter } from "../../app/CompositeMdxFileWriter";
import { MdxFileWriter } from "../../app/MdxFileWriter";
import { SitemapFileWriter } from "../../app/SitemapFileWriter";
import { CompiledMdxFileWriter } from "../../app/CompiledMdxFileWriter";
import { MdxCompiler } from "../../app/MdxCompiler";
import { resolveSimpleAssets } from "../../app/mdxCompiler/remark/resolveSimpleAssets";
import { NavigationLoader } from "../../app/NavigationLoader";
import { NavigationWriter } from "../../app/NavigationWriter";
import { SimpleDocumentRoot } from "../../app/SimpleDocumentRoot";
import { DocumentRootWatcher } from "../../app/DocumentRootWatcher";

export class HandbookDocumentRoot {
  private readonly documentRoot: IDocumentRoot;
  private readonly documentRootWatcher: IDocumentRootWatcher;

  constructor(cache: MdxFileCache) {
    // Handbook
    const handbookRootDir = path.resolve("src/library/handbook");
    const handbookOutputDir = "pages";
    const handbookLinkPrefix = "/docs/handbook";
    const handbookNavigationPath = `${handbookRootDir}/navigation.js`;
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
      new CompiledMdxFileWriter(handbookOutputDir, new MdxCompiler([resolveSimpleAssets()]))
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
