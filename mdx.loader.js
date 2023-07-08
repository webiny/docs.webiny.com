const { getOptions } = require("loader-utils");
const { createCompiler } = require("@mdx-js/mdx");

const DEFAULT_RENDERER = `
import React from 'react'
import { mdx } from '@mdx-js/react'
`;

let compiler;

const loader = async function (source) {
    const callback = this.async();
    const loaderOptions = getOptions(this);

    if (!compiler) {
        compiler = createCompiler({ remarkPlugins: loaderOptions.remarkPlugins });
    }

    const options = {
        contents: source,
        path: this.resourcePath
    };

    try {
        const { contents } = await compiler.process(options);
        const result = `/* @jsxRuntime classic */
/* @jsx mdx */
${contents}`;

        return callback(null, `${DEFAULT_RENDERER}\n${result}`);
    } catch (err) {
        return callback(err);
    }
};

module.exports = loader;
