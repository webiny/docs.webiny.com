import { IPage } from "./IPage";
import { IMdxProcessor } from "./IMdxProcessor";

export interface IPageProcessorFactory {
  createPageProcessor(page: IPage): IMdxProcessor;
}
