import { MdxFile } from "./MdxFile";

export class NavigationCache {
  private cache = new Map<string, MdxFile>();

  get(key: string): MdxFile | undefined {
    const inCache = this.cache.get(key);

    if (inCache) {
      return inCache;
    }

    return undefined;
  }

  set(key: string, mdxFile: MdxFile): void {
    this.cache.set(key, mdxFile);
  }

  isFileDifferentFromCache(key: string, mdxFile: MdxFile) {
    const inCache = this.cache.get(key);
    if (inCache) {
      return mdxFile.getStats().mtimeMs > inCache.getStats().mtimeMs;
    }

    return true;
  }
}
