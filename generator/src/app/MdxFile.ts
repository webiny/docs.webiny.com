import frontMatter from "front-matter";
import { MdxData } from "../abstractions/IMdxFileFactory";

export interface FrontMatterAttributes {
  title: string;
  description: string;
  [key: string]: string;
}

export class MdxFile {
  private readonly props: MdxData;
  private readonly attributes: FrontMatterAttributes;
  private contents: string;

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

  getRelativePath() {
    return this.props.relativePath;
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
