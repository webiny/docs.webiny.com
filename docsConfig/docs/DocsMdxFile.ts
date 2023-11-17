import { MdxData, MdxFile, Version } from "@webiny/docs-generator";

// TODO: convert this into a generic `VersionedMdxFile` to be used with any DocumentRoot
export class DocsMdxFile extends MdxFile {
  private type = "docs";
  private version: Version;
  private sourceVersion: Version;

  constructor(data: MdxData, version?: Version) {
    super(data);
    this.version = version || new Version("0.0.0");
  }

  override clone(): any {
    return new DocsMdxFile(this.props, this.version);
  }

  getVersion() {
    return this.version;
  }

  setVersion(version: Version) {
    this.version = version;
  }

  setSourceVersion(version: Version) {
    this.sourceVersion = version;
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

  override getVFile() {
    return {
      contents: this.getContents(),
      path: this.getAbsolutePath(),
      data: {
        sourceVersion: this.sourceVersion.getValue(),
        version: this.version.getValue()
      }
    };
  }
}
