import { MdxFile } from "../app/MdxFile";
import { IFile } from "./IFile";

export interface IMdxFileWriter {
  output(mdxFile: MdxFile): Promise<IFile[]>;
}
