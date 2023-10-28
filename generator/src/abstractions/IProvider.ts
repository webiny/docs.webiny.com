import { IFile } from "./IFile";

export interface IProvider {
  getFiles(): Promise<IFile[]>;
}
