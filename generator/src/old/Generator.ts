import { DocumentRoot } from "./DocumentRoot";
import { SourceFile } from "./SourceFile";
import { Navigation } from "./Navigation";

export class Generator {
  private readonly documentRoots: DocumentRoot[];

  constructor(documentRoots: DocumentRoot[]) {
    this.documentRoots = documentRoots;
  }

  async generate() {
    // These are all doc files physically present in the project.
    const allSourceFiles: SourceFile[] = [];

    // This is a collection of navigation objects, one for each document root.
    const allNavigation: Navigation[] = [];

    for (const documentRoot of this.documentRoots) {
      const sourceFiles = await documentRoot.getSourceFiles();
      sourceFiles.forEach(file => allSourceFiles.push(file));
      allNavigation.push(await documentRoot.getNavigation());
    }
  }
}
