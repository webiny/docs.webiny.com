const path = require("path");

module.exports = function(context, options) {
    return {
        name: "resolve-aliases",
        configureWebpack(config) {
            return {
                resolve: {
                    alias: {
                        "@components": path.resolve(__dirname, "../../components")
                    }
                }
            };
        }
    };
};
