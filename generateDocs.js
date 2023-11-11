#!/usr/bin/env node
process.env.NODE_PATH = process.cwd();
const tsNode = require("ts-node");
const { resolve } = require("path");
const yargs = require("yargs");

tsNode.register({
    dir: resolve(__dirname)
});

const { Main } = require("./main");

(async () => {
    const { watch, watchOnly } = yargs.argv;

    const main = new Main();

    if (watchOnly) {
        await main.watch();
    }

    await main.generate();
    if (watch) {
        await main.watch();
    }

    process.exit();
})();
