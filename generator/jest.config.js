/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
    preset: "ts-jest",
    transform: {
        "^.+\\.(ts|tsx)$": "ts-jest"
    },
    moduleDirectories: ["node_modules"],
    moduleFileExtensions: ["ts", "js", "tsx", "json"],
    modulePathIgnorePatterns: [],
    watchman: false
};
