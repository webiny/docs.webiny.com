export interface IFile {
  getOutputPath(): string;
  getSourcePath(): string | undefined;
  getContents(): string | Promise<string>;
}
