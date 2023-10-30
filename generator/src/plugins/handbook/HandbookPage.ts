import { IPage } from "../../abstractions/IPage";
import { MdxFile } from "../../app/MdxFile";

export class HandbookPage implements IPage {
  private mdxFile: MdxFile;

  constructor(mdxFile: MdxFile) {
    this.mdxFile = mdxFile;
  }

  getDocsearch() {
    return {
      weight: 80,
      versions: ["latest"],
      type: "handbook"
    };
  }

  getData() {
    return {
      title: this.mdxFile.getTitle(),
      description: this.mdxFile.getDescription()
    };
  }
}
