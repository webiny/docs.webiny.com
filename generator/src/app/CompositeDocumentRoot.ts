import { IDocumentRoot } from "../abstractions/IDocumentRoot";
import { IFile } from "../abstractions/IFile";

export class CompositeDocumentRoot implements IDocumentRoot {
  private readonly documentRoots: IDocumentRoot[];

  constructor(documentRoots: IDocumentRoot[]) {
    this.documentRoots = documentRoots;
  }

  async generate(): Promise<IFile[]> {
    const allFiles = await Promise.all(
      this.documentRoots.map(documentRoot => documentRoot.generate())
    );

    return allFiles.flat();
  }
}
