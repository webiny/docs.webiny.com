import path from "path";
import md5 from "md5";
import { IDocumentRootFactory } from "./abstractions/IDocumentRootFactory";
import { Generator } from "./app/Generator";
import { SimpleDocumentRoot } from "./app/SimpleDocumentRoot";
import { FsFileWriter } from "./app/FsFileWriter";
import { Watcher } from "./app/Watcher";
import { MdxFileLoader } from "./app/MdxFileLoader";
import { PageNavigationProcessor } from "./app/processors/PageNavigationProcessor";
import { MdxFileCache } from "./app/MdxFileCache";
import { HandbookMdxFileFactory } from "./plugins/handbook/HandbookMdxFileFactory";
import { CompositeMdxProcessor } from "./app/CompositeMdxProcessor";
import { CodeSeparatorProcessor } from "./app/processors/CodeSeparatorProcessor";
import { LayoutProcessor } from "./app/processors/LayoutProcessor";
import { PageDataProcessor } from "./app/processors/PageDataProcessor";
import { DocsearchProcessor } from "./app/processors/DocsearchProcessor";
import { MdxCompiler } from "./app/MdxCompiler";
import { resolveSimpleAssets } from "./app/mdxCompiler/remark/resolveSimpleAssets";
import { MdxFileWriter } from "./app/MdxFileWriter";
import { SitemapFileWriter } from "./app/SitemapFileWriter";
import { CompositeMdxFileWriter } from "./app/CompositeMdxFileWriter";
import { CompiledMdxFileWriter } from "./app/CompiledMdxFileWriter";
import { IDocumentRoot } from "./abstractions/IDocumentRoot";

export class Main {
  async generate() {
    const generator = new Generator(
      new DocumentRootFactory(),
      new FsFileWriter(path.resolve("src"))
    );
    await generator.execute();
  }

  async watch() {
    const watcher = new Watcher(new DocumentRootFactory(), new FsFileWriter(path.resolve("src")));
    await watcher.execute();
  }
}

class DocumentRootFactory implements IDocumentRootFactory {
  getDocumentRoots() {
    // We want to share the MDX file cache across all document roots.
    const cache = new MdxFileCache();

    return [
      this.getHandbookDocumentRoot(cache)
      // new SimpleDocumentRoot("src/library/user-guides", new SimpleDocsParser()),
      // new VersionedDocumentRoot("src/library/docs/5.37.x", new VersionedDocsParser()),
      // new VersionedDocumentRoot("src/library/docs/5.36.x", new VersionedDocsParser()),
      // new VersionedDocumentRoot("src/library/docs/5.35.x", new VersionedDocsParser())
    ];
  }

  private getHandbookDocumentRoot(mdxFileCache: MdxFileCache): IDocumentRoot {
    // Handbook
    const handbookRootDir = path.resolve("src/library/handbook");
    const handbookOutputDir = "pages/docs/handbook";

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
      new PageNavigationProcessor(`@/data/navigation.${md5(handbookRootDir).slice(-6)}.json`)
    ]);

    const mdxFileLoader = new MdxFileLoader(
      mdxFileCache,
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

    return new SimpleDocumentRoot(handbookRootDir, mdxFileLoader, mdxFileWriter);
  }
}
