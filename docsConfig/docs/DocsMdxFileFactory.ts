import { IMdxFileFactory, MdxData, MdxFile, Version } from "@webiny/docs-generator";
import { DocsMdxFile } from "./DocsMdxFile";

export class DocsMdxFileFactory implements IMdxFileFactory {
  private readonly version: Version;

  constructor(version: Version) {
    this.version = version;
  }

  create(data: MdxData): MdxFile {
    return new DocsMdxFile(data, this.version);
  }
}
