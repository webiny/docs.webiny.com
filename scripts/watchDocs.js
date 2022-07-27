require("@babel/register")({
    presets: ["@babel/preset-react", "@babel/preset-env"],
    plugins: [
        [
            "babel-plugin-module-resolver",
            {
                root: [process.cwd()],
                alias: {
                    "@": "./src"
                }
            }
        ]
    ]
});

const { watchDocs } = require("./versionedDocs/watchDocs");
watchDocs();
