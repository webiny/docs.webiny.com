import { basename } from "path";
import md5 from "md5";
import { IFile } from "../abstractions/IFile";
import { IDocumentRoot, OnFile } from "../abstractions/IDocumentRoot";
import { IMdxFileWriter } from "../abstractions/IMdxFileWriter";
import { MdxFile } from "./MdxFile";
import { File } from "./File";
import { NavigationRenderer } from "./NavigationRenderer";
import { Navigation } from "./Navigation";
import { MdxFileLoader } from "./MdxFileLoader";

export class SimpleDocumentRoot implements IDocumentRoot {
  private readonly dirname: string;
  private mdxFileWriter: IMdxFileWriter;
  private readonly rootDir: string;
  private readonly navigationFileName: string;
  private navigationRenderer: NavigationRenderer;
  private mdxFileLoader: MdxFileLoader;

  constructor(rootDir: string, mdxFileLoader: MdxFileLoader, mdxFileWriter: IMdxFileWriter) {
    this.rootDir = rootDir;
    this.dirname = basename(rootDir);
    this.mdxFileLoader = mdxFileLoader;
    this.mdxFileWriter = mdxFileWriter;
    this.navigationRenderer = new NavigationRenderer(rootDir);
    this.navigationFileName = `data/navigation.${md5(rootDir).slice(-6)}.json`;
  }

  async getFiles(): Promise<IFile[]> {
    const navigation = await this.navigationRenderer.renderFromPath();
    const mdxMap = new Map<string, MdxFile>();

    const files = await Promise.all(
      navigation.getPaths().map(async relativePath => {
        const mdxFile = await this.mdxFileLoader.load(
          `${this.rootDir}/${relativePath}`,
          relativePath
        );

        mdxMap.set(relativePath, mdxFile);

        return this.mdxFileWriter.output(mdxFile);
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
        const mdxFile = await this.mdxFileLoader.load(
          `${this.rootDir}/${relativePath}`,
          relativePath
        );

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
      const mdxFile = await this.mdxFileLoader.load(
        filePath,
        filePath.replace(`${this.rootDir}/`, "")
      );

      const path = filePath.replace(`${this.rootDir}/`, "");
      const outputFiles = await this.mdxFileWriter.output(mdxFile);
      files.push(
        ...outputFiles,
        this.generateNavigationFile(navigation, new Map([[path, mdxFile]]))
      );
    }

    if (filePath.endsWith("/navigation.js")) {
      const navigation = await this.loadAndPopulateNavigation();
      files.push(this.generateNavigationFile(navigation));
    }

    return files;
  }
}
