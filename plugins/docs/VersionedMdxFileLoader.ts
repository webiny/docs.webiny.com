import fs from "fs-extra";
import { DocumentRootVersions, ICachedFile, IMdxFileLoader, Version } from "@webiny/docs-generator";
import path from "path";

export class VersionedMdxFileLoader implements IMdxFileLoader {
  private readonly versions: DocumentRootVersions;
  private readonly rootDir: string;
  private readonly mdxFileLoader: IMdxFileLoader;
  private readonly version: Version;

  constructor(
    rootDir: string,
    version: Version,
    versions: DocumentRootVersions,
    mdxFileLoader: IMdxFileLoader
  ) {
    this.rootDir = rootDir;
    this.version = version;
    this.versions = versions;
    this.mdxFileLoader = mdxFileLoader;
  }

  async load(filePath: string): Promise<ICachedFile> {
    const resolvedFilePath = await this.resolvePath(this.version, filePath);

    if (!resolvedFilePath) {
      throw Error(
        `Couldn't find a source file for "${filePath}" in document root "${this.rootDir}"!`
      );
    }

    return this.mdxFileLoader.load(resolvedFilePath);
  }

  async resolvePath(version: Version, filePath: string): Promise<string | undefined> {
    const versionedPath = path.join(this.rootDir, version.getValue(), filePath);

    const pathExists = await fs.pathExists(versionedPath);

    if (pathExists) {
      return versionedPath;
    }

    const previousVersion = this.versions.getPreviousVersion(version);

    if (!previousVersion) {
      return undefined;
    }

    return this.resolvePath(previousVersion, filePath);
  }
}
