import type { Stats } from "fs";
import { MdxFile } from "../app/MdxFile";

export type MdxData = {
  absolutePath: string;
  rawBody: string;
  stats: Stats;
};

export interface IMdxFileFactory<T extends MdxFile = MdxFile> {
  create(data: MdxData): T;
}
