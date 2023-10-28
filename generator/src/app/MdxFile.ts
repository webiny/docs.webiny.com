import frontMatter from "front-matter";
import fs from "fs-extra";

export interface FrontMatterAttributes {
  title: string;
  description: string;
  [key: string]: string;
}

export class MdxFile {
  private readonly filePath: string;
  private readonly relativePath: string;
  private contents: string;
  private attributes: FrontMatterAttributes;

  public static async create(filePath: string, relativePath: string) {
    const mdxFile = new MdxFile(filePath, relativePath);
    await mdxFile.initialize();
    return mdxFile;
  }

  private constructor(filePath: string, relativePath: string) {
    this.filePath = filePath;
    this.relativePath = relativePath;
    this.contents = "";
    this.attributes = {
      title: "",
      description: ""
    };
  }

  private async initialize() {
    const mdxContents = await fs.readFile(this.filePath, "utf8");
    const { attributes, body } = frontMatter<FrontMatterAttributes>(mdxContents);
    this.attributes = attributes;
    this.contents = body;
  }

  getFilePath() {
    return this.filePath;
  }

  getRelativePath() {
    return this.relativePath;
  }

  getContents() {
    return this.contents;
  }

  getTitle() {
    return this.attributes?.title ?? "";
  }

  getDescription() {
    return this.attributes?.description ?? "";
  }

  getAttributes() {
    return this.attributes as FrontMatterAttributes;
  }
}
