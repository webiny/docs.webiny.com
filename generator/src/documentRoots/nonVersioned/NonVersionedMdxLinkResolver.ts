import { IMdxLinkResolver, VFile } from "@webiny/docs-generator";
import path from "path";

export class NonVersionedMdxLinkResolver implements IMdxLinkResolver {
  private readonly documentRootDir: string;
  private readonly linkPrefix: string;

  constructor(documentRootDir: string, linkPrefix: string) {
    this.documentRootDir = documentRootDir;
    this.linkPrefix = linkPrefix;
  }

  resolve(currentFilePath: string, href: string): string {
    if (href.startsWith("/")) {
      return href;
    }

    const currentFolder = path.dirname(currentFilePath).replace(this.documentRootDir, "");

    return path.join(this.linkPrefix, path.resolve(currentFolder, href));
  }
}
