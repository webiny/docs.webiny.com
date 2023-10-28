import { SourceFile } from "./SourceFile";
import { Navigation } from "./Navigation";

export abstract class DocumentRoot {
  abstract getSourceFiles(): Promise<SourceFile[]>;
  abstract getNavigation(): Promise<Navigation>;
}
