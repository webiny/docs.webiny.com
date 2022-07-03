const fs = require("fs-extra");
const semver = require("semver");
const path = require("path");

const allVersions = semver
    .rsort(
        fs
            .readdirSync(path.join(process.cwd(), "src/docs"))
            .map(p => p.replace(".x", ".0"))
            .filter(semver.valid)
    )
    .map(v => v.replace(".0", ".x"));

module.exports = {
    allVersions,
    latestVersion: allVersions[0]
};
