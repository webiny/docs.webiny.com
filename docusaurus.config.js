const path = require("path");

const siteConfig = {
    plugins: [
        // [
        //     "@webiny/plugin-cognito"
        // ]
        [
            "@docusaurus/plugin-client-redirects",
            {
                redirects: [
                    {
                        from: "/docs/enterprise",
                        to: "/docs/enterprise/multi-tenancy"
                    },
                    {
                        from: "/docs",
                        to: "/docs/webiny/introduction"
                    }
                ]
            }
        ],
        path.resolve(__dirname, "plugins/wts"),
        path.resolve(__dirname, "plugins/aliases")
    ],
    scripts: [
        "/docusaurus-scripts/heap.js",
        {
            src: "https://plausible.io/js/plausible.js",
            async: true,
            defer: true,
            "data-domain": "webiny.com"
        }
    ],
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
                    path: "./docs",
                    sidebarPath: require.resolve("./sidebars.js"),
                    editUrl: "https://github.com/webiny/docs.webiny.com/edit/master/",
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
            hideOnScroll: true,
            logo: {
                alt: "Webiny Docs",
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
                }
                // {
                //     href: "https://storybook.webiny.com",
                //     label: "Storybook",
                //     position: "right"
                // }
            ]
        },
        announcementBar: {
            id: "support_us", // Any value that will identify this message.
            content:
                '⭐️ If you like Webiny, give it a star on <a href="https://github.com/webiny/webiny-js" target="_blank">GitHub</a>! ⭐️',
            backgroundColor: "#fafbfc", // Defaults to `#fff`.
            textColor: "#091E42", // Defaults to `#000`.
            isCloseable: false // Defaults to `true`.
        }
    }
};

module.exports = siteConfig;
