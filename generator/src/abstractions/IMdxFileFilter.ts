import { MdxFile } from "../app/MdxFile";

export interface IMdxFileFilter<TMdxFile extends MdxFile = MdxFile> {
  filter(mdxFile: TMdxFile): boolean;
}
