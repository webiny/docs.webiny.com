import fs from "fs-extra";
import path from "path";
import { VFileOptions } from "vfile";
import { DocumentRootVersions, Version } from "@webiny/docs-generator";

export class VersionedAssetResolverFactory {
  private readonly rootDir: string;
  private readonly version: Version;
  private readonly versions: DocumentRootVersions;

  constructor(rootDir: string, version: Version, versions: DocumentRootVersions) {
    this.rootDir = rootDir;
    this.version = version;
    this.versions = versions;
  }

  create() {
    return new VersionedAssetResolver(this.rootDir, this.version, this.versions);
  }
}

class VersionedAssetResolver {
  private readonly rootDir: string;
  private readonly version: Version;
  private readonly versions: DocumentRootVersions;
  private readonly history: string[] = [];

  constructor(rootDir: string, version: Version, versions: DocumentRootVersions) {
    this.rootDir = rootDir;
    this.version = version;
    this.versions = versions;
  }

  resolvePath(vFile: VFileOptions, assetPath: string) {
    const dirname = vFile.dirname;
    const issuer = vFile.history[0];

    if (!dirname) {
      return assetPath;
    }
    const requestedAssetPath = path.join(dirname, assetPath);

    const resolvedAssetPath = this.tryResolve(this.version, requestedAssetPath);

    if (!resolvedAssetPath) {
      const message = `Failed to resolve asset "${assetPath}" in "${issuer.replace(
        this.rootDir,
        ""
      )}".`;

      console.error(message);
      throw Error(message);
    }

    return resolvedAssetPath;
  }

  private tryResolve(version: Version, filePath: string): string | undefined {
    this.history.push(filePath);
    const pathExists = fs.pathExistsSync(filePath);

    if (pathExists) {
      return filePath;
    }

    const previousVersion = this.versions.getPreviousVersion(version);

    if (!previousVersion) {
      return undefined;
    }

    return this.tryResolve(
      previousVersion,
      filePath.replace(version.getValue(), previousVersion.getValue())
    );
  }
}
