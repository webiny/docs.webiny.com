import { IPageProcessorFactory } from "../../abstractions/IPageProcessorFactory";
import { IPage } from "../../abstractions/IPage";
import { CodeSeparatorProcessor } from "../../app/processors/CodeSeparatorProcessor";
import { LayoutProcessor } from "../../app/processors/LayoutProcessor";
import { PageDataProcessor } from "../../app/processors/PageDataProcessor";
import { DocsearchProcessor } from "../../app/processors/DocsearchProcessor";
import { IMdxProcessor } from "../../abstractions/IMdxProcessor";
import { CompositeMdxProcessor } from "../../app/CompositeMdxProcessor";

export class HandbookPageProcessorFactory implements IPageProcessorFactory {
  createPageProcessor(page: IPage): IMdxProcessor {
    return new CompositeMdxProcessor([
      // Add a separator before code generated via processors.
      new CodeSeparatorProcessor(page),
      // Inject layout component import.
      new LayoutProcessor(page, "@/layouts/HandbookLayout"),
      // Inject pageData into the page contents.
      new PageDataProcessor(page),
      // Inject Algolia indexing data.
      new DocsearchProcessor(page)
    ]);
  }
}
