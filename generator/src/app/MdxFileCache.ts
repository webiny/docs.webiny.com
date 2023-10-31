import { MdxFile } from "./MdxFile";
import fs from "fs-extra";

export class MdxFileCache {
  private cache = new Map<string, { timeModified: number; mdxFile: MdxFile }>();

  async get(filePath: string): Promise<MdxFile | undefined> {
    const timeModified = await this.getTimeModified(filePath);
    const inCache = this.cache.get(filePath);

    if (inCache && inCache.timeModified === timeModified) {
      return inCache.mdxFile;
    }

    return undefined;
  }

  async set(filePath: string, mdxFile: MdxFile): Promise<void> {
    const timeModified = await this.getTimeModified(filePath);
    this.cache.set(filePath, { timeModified, mdxFile });
  }

  private async getTimeModified(filePath: string) {
    const stats = await fs.stat(filePath);

    return stats.mtimeMs;
  }
}
