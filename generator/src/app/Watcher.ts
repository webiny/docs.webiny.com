import { IFileWriter } from "../abstractions/IFileWriter";
import { IDocumentRootWatcher } from "../abstractions/IDocumentRoot";

export class Watcher {
  private readonly watcher: IDocumentRootWatcher;
  private fileWriter: IFileWriter;

  constructor(watcher: IDocumentRootWatcher, fileWriter: IFileWriter) {
    this.watcher = watcher;
    this.fileWriter = fileWriter;
  }

  async execute() {
    this.watcher.watch(file => this.fileWriter.write(file));

    return new Promise(() => {
      // This promise will never resolve until we stop the process.
    });
  }
}
