import { MdxData, MdxFile, Version } from "@webiny/docs-generator";

export class DocsMdxFile extends MdxFile {
  private type = "docs";
  private readonly version: Version;

  constructor(data: MdxData, version: Version) {
    super(data);
    this.version = version;
  }

  override clone(): any {
    return new DocsMdxFile(this.props, this.version);
  }

  getData(): Record<string, any> {
    return {
      ...super.getData(),
      version: this.version.getValue(),
      type: this.type
    };
  }

  override getDocsearch() {
    return {
      weight: 100,
      versions: [this.version.isLatest() ? "latest" : undefined, this.version.getValue()].filter(
        Boolean
      ),
      type: this.type
    };
  }
}
