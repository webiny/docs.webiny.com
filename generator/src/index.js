#!/usr/bin/env node
process.env.NODE_PATH = process.cwd();
const tsNode = require("ts-node");
const { resolve } = require("path");

tsNode.register({
    dir: resolve(__dirname, "..")
});

const { main } = require("./main");

(async () => {
    await main();
    process.exit();
})();
