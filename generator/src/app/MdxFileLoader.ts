import fs from "fs-extra";
import { IMdxProcessor } from "../abstractions/IMdxProcessor";
import { IMdxFileFactory } from "../abstractions/IMdxFileFactory";
import { MdxFileCache } from "./MdxFileCache";
import { MdxFile } from "./MdxFile";

export interface ICachedFile {
  isFromCache(): boolean;
  getFile(): MdxFile;
}

class FileFromCache implements ICachedFile {
  private readonly mdxFile: MdxFile;

  constructor(mdxFile: MdxFile) {
    this.mdxFile = mdxFile;
  }

  getFile(): MdxFile {
    return this.mdxFile;
  }

  isFromCache(): boolean {
    return true;
  }
}

class FileFromFileSystem implements ICachedFile {
  private readonly mdxFile: MdxFile;

  constructor(mdxFile: MdxFile) {
    this.mdxFile = mdxFile;
  }

  getFile(): MdxFile {
    return this.mdxFile;
  }

  isFromCache(): boolean {
    return false;
  }
}

export class MdxFileLoader {
  private readonly rootDir: string;
  private cache: MdxFileCache;
  private processor: IMdxProcessor;
  private mdxFileFactory: IMdxFileFactory;

  constructor(
    rootDir: string,
    cache: MdxFileCache,
    processor: IMdxProcessor,
    mdxFileFactory: IMdxFileFactory
  ) {
    this.rootDir = rootDir;
    this.cache = cache;
    this.processor = processor;
    this.mdxFileFactory = mdxFileFactory;
  }

  async load(filePath: string): Promise<ICachedFile> {
    const pathWithRoot = `${this.rootDir}/${filePath}`;
    const cachedFile = await this.cache.get(pathWithRoot);

    if (cachedFile) {
      return new FileFromCache(cachedFile);
    }

    const rawBody = await fs.readFile(pathWithRoot, "utf8");

    const rawMdxFile = this.mdxFileFactory.create({
      absolutePath: pathWithRoot,
      stats: await fs.stat(pathWithRoot),
      rawBody
    });

    const processedMdxFile = await this.processor.processMdx(rawMdxFile);

    await this.cache.set(pathWithRoot, processedMdxFile);

    return new FileFromFileSystem(processedMdxFile);
  }
}
