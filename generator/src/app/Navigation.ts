import path from "path";
import { mdbid } from "@webiny/utils";
import {
  NavigationOutputData,
  NavigationOutputPage,
  NavigationPage,
  NavigationTree
} from "../abstractions/IReactRenderer";
import { IMdxFileLoader } from "../abstractions/IMdxFileLoader";
import { MdxFile } from "./MdxFile";
import { NavigationCache } from "./NavigationCache";

type WithId<T> = T & { id: string };

const pageIsHidden = (page: any): boolean => {
  if ("hidden" in page) {
    return page.hidden;
  }

  return false;
};

export class Navigation {
  private readonly mdxFileLoader: IMdxFileLoader;
  private readonly navigationTree: NavigationTree;
  private readonly linkPrefix: string;
  private readonly mdxFiles: MdxFile[] = [];
  private readonly mdxFileCache: NavigationCache;
  private navigationData: NavigationOutputData = [];

  private constructor(
    mdxFileLoader: IMdxFileLoader,
    mdxFileCache: NavigationCache,
    navigationTree: NavigationTree,
    linkPrefix: string
  ) {
    this.mdxFileLoader = mdxFileLoader;
    this.mdxFileCache = mdxFileCache;
    this.navigationTree = navigationTree;
    this.linkPrefix = linkPrefix;
  }

  static async create(
    mdxFileLoader: IMdxFileLoader,
    mdxFileCache: NavigationCache,
    navigationTree: NavigationTree,
    linkPrefix: string
  ) {
    const navigation = new Navigation(mdxFileLoader, mdxFileCache, navigationTree, linkPrefix);
    await navigation.initialize();
    return navigation;
  }

  private async initialize() {
    this.navigationData = await this.applyPageModifiers(this.navigationTree.items);
  }

  getMdxFiles() {
    return this.mdxFiles;
  }

  getNavigationData(): NavigationOutputData {
    return this.navigationData;
  }

  private async applyPageModifiers(groups: NavigationTree["items"]): Promise<NavigationOutputData> {
    const promises: Promise<void>[] = [];
    const map = new Map<string, NavigationOutputPage>();

    const tempOutput = this.traversePages<NavigationPage, WithId<NavigationPage>>(groups, page => {
      const id = mdbid();
      promises.push(
        new Promise(async resolve => {
          const [resolvedPage, mdxFile] = await this.resolveLink(page);
          map.set(id, resolvedPage);
          if (mdxFile) {
            this.mdxFiles.push(mdxFile);
          }
          resolve();
        })
      );

      return {
        id,
        ...page
      };
    });

    await Promise.all(promises);

    return this.traversePages<WithId<NavigationPage>, NavigationOutputPage>(tempOutput, page => {
      return map.get(page.id) as NavigationOutputPage;
    });
  }

  private traversePages<TPageIn extends NavigationPage, TPageOut>(
    nodes: NavigationTree<TPageIn>["items"],
    cb: (page: TPageIn) => TPageOut
  ): NavigationTree<TPageOut>["items"] {
    return nodes
      .map(node => {
        if (node.type === "separator") {
          return node;
        }

        if (node.type === "page") {
          const page = cb(node);
          if (pageIsHidden(page)) {
            return null;
          }
          return page;
        }

        return {
          ...node,
          items: this.traversePages<TPageIn, TPageOut>(node.items, cb)
        };
      })
      .filter(Boolean) as NavigationTree<TPageOut>["items"];
  }

  private async resolveLink(
    page: NavigationPage
  ): Promise<[NavigationOutputPage, MdxFile | undefined]> {
    const filePath = `${(page.file ?? page.link ?? "").replace(".mdx", "")}.mdx`;

    const mdxFile = await this.mdxFileLoader.load(path.join(page.directory, filePath));

    const outputFileName = this.getOutputFileName(page, mdxFile);
    mdxFile.setOutputPath(`${this.linkPrefix}/${outputFileName}`);

    const link = `/${mdxFile.getOutputPath().withoutExtension()}`;

    const fileWasChanged = this.mdxFileCache.isFileDifferentFromCache(link, mdxFile);
    if (fileWasChanged) {
      this.mdxFileCache.set(link, mdxFile);
    }

    return [
      {
        type: page.type,
        title: page.title || mdxFile.getTitle(),
        link,
        breadcrumbs: page.breadcrumbs
      },
      fileWasChanged ? mdxFile : undefined
    ];
  }

  private getOutputFileName(page: NavigationPage, mdxFile: MdxFile) {
    // `page.linkPrefix` comes from the `<NavigationRoot>` element.
    return [page.linkPrefix, page.link ?? mdxFile.getSlug()].filter(Boolean).join("/");
  }
}
