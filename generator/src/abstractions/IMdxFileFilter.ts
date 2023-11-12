import { MdxFile } from "../app/MdxFile";

export interface IMdxFileFilter<T extends MdxFile = MdxFile> {
  (mdxFile: T): boolean;
}
