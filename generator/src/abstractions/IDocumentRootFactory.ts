import { IDocumentRoot } from "./IDocumentRoot";

export interface IDocumentRootFactory {
  getDocumentRoots(): IDocumentRoot[];
}
