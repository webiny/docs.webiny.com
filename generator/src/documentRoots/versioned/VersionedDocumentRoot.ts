import { IDocumentRoot, IFile } from "@webiny/docs-generator";

export class VersionedDocumentRoot implements IDocumentRoot {
  private readonly documentRoot: IDocumentRoot;
  private readonly versionsFile: IFile;

  constructor(versionsFile: IFile, documentRoot: IDocumentRoot) {
    this.versionsFile = versionsFile;
    this.documentRoot = documentRoot;
  }

  async generate(): Promise<IFile[]> {
    const files = await this.documentRoot.generate();

    return [...files, this.versionsFile];
  }
}
