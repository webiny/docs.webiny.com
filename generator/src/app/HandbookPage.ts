import { MdxFile } from "./MdxFile";

export class HandbookPage {
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
      id: this.mdxFile.getRelativePath(),
      title: this.mdxFile.getTitle(),
      description: this.mdxFile.getDescription()
    };
  }
}
