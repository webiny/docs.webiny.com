import fs from "fs-extra";
import path from "path";
import { VFile } from "vfile";
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
  private history: string[] = [];

  constructor(rootDir: string, version: Version, versions: DocumentRootVersions) {
    this.rootDir = rootDir;
    this.version = version;
    this.versions = versions;
  }

  resolvePath(issuer: VFile, assetPath: string) {
    const dirname = issuer.dirname;
    if (!dirname) {
      return assetPath;
    }
    const requestedAssetPath = path.join(dirname, assetPath);

    const resolvedAssetPath = this.tryResolve(this.version, requestedAssetPath);
    
    if(issuer.history[0].includes("headless-cms/extending/customize-entry-editor-actions")) {
      console.log(resolvedAssetPath);
    }

    if (!resolvedAssetPath) {
      console.error(
        `Failed to resolve asset "${assetPath}" in "${issuer.history[0].replace(
          this.rootDir,
          ""
        )}".`
      );

      console.log(`requestedAssetPath: ${requestedAssetPath}`);
      console.log(`Tried resolving using the following paths:`);
      console.log(this.history.map(line => ` - ${line}`).join("\n"));

      throw Error(
        `Failed to resolve asset "${assetPath}" in "${issuer.history[0].replace(
          this.rootDir,
          ""
        )}".`
      );
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
