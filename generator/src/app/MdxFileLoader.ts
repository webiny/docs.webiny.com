import fs from "fs-extra";
import { MdxFile } from "./MdxFile";

export class MdxFileLoader {
  private cache = new Map<string, { timeModified: number; mdxFile: MdxFile }>();

  async load(filePath: string) {
    const inCache = this.cache.get(filePath);
    const timeModified = await this.getTimeModified(filePath);

    if (inCache && inCache.timeModified === timeModified) {
      return inCache.mdxFile;
    }

    const mdxFileContents = await fs.readFile(filePath, "utf8");
    const mdxFile = MdxFile.createFromString(filePath, mdxFileContents);

    this.cache.set(filePath, { timeModified, mdxFile });

    return mdxFile;
  }

  private async getTimeModified(filePath: string) {
    const stats = await fs.stat(filePath);

    return stats.mtimeMs;
  }
}
