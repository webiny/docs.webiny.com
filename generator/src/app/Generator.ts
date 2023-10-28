import { IProvider } from "../abstractions/IProvider";
import { IFileWriter } from "../abstractions/IFileWriter";

export class Generator {
  private provider: IProvider;
  private fileWriter: IFileWriter;

  constructor(provider: IProvider, fileWriter: IFileWriter) {
    this.fileWriter = fileWriter;
    this.provider = provider;
  }

  async execute() {
    const files = await this.provider.getFiles();

    for (const file of files) {
      await this.fileWriter.write(file.getContents(), file.getRelativePath());
    }
  }
}
