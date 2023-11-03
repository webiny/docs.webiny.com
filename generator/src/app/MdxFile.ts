import { basename } from "path";
import frontMatter from "front-matter";
import { MdxData } from "../abstractions/IMdxFileFactory";
import { file } from "brotli-size";

export interface FrontMatterAttributes {
  title: string;
  description: string;
  id?: string;
  slug?: string;
}

class FilePath {
  private readonly basePath: string;

  static create(input: string) {
    return new FilePath(input.replace(".mdx", "").replace(/^\//, ""));
  }

  private constructor(basePath: string) {
    this.basePath = basePath;
  }

  withExtension(ext: string) {
    return `${this.basePath}.${ext}`;
  }

  withoutExtension() {
    return this.basePath;
  }

  toString() {
    return this.basePath;
  }
}

export class MdxFile {
  private readonly props: MdxData;
  private readonly attributes: FrontMatterAttributes;
  private readonly contents: string;
  private outputPath = "";

  constructor(props: MdxData) {
    this.props = props;
    const { attributes, body } = frontMatter<FrontMatterAttributes>(props.rawBody);

    this.attributes = attributes;
    this.contents = body;
  }

  /**
   * Get MDX contents, without the `frontmatter` section.
   */
  getContents() {
    return this.contents;
  }

  withContents(setter: (contents: string) => string) {
    const Klass = Object.getPrototypeOf(this).constructor;
    const newFile = new Klass(this.props);
    newFile.contents = setter(this.contents);
    return newFile;
  }

  getAbsolutePath() {
    return this.props.absolutePath;
  }

  setOutputPath(outputPath: string) {
    this.outputPath = outputPath;
  }

  getOutputPath() {
    return FilePath.create(this.outputPath);
  }

  getId() {
    return this.attributes?.id ?? null;
  }

  getSlug() {
    let slug = this.attributes?.slug;
    if (slug) {
      return slug;
    }

    const fileName = basename(this.getAbsolutePath());

    const id = this.getId();
    if (id) {
      return `${fileName}-${id}`;
    }

    return fileName;
  }

  getTitle() {
    return this.attributes?.title ?? "";
  }

  getDescription() {
    return this.attributes?.description ?? "";
  }

  getStats() {
    return this.props.stats;
  }

  getDocsearch(): Record<string, any> {
    return {};
  }

  getData(): Record<string, any> {
    return {
      title: this.getTitle(),
      description: this.getDescription()
    };
  }
}
