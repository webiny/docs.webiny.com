import { MdxFile } from "../app/MdxFile";

export interface IMdxProcessor<T extends MdxFile = MdxFile> {
  processMdx(mdxFile: T): T | Promise<T>;
}
