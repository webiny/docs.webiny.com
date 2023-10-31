import { dirname } from "path";
import fs from "fs-extra";
import { IFileWriter } from "../abstractions/IFileWriter";
import { IFile } from "../abstractions/IFile";

export class FsFileWriter implements IFileWriter {
  private readonly basePath: string;

  constructor(basePath: string) {
    this.basePath = basePath;
  }

  async write(file: IFile): Promise<void> {
    const target = `${this.basePath}/${file.getRelativePath()}`;
    console.log(`Writing file: ${target.replace(process.cwd(), "")}`);
    await fs.ensureDir(dirname(target));
    await fs.writeFile(target, await file.getContents());
  }
}
