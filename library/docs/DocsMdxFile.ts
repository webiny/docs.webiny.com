import { VersionedMdxFile } from "@webiny/docs-generator";

export class DocsMdxFile extends VersionedMdxFile {
  protected override type = "docs";

  override getDocsearch() {
    return {
      ...super.getDocsearch(),
      weight: this.getWeight()
    };
  }

  private getWeight() {
    return this.getAbsolutePath().includes("/release-notes/") ? 50 : 100;
  }
}
