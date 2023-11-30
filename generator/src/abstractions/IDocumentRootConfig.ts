import { IDocumentRootFactory } from "./IDocumentRootFactory";
import { AppConfig } from "../app/AppConfig";

export interface IDocumentRootConfig {
  getDocumentRootFactory(appConfig: AppConfig): IDocumentRootFactory;
}
