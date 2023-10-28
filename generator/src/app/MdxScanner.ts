import globby from "globby";
import { MdxFile } from "./MdxFile";

export class MdxScanner {
  private readonly rootDirectory: string;

  constructor(rootDirectory: string) {
    this.rootDirectory = rootDirectory;
  }

  async scan(): Promise<MdxFile[]> {
    const paths = await globby(`${this.rootDirectory}/**/*.mdx`);
    return await Promise.all(
      paths.map(path =>
        MdxFile.create(path, path.split(this.rootDirectory)[1].replace(/\.mdx$/, ""))
      )
    );
  }
}
