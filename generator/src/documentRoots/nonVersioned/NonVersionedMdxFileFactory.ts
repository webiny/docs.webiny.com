import { IMdxFileFactory, MdxData, MdxFile } from "@webiny/docs-generator";
import { NonVersionedMdxFileFactoryCallable } from "./NonVersionedDocumentRootConfig";

export class NonVersionedMdxFileFactory implements IMdxFileFactory {
  private readonly factory: NonVersionedMdxFileFactoryCallable;

  constructor(factory: NonVersionedMdxFileFactoryCallable) {
    this.factory = factory;
  }

  create(data: MdxData): MdxFile {
    return this.factory(data);
  }
}
