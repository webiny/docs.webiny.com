export interface IFileWriter {
  write(content: string, relativePath: string): Promise<void>;
}
