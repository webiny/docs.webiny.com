import fs from "fs-extra";
import frontMatter from "front-matter";
import { mdbid } from "@webiny/utils";
import { IMdxProcessor } from "../abstractions/IMdxProcessor";
import { IMdxFileFactory } from "../abstractions/IMdxFileFactory";
import { IMdxFileLoader } from "../abstractions/IMdxFileLoader";
import { FrontMatterAttributes, MdxFile } from "./MdxFile";
import { raw } from "concurrently/dist/src/defaults";
import { getRawProjectId } from "next/dist/telemetry/project-id";

export class MdxFileLoader<T extends MdxFile = MdxFile> implements IMdxFileLoader<T> {
  private processor: IMdxProcessor<T>;
  private mdxFileFactory: IMdxFileFactory<T>;

  constructor(processor: IMdxProcessor<T>, mdxFileFactory: IMdxFileFactory<T>) {
    this.processor = processor;
    this.mdxFileFactory = mdxFileFactory;
  }

  async load(filePath: string): Promise<T> {
    const rawBody = await fs.readFile(filePath, "utf8");

    const bodyWithId = await this.injectId(filePath, rawBody);

    const rawMdxFile = this.mdxFileFactory.create({
      absolutePath: filePath,
      stats: await fs.stat(filePath),
      rawBody: bodyWithId
    });

    return this.processor.processMdx(rawMdxFile) as T;
  }

  async injectId(filePath: string, rawBody: string) {
    const { attributes, frontmatter } = frontMatter<FrontMatterAttributes>(rawBody);
    if (attributes.id !== undefined || !frontmatter) {
      return rawBody;
    }

    const frontMatterWithId = Object.entries(attributes)
      .reduce((acc, row) => [...acc, `${row[0]}: ${row[1]}`], [`id: ${mdbid().slice(-8)}`])
      .join("\n");

    const rawBodyWithId = rawBody.replace(frontmatter, frontMatterWithId);
    await fs.writeFile(filePath, rawBodyWithId);

    return rawBodyWithId;
  }
}
