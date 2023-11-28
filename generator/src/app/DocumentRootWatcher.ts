import {
  IDocumentRoot,
  IDocumentRootWatcher,
  OnFile,
  OnWatchEvent
} from "../abstractions/IDocumentRoot";

export class DocumentRootWatcher implements IDocumentRootWatcher {
  private readonly documentRoot: IDocumentRoot;
  private readonly additionalFiles: string[];

  constructor(documentRoot: IDocumentRoot, additionalFiles: string[] = []) {
    this.additionalFiles = additionalFiles;
    this.documentRoot = documentRoot;
  }

  async watch(onFile: OnFile, onEvent?: OnWatchEvent): Promise<void> {
    const { watch } = await import("chokidar");

    const files = await this.documentRoot.generate();
    const paths = files
      .map(file => file.getSourcePath())
      .filter((value?: string): value is string => !!value)
      .map(path => this.enforceExtensionOrGlob(path));

    const watcher = watch([...paths, ...this.additionalFiles]);

    watcher
      .on("change", async file => {
        onEvent && onEvent("change");
        console.log("File changed", file);
        const filesToWrite = await this.documentRoot.generate();
        filesToWrite.forEach(file => onFile(file));
      })
      .on("error", error => {
        console.log(`Watcher error: ${error}`);
      });
  }

  private enforceExtensionOrGlob(value: string) {
    return [".js", ".ts", ".tsx"].some(ext => value.endsWith(ext)) ? value : `${value}*`;
  }
}
