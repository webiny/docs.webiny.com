import fs from "fs-extra";
import { DocumentRootVersions, IMdxFileLoader, Version } from "@webiny/docs-generator";
import { VersionedMdxFile } from "./VersionedMdxFile";

export class VersionedMdxFileLoader<T extends VersionedMdxFile = VersionedMdxFile>
  implements IMdxFileLoader<T>
{
  private readonly versions: DocumentRootVersions;
  private readonly mdxFileLoader: IMdxFileLoader<T>;
  private readonly version: Version;

  constructor(
    version: Version,
    versions: DocumentRootVersions,
    mdxFileLoader: IMdxFileLoader<T>
  ) {
    this.version = version;
    this.versions = versions;
    this.mdxFileLoader = mdxFileLoader;
  }

  async load(filePath: string): Promise<T> {
    const resolvedMdxFile = await this.resolvePath(this.version, filePath);

    if (!resolvedMdxFile) {
      throw Error(
        `Couldn't find a parent source file for "${filePath}"!`
      );
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
