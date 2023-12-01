import { VersionedMdxFile } from "@webiny/docs-generator";

export class DeveloperDocsMdxFile extends VersionedMdxFile {
  protected override type = "docs";

  override getDocsearch() {
    return {
      ...super.getDocsearch(),
      weight: 100
    };
  }
}
