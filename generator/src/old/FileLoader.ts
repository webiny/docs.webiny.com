import globby from "globby";
import { MdxFile } from "./MdxFile";

export class FileLoader {
  private readonly rootDirectory: string;

  constructor(rootDirectory: string) {
    this.rootDirectory = rootDirectory;
  }

  async load(): Promise<MdxFile[]> {
    const paths = await globby(`${this.rootDirectory}/**/*.mdx`);
    return await Promise.all(paths.map(path => MdxFile.create(path)));
  }
}
