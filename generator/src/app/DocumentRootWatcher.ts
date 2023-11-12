import { IDocumentRoot, IDocumentRootWatcher, OnFile } from "../abstractions/IDocumentRoot";
import { MdxFileCache } from "./MdxFileCache";

export class DocumentRootWatcher implements IDocumentRootWatcher {
  private readonly documentRoot: IDocumentRoot;
  private readonly watchRoot: string;
  private readonly cache: MdxFileCache;

  constructor(watchRoot: string, cache: MdxFileCache, documentRoot: IDocumentRoot) {
    this.cache = cache;
    this.watchRoot = watchRoot;
    this.documentRoot = documentRoot;
  }

  async watch(onFile: OnFile): Promise<void> {
    const { watch } = await import("chokidar");

    const files = await this.documentRoot.generate();
    const paths = files
      .map(file => file.getSourcePath())
      .filter((value?: string): value is string => !!value);

    const watcher = watch(paths, { cwd: this.watchRoot, disableGlobbing: true });

    watcher
      .on("change", async file => {
        this.cache.evict(file);
        const filesToWrite = await this.documentRoot.generate();
        filesToWrite.forEach(file => onFile(file));
      })
      .on("error", error => {
        console.log(`Watcher error: ${error}`);
      });
  }
}
