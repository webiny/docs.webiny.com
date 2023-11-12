import fs from "fs-extra";
import * as path from "path";
import { IMdxProcessor } from "../abstractions/IMdxProcessor";
import { IMdxFileFactory } from "../abstractions/IMdxFileFactory";
import { ICachedFile, IMdxFileLoader } from "../abstractions/IMdxFileLoader";
import { MdxFileCache } from "./MdxFileCache";
import { MdxFile } from "./MdxFile";

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

export class MdxFileLoader implements IMdxFileLoader {
  protected readonly rootDir: string;
  private mdxFileCache: MdxFileCache;
  private processor: IMdxProcessor;
  private mdxFileFactory: IMdxFileFactory;

  constructor(
    rootDir: string,
    mdxFileCache: MdxFileCache,
    processor: IMdxProcessor,
    mdxFileFactory: IMdxFileFactory
  ) {
    this.rootDir = rootDir;
    this.mdxFileCache = mdxFileCache;
    this.processor = processor;
    this.mdxFileFactory = mdxFileFactory;
  }

  async load(filePath: string): Promise<ICachedFile> {
    const pathWithRoot = this.resolvePath(filePath);
    const cachedFile = await this.mdxFileCache.get(pathWithRoot);

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

    await this.mdxFileCache.set(pathWithRoot, processedMdxFile);

    return new FileFromFileSystem(processedMdxFile);
  }

  private resolvePath(filePath: string) {
    if (filePath.startsWith(this.rootDir)) {
      return filePath;
    }

    return path.join(this.rootDir, filePath);
  }
}
