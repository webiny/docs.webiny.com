import { IMdxLinkResolver, VFile } from "@webiny/docs-generator";
import path from "path";

interface DocsVFileData {
  sourceVersion: string;
  version: string;
}

export class VersionedMdxLinkResolver implements IMdxLinkResolver<DocsVFileData> {
  private readonly documentRootDir: string;
  private readonly linkPrefix: string;

  constructor(documentRootDir: string, linkPrefix: string) {
    this.documentRootDir = documentRootDir;
    this.linkPrefix = linkPrefix;
  }

  resolve(currentFilePath: string, href: string, vFile: VFile<DocsVFileData>): string {
    if (href.startsWith("/")) {
      return href;
    }

    const versionedRootDir = this.documentRootDir.replace(
      vFile.data.version,
      vFile.data.sourceVersion
    );

    const currentFolder = path.dirname(currentFilePath).replace(versionedRootDir, "");

    return path.join(this.linkPrefix, path.resolve(currentFolder, href));
  }
}
