import { MdxFile } from "../app/MdxFile";

export interface IMdxProcessor {
  processMdx(mdxFile: MdxFile): MdxFile | Promise<MdxFile>;
}
