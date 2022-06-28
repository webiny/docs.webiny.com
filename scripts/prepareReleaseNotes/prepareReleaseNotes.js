const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");
const execa = require("execa");
const semver = require("semver");
const semverSort = require("semver-sort");
const { replaceInPath } = require("replace-in-path");
const util = require("util");
const ncpBase = require("ncp");
const ncp = util.promisify(ncpBase.ncp);

const templatesFolderPath = path.join(__dirname, "prepareReleaseNotes");
const releaseNotesFolderPath = path.join(process.cwd(), "src", "pages", "docs", "release-notes");

const releasedVersions = fs.readdirSync(releaseNotesFolderPath).filter(semver.valid);
const [latestVersion] = semverSort.desc(releasedVersions);

(async () => {
    const args = await inquirer.prompt([
        {
            name: "fromVersion",
            default: latestVersion,
            message: "Please type latest (currently released) version:"
        },
        {
            name: "toVersion",
            default: semver.inc(latestVersion, "minor"),
            message: "Please type new (to be released) version:"
        },
        {
            name: "createPr",
            type: "confirm",
            default: true,
            message: `Would you like to create a PR immediately?`
        }
    ]);

    const newFilesPath = path.join(releaseNotesFolderPath, args.toVersion);
    if (fs.existsSync(newFilesPath)) {
        throw new Error(`Cannot create "${args.toVersion}" path - folder already exists`);
    }

    await ncp(templatesFolderPath, newFilesPath);

    const codeReplacements = [
        {
            find: "{VERSION_FROM}",
            replaceWith: args.fromVersion
        },
        {
            find: "{VERSION_TO}",
            replaceWith: args.toVersion
        }
    ];
    replaceInPath(path.join(newFilesPath, "/**/*.*"), codeReplacements);

    if (args.createPr) {
        {
            const result = execa.sync("git", ["fetch"]);
            console.log(result.stdout);
        }

        {
            const result = execa.sync("git", [
                "checkout",
                "-b",
                `webiny-${args.toVersion}`,
                "origin/master"
            ]);
            console.log(result.stdout);
        }

        {
            const result = execa.sync("git", [
                "push",
                "-b",
                `webiny-${args.toVersion}`,
                "origin/master"
            ]);
            console.log(result.stdout);
        }

        // await execa('git', ['checkout', 'master'])
        // 1. create a new branch
        // 2. commit changes
        // 3. push changes
        // 4. crate PR
    }
})();
