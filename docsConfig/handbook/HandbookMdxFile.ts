import { MdxFile } from "@webiny/docs-generator";

export class HandbookMdxFile extends MdxFile {
  private type = "handbook";

  getData(): Record<string, any> {
    return {
      ...super.getData(),
      type: this.type
    };
  }

  override getDocsearch() {
    return {
      weight: 100,
      versions: ["latest"],
      type: this.type
    };
  }
}
