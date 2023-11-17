import path from "path";
import fs from "fs-extra";
import { DocumentRootVersions, IMdxFileLoader, Version } from "@webiny/docs-generator";
import { DocsMdxFile } from "./DocsMdxFile";

export class VersionedMdxFileLoader<T extends DocsMdxFile = DocsMdxFile>
  implements IMdxFileLoader<T>
{
  private readonly versions: DocumentRootVersions;
  private readonly rootDir: string;
  private readonly mdxFileLoader: IMdxFileLoader<T>;
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
    const resolvedMdxFile = await this.resolvePath(this.version, filePath);

    if (!resolvedMdxFile) {
      throw Error(
        `Couldn't find a source file for "${filePath}" in document root "${this.rootDir}"!`
      );
    }

    const mdxFile = await this.mdxFileLoader.load(resolvedMdxFile.getFilePath());

    mdxFile.setSourceVersion(resolvedMdxFile.getVersion());

    return mdxFile;
  }

  async resolvePath(version: Version, filePath: string): Promise<ResolvedMdxFile | undefined> {
    const versionedPath = path.join(this.rootDir, version.getValue(), filePath);

    const pathExists = await fs.pathExists(versionedPath);

    if (pathExists) {
      return new ResolvedMdxFile(versionedPath, version);
    }

    const previousVersion = this.versions.getPreviousVersion(version);

    if (!previousVersion) {
      return undefined;
    }

    return this.resolvePath(previousVersion, filePath);
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
