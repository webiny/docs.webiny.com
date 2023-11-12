import { mdbid } from "@webiny/utils";
import {
  NavigationOutputData,
  NavigationOutputPage,
  NavigationPage,
  NavigationTree
} from "../abstractions/IReactRenderer";
import { IMdxFileLoader } from "../abstractions/IMdxFileLoader";
import { MdxFile } from "./MdxFile";

type WithId<T> = T & { id: string };

const pageIsHidden = (page: any): boolean => {
  if ("hidden" in page) {
    return page.hidden;
  }

  return false;
};

export class Navigation {
  private mdxFileLoader: IMdxFileLoader;
  private navigationTree: NavigationTree;
  private readonly linkPrefix: string;
  private mdxFiles: MdxFile[] = [];
  private navigationData: NavigationOutputData = [];

  private constructor(
    mdxFileLoader: IMdxFileLoader,
    navigationTree: NavigationTree,
    linkPrefix: string
  ) {
    this.mdxFileLoader = mdxFileLoader;
    this.navigationTree = navigationTree;
    this.linkPrefix = linkPrefix;
  }

  static async create(
    mdxFileLoader: IMdxFileLoader,
    navigationTree: NavigationTree,
    linkPrefix: string
  ) {
    const navigation = new Navigation(mdxFileLoader, navigationTree, linkPrefix);
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
    groups: NavigationTree<TPageIn>["items"],
    cb: (page: TPageIn) => TPageOut
  ) {
    return groups.map(group => {
      if (group.type === "separator") {
        return group;
      }

      return {
        ...group,
        items: group.items.map(section => {
          if (section.type === "page") {
            return cb(section);
          }

          return {
            ...section,
            items: section.items.map(page => cb(page)).filter(page => !pageIsHidden(page))
          };
        })
      };
    });
  }

  private async resolveLink(
    page: NavigationPage
  ): Promise<[NavigationOutputPage, MdxFile | undefined]> {
    const filePath = `${(page.file ?? page.link ?? "").replace(".mdx", "")}.mdx`;

    const loadedFile = await this.mdxFileLoader.load(filePath);
    const mdxFile = loadedFile.getFile();

    const outputFileName = page.link ? page.link : mdxFile.getSlug();

    mdxFile.setOutputPath(`${this.linkPrefix}/${outputFileName}`);

    return [
      {
        type: page.type,
        title: page.title || mdxFile.getTitle(),
        link: `/${mdxFile.getOutputPath().withoutExtension()}`
      },
      loadedFile.isFromCache() ? undefined : mdxFile
    ];
  }
}
