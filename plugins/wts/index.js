const path = require("path");

module.exports = function(context, options) {
    // ...
    return {
        name: "wts-docusaurus-plugin",

        getClientModules() {
            return [path.resolve(__dirname, "./heap")];
        }
    };
};
