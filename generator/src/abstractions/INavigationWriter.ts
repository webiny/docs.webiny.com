import { IFile } from "./IFile";
import { Navigation } from "../app/Navigation";

export interface INavigationWriter {
  output(navigation: Navigation): Promise<IFile[]>;
}
