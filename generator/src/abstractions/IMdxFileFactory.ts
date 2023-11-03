import type { Stats } from "fs";
import { MdxFile } from "../app/MdxFile";

export type MdxData = {
  absolutePath: string;
  rawBody: string;
  stats: Stats;
};

export interface IMdxFileFactory {
  create(data: MdxData): MdxFile;
}
