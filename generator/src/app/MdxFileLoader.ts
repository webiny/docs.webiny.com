import fs from "fs-extra";
import * as path from "path";
import { IMdxProcessor } from "../abstractions/IMdxProcessor";
import { IMdxFileFactory } from "../abstractions/IMdxFileFactory";
import { IMdxFileLoader } from "../abstractions/IMdxFileLoader";
import { MdxFile } from "./MdxFile";

export class MdxFileLoader<T extends MdxFile = MdxFile> implements IMdxFileLoader<T> {
  protected readonly rootDir: string;
  private processor: IMdxProcessor<T>;
  private mdxFileFactory: IMdxFileFactory<T>;

  constructor(rootDir: string, processor: IMdxProcessor<T>, mdxFileFactory: IMdxFileFactory<T>) {
    this.rootDir = rootDir;
    this.processor = processor;
    this.mdxFileFactory = mdxFileFactory;
  }

  async load(filePath: string): Promise<T> {
    const pathWithRoot = this.resolvePath(filePath);
    const rawBody = await fs.readFile(pathWithRoot, "utf8");

    const rawMdxFile = this.mdxFileFactory.create({
      absolutePath: pathWithRoot,
      stats: await fs.stat(pathWithRoot),
      rawBody
    });

    return this.processor.processMdx(rawMdxFile) as T;
  }

  private resolvePath(filePath: string) {
    if (filePath.startsWith(this.rootDir)) {
      return filePath;
    }

    return path.join(this.rootDir, filePath);
  }
}
