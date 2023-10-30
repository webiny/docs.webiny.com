import frontMatter from "front-matter";

export interface FrontMatterAttributes {
  title: string;
  description: string;
  [key: string]: string;
}

export class MdxFile {
  private readonly path: string;
  private readonly body: string;
  private contents: string;
  private attributes: FrontMatterAttributes;

  public static createFromString(path: string, body: string) {
    const mdxFile = new MdxFile(path, body);
    mdxFile.initialize();
    return mdxFile;
  }

  private constructor(path: string, body: string) {
    this.path = path;
    this.body = body;
    this.contents = "";
    this.attributes = {
      title: "",
      description: ""
    };
  }

  private initialize() {
    const { attributes, body } = frontMatter<FrontMatterAttributes>(this.body);
    this.attributes = attributes;
    this.contents = body;
  }

  /**
   * Get full file body.
   */
  getBody() {
    return this.body;
  }

  /**
   * Get MDX contents, without the `frontmatter` section.
   */
  getContents() {
    return this.contents;
  }

  withContents(setter: (contents: string) => string) {
    const newFile = MdxFile.createFromString(this.path, this.body);
    newFile.contents = setter(this.contents);
    return newFile;
  }

  getPath() {
    return this.path;
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
