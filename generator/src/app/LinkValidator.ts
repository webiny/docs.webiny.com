import { blue, gray, red } from "chalk";
import { LinkCollectorRemarkPlugin } from "./mdxCompiler/remark/LinkCollectorRemarkPlugin";
import { ConsoleLogger } from "./ConsoleLogger";

export interface ValidationCallback {
  (link: string): Promise<boolean> | boolean;
}

class LinkValidationResult {
  private readonly invalidLinks: Map<string, string[]>;

  private constructor(invalidLinks: Map<string, string[]>) {
    this.invalidLinks = invalidLinks;
  }

  hasErrors() {
    return this.invalidLinks.size > 0;
  }

  entries() {
    return this.invalidLinks.entries();
  }

  static create(invalidLinks: Map<string, string[]>) {
    return new LinkValidationResult(invalidLinks);
  }
}

export class LinkValidator {
  private readonly validator: ValidationCallback;
  private readonly linkCollection = new Map<string, Set<string>>();
  private readonly skipPrefixes = ["#", "http://", "https://", "mailto:"];

  constructor(validator: ValidationCallback) {
    this.validator = validator;
  }

  async validate(match?: string) {
    const invalidFileLinks = new Map<string, string[]>();
    for (const [filePath, links] of this.linkCollection.entries()) {
      if (match && !filePath.includes(match)) {
        continue;
      }
      const invalidLinks: string[] = [];
      for (const link of links.values()) {
        if (this.skipPrefixes.some(prefix => link.startsWith(prefix))) {
          continue;
        }

        const [url] = link.split("#");

        const isValid = await this.validator(url);
        if (!isValid) {
          invalidLinks.push(link);
        }
      }

      if (invalidLinks.length > 0) {
        invalidFileLinks.set(filePath, invalidLinks);
      }
    }

    return LinkValidationResult.create(invalidFileLinks);
  }

  reset() {
    this.linkCollection.clear();
  }

  getRemarkPlugin() {
    return new LinkCollectorRemarkPlugin((filePath, link) => this.onLink(filePath, link));
  }

  private onLink(filePath: string, link: string) {
    if (filePath.includes("/release-notes/")) {
      return;
    }

    if (!this.linkCollection.has(filePath)) {
      this.linkCollection.set(filePath, new Set<string>());
    }

    const uniqueLinks = this.linkCollection.get(filePath);
    if (uniqueLinks) {
      uniqueLinks.add(link);
    }
  }
}

export class LinkValidationConsoleReporter {
  private logger: ConsoleLogger;

  constructor(logger: ConsoleLogger) {
    this.logger = logger;
  }

  report(result: LinkValidationResult) {
    if (!result.hasErrors()) {
      return;
    }

    const report: string[] = [];

    this.logger.error(`Broken links were detected in the following files:`);

    for (const [filePath, links] of result.entries()) {
      report.push(`◯ Source file: ${gray(filePath.replace(process.cwd(), ""))}`);
      links.forEach((link, index) => {
        const icon = index + 1 === links.length ? "└" : "├";
        report.push(`${icon} ${red(link)}`);
      });
      report.push("");
    }

    process.stdout.write(report.join("\n"));
  }
}
