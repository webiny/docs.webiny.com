import { basename } from "path";
import frontMatter from "front-matter";
import { VFileCompatible } from "vfile";
import { MdxData } from "../abstractions/IMdxFileFactory";

export interface FrontMatterAttributes {
  title: string;
  description: string;
  id?: string;
  slug?: string;
  pageHeader?: boolean;
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

export abstract class MdxFile {
  protected abstract type: string;
  protected readonly props: MdxData;
  protected readonly attributes: FrontMatterAttributes;
  protected readonly contents: string;
  protected outputPath = "";

  constructor(props: MdxData) {
    this.props = props;
    const { attributes, body } = frontMatter<FrontMatterAttributes>(props.rawBody);

    this.attributes = attributes;
    this.contents = body;
  }

  clone() {
    const Klass = Object.getPrototypeOf(this).constructor;
    const clone = new Klass(this.props);
    clone.contents = this.contents;
    clone.setOutputPath(this.outputPath);
    return clone;
  }

  /**
   * Get MDX contents, without the `frontmatter` section.
   */
  getContents() {
    return this.contents;
  }

  withContents(setter: (contents: string) => string) {
    const newFile = this.clone();
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
    return {
      type: this.type,
      weight: 100
    };
  }

  getData(): Record<string, any> {
    return {
      title: this.getTitle(),
      description: this.getDescription(),
      type: this.type,
      showPageHeader: this.attributes.pageHeader ?? true
    };
  }

  getVFile(): VFileCompatible {
    return {
      contents: this.getContents(),
      path: this.getAbsolutePath()
    };
  }
}
