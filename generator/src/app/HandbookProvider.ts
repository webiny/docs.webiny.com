import path from "path";
import { IProvider } from "../abstractions/IProvider";
import { IFile } from "../abstractions/IFile";
import { MdxScanner } from "./MdxScanner";
import { CompositePageProcessor } from "./CompositePageProcessor";
import { LayoutProcessor } from "./processors/handbook/LayoutProcessor";
import { PageDataProcessor } from "./processors/handbook/PageDataProcessor";
import { PageNavigationProcessor } from "./processors/handbook/PageNavigationProcessor";
import { CodeSeparatorProcessor } from "./processors/handbook/CodeSeparatorProcessor";
import { HandbookPage } from "./HandbookPage";
import { HandbookNavigation } from "./HandbookNavigation";
import { NavigationPage } from "../components/navigation";
import { File } from "./File";
import { DocsearchProcessor } from "./processors/handbook/DocsearchProcessor";

export class HandbookProvider implements IProvider {
  private readonly layoutComponent: string;
  private fileScanner: MdxScanner;
  private pagesRoot = "src/handbook";
  private navigation: HandbookNavigation;

  constructor(layoutImportPath: string) {
    this.layoutComponent = layoutImportPath;
    this.fileScanner = new MdxScanner(this.pagesRoot);
    this.navigation = new HandbookNavigation(this.pagesRoot);
  }

  async getFiles(): Promise<IFile[]> {
    const mdxFiles = await this.fileScanner.scan();

    const navigationPages = mdxFiles.map<NavigationPage>(file => {
      const relativePath = this.withPathPrefix(file.getRelativePath());
      return {
        id: relativePath,
        title: file.getTitle(),
        path: relativePath
      };
    });

    const assets: IFile[] = [];

    const navigation = await this.navigation.render(path => {
      return navigationPages.find(page => page.path === this.withPathPrefix(path));
    });

    assets.push(
      new File({
        path: "data/handbookNavigation.json",
        contents: JSON.stringify(navigation.groups.handbook.items, null, 2)
      })
    );

    const files = mdxFiles.map(mdxFile => {
      const page = new HandbookPage(mdxFile);

      const processor = new CompositePageProcessor([
        // Add a separator before code generated via processors.
        new CodeSeparatorProcessor(page),
        // Inject layout component import.
        new LayoutProcessor(page, this.layoutComponent),
        // Inject pageData into the page contents.
        new PageDataProcessor(page),
        // Inject navigation import into page contents.
        new PageNavigationProcessor(page),
        // Inject Algolia indexing data.
        new DocsearchProcessor(page)
      ]);

      return new File({
        contents: processor.process(mdxFile.getContents()),
        path: path.join("pages/docs/handbook", mdxFile.getRelativePath()) + ".mdx"
      });
    });

    return [...files, ...assets];
  }

  private withPathPrefix(relativePath: string) {
    return path.join("/handbook", relativePath);
  }
}
