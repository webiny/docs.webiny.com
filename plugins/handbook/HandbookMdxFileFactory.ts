import { IMdxFileFactory, MdxData, MdxFile } from "@webiny/docs-generator";
import { HandbookMdxFile } from "./HandbookMdxFile";

export class HandbookMdxFileFactory implements IMdxFileFactory {
  create(data: MdxData): MdxFile {
    return new HandbookMdxFile(data);
  }
}
