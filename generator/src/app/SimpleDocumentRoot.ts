import { basename } from "path";
import md5 from "md5";
import { IFile } from "../abstractions/IFile";
import { IMdxProcessor } from "../abstractions/IMdxProcessor";
import { IDocumentRoot, OnFile } from "../abstractions/IDocumentRoot";
import { MdxFile } from "./MdxFile";
import { File } from "./File";
import { PageNavigationProcessor } from "./processors/PageNavigationProcessor";
import { CompositeMdxProcessor } from "./CompositeMdxProcessor";
import { NavigationRenderer } from "./NavigationRenderer";
import { Navigation } from "./Navigation";
import { MdxFileLoader } from "./MdxFileLoader";
import { MdxCompiler } from "./MdxCompiler";
import { resolveSimpleAssets } from "./mdxCompiler/remark/resolveSimpleAssets";

export class SimpleDocumentRoot implements IDocumentRoot {
  private readonly dirname: string;
  private processor: IMdxProcessor;
  private readonly rootDir: string;
  private readonly navigationFileName: string;
  private navigationRenderer: NavigationRenderer;
  private mdxFileLoader: MdxFileLoader;
  private mdxCompiler: MdxCompiler;

  constructor(rootDir: string, processor: IMdxProcessor, mdxFileLoader: MdxFileLoader) {
    this.rootDir = rootDir;
    this.dirname = basename(rootDir);
    this.mdxFileLoader = mdxFileLoader;
    this.navigationRenderer = new NavigationRenderer(rootDir);
    this.navigationFileName = `data/navigation.${md5(rootDir).slice(-6)}.json`;
    this.mdxCompiler = new MdxCompiler();
    this.mdxCompiler.addRemarkPlugin(resolveSimpleAssets());

    this.processor = new CompositeMdxProcessor([
      processor,
      new PageNavigationProcessor(`@/${this.navigationFileName}`)
    ]);
  }

  async getFiles(): Promise<IFile[]> {
    const navigation = await this.navigationRenderer.renderFromPath();
    const mdxMap = new Map<string, MdxFile>();

    // use `processor` to parse each MDX file contents
    const files = await Promise.all(
      navigation.getPaths().map(async relativePath => {
        const mdxFile = await this.mdxFileLoader.load(`${this.rootDir}/${relativePath}.mdx`);
        const processedMdx = await this.processor.processMdx(mdxFile);

        mdxMap.set(relativePath, processedMdx);

        return await this.mdxToFiles(processedMdx);
      })
    );

    return [...files.flat(), this.generateNavigationFile(navigation, mdxMap)];
  }

  async watch(onFile: OnFile): Promise<void> {
    const { watch } = await import("chokidar");

    const navigation = await this.loadAndPopulateNavigation();

    watch(this.rootDir)
      .on("change", async file => {
        console.log(`File changed: `, file);
        const filesToWrite = await this.processFile(file, navigation);
        filesToWrite.forEach(file => onFile(file));
      })
      .on("error", error => {
        console.log(`Watcher error: ${error}`);
      });
  }

  private async loadAndPopulateNavigation() {
    const navigation = await this.navigationRenderer.renderFromPath();
    await Promise.all(
      navigation.getPaths().map(async relativePath => {
        const mdxFile = await this.mdxFileLoader.load(`${this.rootDir}/${relativePath}.mdx`);

        navigation.setTitle(relativePath, mdxFile.getTitle());
        navigation.setLink(relativePath, `/docs/${this.dirname}/${relativePath}`);
      })
    );

    return navigation;
  }

  private generateNavigationFile(navigation: Navigation, mdxMap?: Map<string, MdxFile>) {
    if (mdxMap) {
      mdxMap.forEach((mdxFile, path) => {
        navigation.setTitle(path, mdxFile.getTitle());
        navigation.setLink(path, `/docs/${this.dirname}/${path}`);
      });
    }

    return new File({
      path: this.navigationFileName,
      contents: JSON.stringify(navigation.getItems(), null, 2)
    });
  }

  private async processFile(filePath: string, navigation: Navigation): Promise<IFile[]> {
    const files: IFile[] = [];

    if (filePath.endsWith(".mdx")) {
      const mdxFile = await this.mdxFileLoader.load(filePath);
      const processedMdx = await this.processor.processMdx(mdxFile);

      const path = filePath.replace(`${this.rootDir}/`, "").replace(".mdx", "");
      const outputFiles = await this.mdxToFiles(processedMdx);
      files.push(
        ...outputFiles,
        this.generateNavigationFile(navigation, new Map([[path, processedMdx]]))
      );
    }

    if (filePath.endsWith("/navigation.js")) {
      const navigation = await this.loadAndPopulateNavigation();
      files.push(this.generateNavigationFile(navigation));
    }

    return files;
  }

  private async mdxToFiles(mdxFile: MdxFile): Promise<IFile[]> {
    const mdxPath = `pages/docs/${this.dirname}${mdxFile.getPath().replace(this.rootDir, "")}`;
    return [
      // Output an MDX file.
      new File({
        path: mdxPath,
        contents: mdxFile.getContents()
      }),
      // Output an MDX file compiled to JS.
      new File({
        path: mdxPath.replace(".mdx", ".js"),
        contents: await this.mdxCompiler.compile(mdxFile)
      })
    ];
  }
}
