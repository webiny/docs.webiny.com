import { IFileWriter } from "../abstractions/IFileWriter";
import { IDocumentRoot } from "../abstractions/IDocumentRoot";

export class Generator {
  private documentRoot: IDocumentRoot;
  private fileWriter: IFileWriter;

  constructor(documentRoot: IDocumentRoot, fileWriter: IFileWriter) {
    this.documentRoot = documentRoot;
    this.fileWriter = fileWriter;
  }

  async execute() {
    const files = await this.documentRoot.generate();

    for (const file of files) {
      await this.fileWriter.write(file);
    }
  }
}
