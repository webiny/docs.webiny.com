import { MdxFile } from "../app/MdxFile";

export interface IMdxFileLoader<T extends MdxFile = MdxFile> {
  load(filePath: string): Promise<T>;
}
