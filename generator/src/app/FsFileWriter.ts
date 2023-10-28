import path from "path";
import fs from "fs-extra";
import { IFileWriter } from "../abstractions/IFileWriter";

export class FsFileWriter implements IFileWriter {
  async write(content: string, location: string) {
    const directory = path.dirname(location);
    await fs.emptyDir(directory);
    await fs.writeFile(location, content);
  }
}
