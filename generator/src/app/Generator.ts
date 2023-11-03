import { IFileWriter } from "../abstractions/IFileWriter";
import { IDocumentRootFactory } from "../abstractions/IDocumentRootFactory";

export class Generator {
  private documentRootFactory: IDocumentRootFactory;
  private fileWriter: IFileWriter;

  constructor(documentRootFactory: IDocumentRootFactory, fileWriter: IFileWriter) {
    this.documentRootFactory = documentRootFactory;
    this.fileWriter = fileWriter;
  }

  async execute() {
    const documentRoots = this.documentRootFactory.getDocumentRoots();
    const allFiles = await Promise.all(documentRoots.map(root => root.generate()));
    const files = allFiles.flat();

    for (const file of files) {
      await this.fileWriter.write(file);
    }
  }
}
