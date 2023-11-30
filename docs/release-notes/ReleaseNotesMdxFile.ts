import { MdxFile } from "@webiny/docs-generator";

export class ReleaseNotesMdxFile extends MdxFile {
  protected override type = "release-notes";

  override getDocsearch() {
    return {
      ...super.getDocsearch(),
      weight: 50
    };
  }
}
