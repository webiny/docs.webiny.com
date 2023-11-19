import fs from "fs-extra";
import { IMdxProcessor } from "../abstractions/IMdxProcessor";
import { IMdxFileFactory } from "../abstractions/IMdxFileFactory";
import { IMdxFileLoader } from "../abstractions/IMdxFileLoader";
import { MdxFile } from "./MdxFile";

export class MdxFileLoader<T extends MdxFile = MdxFile> implements IMdxFileLoader<T> {
  private processor: IMdxProcessor<T>;
  private mdxFileFactory: IMdxFileFactory<T>;

  constructor(processor: IMdxProcessor<T>, mdxFileFactory: IMdxFileFactory<T>) {
    this.processor = processor;
    this.mdxFileFactory = mdxFileFactory;
  }

  async load(filePath: string): Promise<T> {
    const rawBody = await fs.readFile(filePath, "utf8");

    const rawMdxFile = this.mdxFileFactory.create({
      absolutePath: filePath,
      stats: await fs.stat(filePath),
      rawBody
    });

    return this.processor.processMdx(rawMdxFile) as T;
  }
}
