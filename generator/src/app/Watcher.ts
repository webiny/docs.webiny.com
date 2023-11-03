import { IFileWriter } from "../abstractions/IFileWriter";
import { IDocumentRootWatcher } from "../abstractions/IDocumentRoot";

export class Watcher {
  private readonly watchers: IDocumentRootWatcher[];
  private fileWriter: IFileWriter;

  constructor(watchers: IDocumentRootWatcher[], fileWriter: IFileWriter) {
    this.watchers = watchers;
    this.fileWriter = fileWriter;
  }

  async execute() {
    for (const watcher of this.watchers) {
      watcher.watch(file => this.fileWriter.write(file));
    }

    return new Promise(() => {
      // This promise will never resolve until we stop the process.
    });
  }
}
