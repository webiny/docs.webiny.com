import { MdxFile } from "@webiny/docs-generator";

export class HandbookMdxFile extends MdxFile {
  override getDocsearch() {
    return {
      weight: 80,
      versions: ["latest"],
      type: "handbook"
    };
  }
}
