import fs from "fs-extra";
import { IMdxProcessor } from "../abstractions/IMdxProcessor";
import { IMdxFileFactory } from "../abstractions/IMdxFileFactory";
import { MdxFileCache } from "./MdxFileCache";

export class MdxFileLoader {
  private cache: MdxFileCache;
  private processor: IMdxProcessor;
  private mdxFileFactory: IMdxFileFactory;

  constructor(cache: MdxFileCache, processor: IMdxProcessor, mdxFileFactory: IMdxFileFactory) {
    this.cache = cache;
    this.processor = processor;
    this.mdxFileFactory = mdxFileFactory;
  }

  async load(filePath: string, relativePath: string) {
    const cachedFile = await this.cache.get(filePath);

    if (cachedFile) {
      return cachedFile;
    }

    const rawBody = await fs.readFile(filePath, "utf8");

    const rawMdxFile = this.mdxFileFactory.create({
      absolutePath: filePath,
      relativePath,
      stats: await fs.stat(filePath),
      rawBody
    });

    const processedMdxFile = await this.processor.processMdx(rawMdxFile);

    await this.cache.set(filePath, processedMdxFile);

    return processedMdxFile;
  }
}
