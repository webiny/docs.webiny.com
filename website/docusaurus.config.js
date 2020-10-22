const path = require("path");

const siteConfig = {
    plugins: [path.resolve(__dirname, "plugins/wts")],
    title: "Webiny Documentation", // Title for your website.
    tagline: "Serverless CMS",
    url: "https://www.webiny.com", // Your website URL
    baseUrl: "/", // Base URL for your project */
    projectName: "webiny-js",
    organizationName: "webiny",
    favicon: "img/favicon.ico",
    presets: [
        [
            "@docusaurus/preset-classic",
            {
                docs: {
                    path: "../docs",
                    sidebarPath: require.resolve("./sidebars.js"),
                    editUrl: "https://github.com/webiny/docs.webiny.com/edit/master/docs/",
                    showLastUpdateAuthor: true,
                    showLastUpdateTime: true
                },
                theme: {
                    customCss: require.resolve("./static/css/custom.css")
                }
            }
        ]
    ],
    themeConfig: {
        algolia: {
            apiKey: "dd52f562d0728dab8423289926b5d055",
            indexName: "webiny-js",
            algoliaOptions: {} // Optional, if provided by Algolia
        },
        gtag: {
            trackingID: "UA-35527198-1"
        },
        navbar: {
            title: "Webiny Docs",
            logo: {
                alt: "Webiny Serverless CMS Logo",
                src: "img/white-square-icon.svg",
                href: "/docs/webiny/introduction"
            },
            items: [
                {
                    href: "https://www.webiny.com/",
                    label: "Webiny Home",
                    position: "right"
                },
                {
                    href: "https://github.com/webiny/webiny-js",
                    label: "GitHub",
                    position: "right"
                },
                {
                    href: "https://storybook.webiny.com",
                    label: "Storybook",
                    position: "right"
                }
            ]
        }
    }
};

module.exports = siteConfig;
