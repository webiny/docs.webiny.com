#!/usr/bin/env node
process.env.NODE_PATH = process.cwd();
const tsNode = require("ts-node");
const { resolve } = require("path");
const yargs = require("yargs");

tsNode.register({
    dir: resolve(__dirname, "./generator")
});

const { App, Config } = require("./docsConfig");

(async () => {
    const { watch, watchOnly, version } = yargs
        .version(false)
        .option("v", {
            alias: "version",
            describe: "Whitelist versions to build.",
            type: "array",
            default: []
        })
        .option("watch", {
            default: false,
            description: "Run generator and watch for changes.",
            type: "boolean"
        })
        .option("watchOnly", {
            default: false,
            description: "Only watch for changes, without the initial generation.",
            type: "boolean"
        }).argv;

    const config = Config.create({
        devMode: process.env.NODE_ENV === "development",
        outputVersions: version
    });

    console.log(config);

    const app = new App(config);

    if (watchOnly) {
        await app.watch();
    }

    try {
        await app.generate();
    } catch (err) {
        console.error("CAUGHT ERROR", err.message);
        process.exit(1);
    }

    if (watch) {
        await app.watch();
    }

    process.exit();
})();
