import { IMdxFileFactory, MdxData } from "../../abstractions/IMdxFileFactory";
import { MdxFile } from "../../app/MdxFile";
import { HandbookMdxFile } from "./HandbookMdxFile";

export class HandbookMdxFileFactory implements IMdxFileFactory {
  create(data: MdxData): MdxFile {
    return new HandbookMdxFile(data);
  }
}
