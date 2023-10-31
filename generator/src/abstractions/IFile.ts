export interface IFile {
  getRelativePath(): string;
  getContents(): string | Promise<string>;
}
