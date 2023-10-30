import { IFileWriter } from "../abstractions/IFileWriter";
import { IDocumentRootFactory } from "../abstractions/IDocumentRootFactory";

export class Watcher {
  private documentRootFactory: IDocumentRootFactory;
  private fileWriter: IFileWriter;

  constructor(documentRootFactory: IDocumentRootFactory, fileWriter: IFileWriter) {
    this.documentRootFactory = documentRootFactory;
    this.fileWriter = fileWriter;
  }

  async execute() {
    const documentRoots = this.documentRootFactory.getDocumentRoots();

    for (const documentRoot of documentRoots) {
      documentRoot.watch(file => this.fileWriter.write(file));
    }

    return new Promise(() => {
      // This promise will never resolve until we stop the process.
    });
  }
}
