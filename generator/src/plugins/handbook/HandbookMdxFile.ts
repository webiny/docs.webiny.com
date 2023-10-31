import { MdxFile } from "../../app/MdxFile";

export class HandbookMdxFile extends MdxFile {
  override getDocsearch() {
    return {
      weight: 80,
      versions: ["latest"],
      type: "handbook"
    };
  }
}
