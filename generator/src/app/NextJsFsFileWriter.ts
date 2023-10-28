import { IFileWriter } from "../abstractions/IFileWriter";
import { FsFileWriter } from "./FsFileWriter";

export class NextJsFsFileWriter implements IFileWriter {
  private readonly location = "src";
  private readonly fsFileWriter = new FsFileWriter();

  async write(content: string, relativePath: string): Promise<void> {
    const target = `${this.location}/${relativePath}`;
    console.log(`Writing file: ${target}`);
    await this.fsFileWriter.write(content, target);
  }
}
