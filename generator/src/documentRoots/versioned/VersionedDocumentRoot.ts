import { IDocumentRoot, IFile } from "@webiny/docs-generator";
import { FilesByVersion } from "./FilesByVersion";
import { VersionedFiles } from "./VersionedFiles";
import { VersionRoot } from "./VersionRoot";

export class VersionedDocumentRoot implements IDocumentRoot {
  private readonly versionsFile: IFile;
  private versionRoots: VersionRoot[];

  constructor(versionsFile: IFile, versionRoots: VersionRoot[]) {
    this.versionRoots = versionRoots;
    this.versionsFile = versionsFile;
  }

  async generate(): Promise<IFile[]> {
    const versionedFiles = new FilesByVersion(
      await Promise.all(
        this.versionRoots.map(async root => {
          return new VersionedFiles(root.getVersion(), await root.getMdxFiles());
        })
      )
    );

    const filesWithCanonical = versionedFiles.withCanonicalVersions();

    const outputFiles = await Promise.all(
      this.versionRoots.map(versionRoot => {
        // Find files for this version root
        const files = filesWithCanonical.find(files =>
          versionRoot.getVersion().equals(files.getVersion())
        ) as VersionedFiles;

        return versionRoot.output(files.getFiles());
      })
    );

    return [...outputFiles.flat(), this.versionsFile];
  }
}
