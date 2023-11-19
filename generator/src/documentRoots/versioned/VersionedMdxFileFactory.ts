import {
  IMdxFileFactory,
  MdxData,
  Version,
  VersionedMdxFileFactoryCallable
} from "@webiny/docs-generator";
import { VersionedMdxFile } from "./VersionedMdxFile";

export class VersionedMdxFileFactory implements IMdxFileFactory<VersionedMdxFile> {
  private readonly version: Version;
  private readonly factory: VersionedMdxFileFactoryCallable;

  constructor(factory: VersionedMdxFileFactoryCallable, version: Version) {
    this.factory = factory;
    this.version = version;
  }

  create(data: MdxData): VersionedMdxFile {
    return this.factory(data, this.version);
  }
}
