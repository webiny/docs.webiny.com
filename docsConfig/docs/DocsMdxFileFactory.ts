import { IMdxFileFactory, MdxData, Version } from "@webiny/docs-generator";
import { DocsMdxFile } from "./DocsMdxFile";

export class DocsMdxFileFactory implements IMdxFileFactory<DocsMdxFile> {
  private readonly version: Version;

  constructor(version: Version) {
    this.version = version;
  }

  create(data: MdxData): DocsMdxFile {
    return new DocsMdxFile(data, this.version);
  }
}
