import fs from "fs-extra";
import { DocumentRootVersions, IMdxFileLoader, Version } from "@webiny/docs-generator";
import { VersionedMdxFile } from "./VersionedMdxFile";

export class VersionedMdxFileLoader<T extends VersionedMdxFile = VersionedMdxFile>
  implements IMdxFileLoader<T>
{
  private readonly versions: DocumentRootVersions;
  private readonly mdxFileLoader: IMdxFileLoader<T>;
  private readonly rootDir: string;
  private readonly version: Version;

  constructor(
    rootDir: string,
    version: Version,
    versions: DocumentRootVersions,
    mdxFileLoader: IMdxFileLoader<T>
  ) {
    this.rootDir = rootDir;
    this.version = version;
    this.versions = versions;
    this.mdxFileLoader = mdxFileLoader;
  }

  async load(filePath: string): Promise<T> {
    let filePathVersion = this.extractVersionFromFilePath(filePath);
    if (!filePathVersion) {
      filePathVersion = this.version;
    }

    const filePathWithCurrentVersion = filePath.replace(
      filePathVersion.getValue(),
      this.version.getValue()
    );

    const resolvedMdxFile = await this.resolvePath(this.version, filePathWithCurrentVersion);

    if (!resolvedMdxFile) {
      throw Error(`Couldn't find a parent source file for "${filePath}"!`);
    }

    const mdxFile = await this.mdxFileLoader.load(resolvedMdxFile.getFilePath());

    mdxFile.setSourceVersion(resolvedMdxFile.getVersion());

    return mdxFile;
  }

  async resolvePath(version: Version, filePath: string): Promise<ResolvedMdxFile | undefined> {
    const pathExists = await fs.pathExists(filePath);

    if (pathExists) {
      return new ResolvedMdxFile(filePath, version);
    }

    const previousVersion = this.versions.getPreviousVersion(version);

    if (!previousVersion) {
      return undefined;
    }

    return this.resolvePath(
      previousVersion,
      filePath.replace(version.getValue(), previousVersion.getValue())
    );
  }

  private extractVersionFromFilePath(filePath: string) {
    const relativeFilePath = filePath.replace(`${this.rootDir}/`, "");
    for (const version of this.versions.getVersions()) {
      if (relativeFilePath.startsWith(version.getValue())) {
        return version;
      }
    }
    return undefined;
  }
}

class ResolvedMdxFile {
  private readonly filePath: string;
  private readonly version: Version;

  constructor(filePath: string, version: Version) {
    this.filePath = filePath;
    this.version = version;
  }

  getVersion() {
    return this.version;
  }

  getFilePath() {
    return this.filePath;
  }
}
