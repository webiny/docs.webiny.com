import { Version } from "../../app/DocumentRootVersions";
import { VersionedMdxFile } from "./VersionedMdxFile";

export class VersionedFiles {
  private readonly version: Version;
  private readonly files: VersionedMdxFile[];

  constructor(version: Version, files: VersionedMdxFile[]) {
    this.version = version;
    this.files = files;
  }

  getVersion() {
    return this.version;
  }

  getFiles() {
    return this.files;
  }

  findFileByAbsolutePath(path: string) {
    return this.files.find(file => file.getOutputPath().withoutExtension() === path);
  }
}
