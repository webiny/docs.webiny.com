import { MdxFile } from "../app/MdxFile";

export interface ICachedFile {
  isFromCache(): boolean;
  getFile(): MdxFile;
}

export interface IMdxFileLoader {
  load(filePath: string): Promise<ICachedFile>;
}
