import { dirname } from "path";
import fs from "fs-extra";
import { IFileWriter } from "../abstractions/IFileWriter";
import { IFile } from "../abstractions/IFile";
import { ILogger } from "../abstractions/ILogger";

export class FsFileWriter implements IFileWriter {
  private readonly basePath: string;
  private logger: ILogger;

  constructor(basePath: string, logger: ILogger) {
    this.logger = logger;
    this.basePath = basePath;
  }

  async write(file: IFile): Promise<void> {
    const target = `${this.basePath}/${file.getOutputPath()}`;
    this.logger.debug(`Writing file: %s`, target.replace(process.cwd(), ""));
    await fs.ensureDir(dirname(target));
    await fs.writeFile(target, await file.getContents());
  }
}
