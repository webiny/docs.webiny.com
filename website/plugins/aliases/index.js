const path = require("path");

module.exports = function(context, options) {
    return {
        name: "resolve-aliases",
        configureWebpack(config) {
            const alias = {
                "@components": path.resolve(__dirname, "../../components"),
                react: require.resolve("react"),
                "react-dom/server": require.resolve("react-dom/server"),
                "react-dom": require.resolve("react-dom")
            };

            console.log("alias", alias);

            return {
                resolve: {
                    alias
                }
            };
        }
    };
};
