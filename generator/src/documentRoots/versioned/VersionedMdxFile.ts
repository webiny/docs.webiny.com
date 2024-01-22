import { MdxData, MdxFile, Version } from "@webiny/docs-generator";

// TODO: convert this into a generic `VersionedMdxFile` to be used with any DocumentRoot
export abstract class VersionedMdxFile extends MdxFile {
  protected version: Version;
  protected sourceVersion: Version;
  protected canonicalVersion: Version | undefined;

  constructor(data: MdxData, version?: Version) {
    super(data);
    this.version = version || new Version("0.0.0");
    this.sourceVersion = new Version("0.0.0");
    this.canonicalVersion = undefined;
  }

  override clone(): any {
    const Klass = Object.getPrototypeOf(this).constructor;
    const clone = new Klass(this.props, this.version);
    clone.contents = this.contents;
    if (this.canonicalVersion) {
      clone.setCanonicalVersion(this.canonicalVersion);
    }
    clone.setOutputPath(this.outputPath);
    return clone;
  }

  getVersion() {
    return this.version;
  }

  setSourceVersion(version: Version) {
    this.sourceVersion = version;
  }

  setCanonicalVersion(version: Version) {
    if (version.gt(this.canonicalVersion) && version.gt(this.version)) {
      this.canonicalVersion = version;
    }
  }

  override getData(): Record<string, any> {
    const data = {
      ...super.getData(),
      version: this.version.getValue(),
      canonicalVersion: this.canonicalVersion && this.canonicalVersion.getValue(),
      type: this.type
    };

    return data;
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
