// @ts-ignore
import { createCompiler } from "@mdx-js/mdx";
// @ts-ignore
import withSmartQuotes from "@silvenon/remark-smartypants";
import { withTitleCaseHeadings } from "./mdxCompiler/remark/withTitleCaseHeadings";
import { withImages, unwrapImages } from "./mdxCompiler/remark/withImages";
import { withTableOfContents } from "./mdxCompiler/remark/withTableOfContents";
import { withSyntaxHighlighting } from "./mdxCompiler/remark/withSyntaxHighlighting";
import { withNextLinks } from "./mdxCompiler/remark/withNextLinks";
import { removeExports } from "./mdxCompiler/remark/removeExports";
import { MdxFile } from "./MdxFile";

const DEFAULT_RENDERER = `
import React from 'react'
import { mdx } from '@mdx-js/react'
`;

type RemarkPlugin = () => unknown;

export class MdxCompiler {
  private compiler: any;
  private readonly remarkPlugins: RemarkPlugin[];

  constructor() {
    this.remarkPlugins = [
      // TODO: fix MDX strings within JSX elements (add a new plugin)
      withTitleCaseHeadings,
      withTableOfContents,
      withImages,
      withSyntaxHighlighting,
      withNextLinks,
      withSmartQuotes,
      unwrapImages,
      removeExports
    ];
  }

  addRemarkPlugin(remarkPlugin: RemarkPlugin) {
    this.remarkPlugins.push(remarkPlugin);
  }

  async compile(mdxFile: MdxFile) {
    const options = {
      contents: mdxFile.getContents(),
      path: mdxFile.getPath()
    };

    const compiler = this.getCompiler();

    const { contents } = await compiler.process(options);
    return [
      `/* @jsxRuntime classic */`,
      `/* @jsx mdx */`,
      DEFAULT_RENDERER,
      contents.replace(/export const (.*?) \/\* remove \*\/ =/g, "const $1 ="),
      `MDXContent.layoutProps = layoutProps;`
    ].join("\n");
  }

  private getCompiler() {
    if (!this.compiler) {
      this.compiler = createCompiler({
        remarkPlugins: this.remarkPlugins
      });
    }

    return this.compiler;
  }
}
