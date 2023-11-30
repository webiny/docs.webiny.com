import { MdxData, MdxFile, Version } from "@webiny/docs-generator";

// TODO: convert this into a generic `VersionedMdxFile` to be used with any DocumentRoot
export abstract class VersionedMdxFile extends MdxFile {
  protected version: Version;
  protected sourceVersion: Version;

  constructor(data: MdxData, version?: Version) {
    super(data);
    this.version = version || new Version("0.0.0");
    this.sourceVersion = new Version("0.0.0");
  }

  override clone(): any {
    const Klass = Object.getPrototypeOf(this).constructor;
    const clone = new Klass(this.props, this.version);
    clone.contents = this.contents;
    return clone;
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

  override getData(): Record<string, any> {
    return {
      ...super.getData(),
      version: this.version.getValue(),
      type: this.type
    };
  }

  override getDocsearch() {
    return {
      ...super.getDocsearch(),
      versions: [this.version.isLatest() ? "latest" : undefined, this.version.getValue()].filter(
        Boolean
      )
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
