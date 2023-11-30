import { DocumentRootVersions, IMdxLinkResolver, Version, VFile } from "@webiny/docs-generator";
import path from "path";
import fs from "fs-extra";

interface DocsVFileData {
  sourceVersion: string;
  version: string;
}

export class VersionedMdxLinkResolver implements IMdxLinkResolver<DocsVFileData> {
  private readonly rootDir: string;
  private readonly version: Version;
  private readonly versions: DocumentRootVersions;
  private readonly linkPrefix: string;
  private readonly history: string[] = [];

  constructor(
    rootDir: string,
    version: Version,
    versions: DocumentRootVersions,
    linkPrefix: string
  ) {
    this.version = version;
    this.versions = versions;
    this.rootDir = rootDir;
    this.linkPrefix = linkPrefix;
  }

  resolve(vFile: VFile<DocsVFileData>, href: string): string {
    if (href.startsWith("/")) {
      return href;
    }

    const issuer = vFile.history[0];
    const versionedRootDir = this.rootDir.replace(vFile.data.version, vFile.data.sourceVersion);

    const currentFolder = path.dirname(issuer); //.replace(`${versionedRootDir}/`, "");

    const requestedLink = path.resolve(currentFolder, href);
    const resolvedLink = this.tryResolve(this.version, requestedLink);

    if (!resolvedLink) {
      const message = `Failed to resolve link "${href}" in "${issuer.replace(this.rootDir, "")}".`;
      console.error(message);
      throw Error(message);
    }

    const resolvedHref = resolvedLink.replace(this.rootDir, this.linkPrefix);

    return resolvedHref;
  }

  private tryResolve(version: Version, filePath: string): string | undefined {
    this.history.push(filePath);
    const [href] = filePath.split("#");
    const pathExists = fs.pathExistsSync(href + ".mdx");

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
