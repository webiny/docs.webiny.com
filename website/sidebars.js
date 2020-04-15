module.exports = {
    docs: {
        Webiny: ["webiny/introduction"],
        "Get Started": [
            "get-started/quick-start",
            "get-started/going-live",
            "get-started/development-principles"
        ],
        "Deep Dive": [
            "deep-dive/project-structure",
            {
                type: "category",
                label: "Webiny Architecture",
                items: [
                    "deep-dive/architecture/overview",
                    "deep-dive/architecture/api",
                    "deep-dive/architecture/client-side",
                    "deep-dive/architecture/file-service",
                    "deep-dive/architecture/security-service",
                    "deep-dive/architecture/resources"
                ]
            },
            //"deep-dive/database",
            // "deep-dive/deployment",
            "deep-dive/plugins-crash-course"
        ],
        "API Development": [
            "api-development/graphql",
            {
                type: "category",
                label: "Commodo",
                items: [
                    "api-development/commodo/introduction",
                    "api-development/commodo/crash-course",
                    //"api-development/commodo/how-to-use-with-webiny",
                    "api-development/commodo/packages-list"
                ]
            },
            "api-development/plugins-reference",
            /*"api-overview",
             "api-schema-plugin",
             "api-schema-test",*/
        ],
        "App Development": ["coming-soon"],
        /*Plugins: [
      'plugins/adding-your-plugin',
      // add your plugin page below, make sure it's ordered alphabetically
    ],*/
        "Webiny Apps": [
            /*
            {
                type: "category",
                label: "Admin",
                items: ["webiny-apps/admin/introduction"]
            },
            */
            {
                type: "category",
                label: "Admin",
                items: [
                    "webiny-apps/admin/introduction",
                    {
                        type: "category",
                        label: "Development",
                        items: [
                            "webiny-apps/admin/development/header",
                            "webiny-apps/admin/development/menus",
                            "webiny-apps/admin/development/routes",
                            {
                                type: "category",
                                label: "Plugins Reference",
                                items: ["webiny-apps/admin/development/plugins-reference/app"]
                            }
                        ]
                    }
                ]
            },
            {
                type: "category",
                label: "File Manager",
                items: ["webiny-apps/file-manager/getting-started"]
            },
            {
                type: "category",
                label: "Form Builder",
                items: [
                    "webiny-apps/form-builder/introduction",
                    "webiny-apps/form-builder/getting-started",
                    "webiny-apps/form-builder/form-fields",
                    "webiny-apps/form-builder/revisions-and-publishing",
                    "webiny-apps/form-builder/triggers",
                    "webiny-apps/form-builder/form-stats",
                    //"webiny-apps/form-builder/form-settings",
                    "webiny-apps/form-builder/form-builder-settings",
                    "webiny-apps/form-builder/embed-forms-via-page-builder",
                    {
                        type: "category",
                        label: "Development",
                        items: [
                            "webiny-apps/form-builder/react-component",
                            "webiny-apps/form-builder/development/form-fields",
                            "webiny-apps/form-builder/development/form-field-groups",
                            {
                                type: "category",
                                label: "Themes",
                                items: [
                                    "webiny-apps/form-builder/development/themes/overview",
                                    "webiny-apps/form-builder/development/themes/layouts"
                                ]
                            },
                            {
                                type: "category",
                                label: "Plugins Reference",
                                items: [
                                    "webiny-apps/form-builder/development/plugins-reference/app"
                                ]
                            }
                            //"webiny-apps/form-builder/custom-form-triggers"
                        ]
                    }
                ]
            },
            {
                type: "category",
                label: "I18N",
                items: ["webiny-apps/i18n/introduction"]
            },
            {
                type: "category",
                label: "Page Builder",
                items: [
                    //"webiny-apps/page-builder/introduction",
                    "webiny-apps/page-builder/getting-started",
                    "webiny-apps/page-builder/revisions-and-publishing",

                    {
                        type: "category",
                        label: "Theme Development",
                        items: [
                            "webiny-apps/page-builder/theme-development/introduction",
                            "webiny-apps/page-builder/theme-development/basic-concepts",
                            {
                                type: "category",
                                label: "Theme configuration",
                                items: [
                                    "webiny-apps/page-builder/theme-development/theme-configuration",
                                    "webiny-apps/page-builder/theme-development/layouts",
                                    "webiny-apps/page-builder/theme-development/colors",
                                    "webiny-apps/page-builder/theme-development/elements",
                                    "webiny-apps/page-builder/theme-development/typography"
                                ]
                            },
                            "webiny-apps/page-builder/theme-development/stylesheets",
                            {
                                type: "category",
                                label: "Advanced Topics",
                                items: [
                                    "webiny-apps/page-builder/theme-development/graphql",
                                    "webiny-apps/page-builder/theme-development/menus",
                                    "webiny-apps/page-builder/theme-development/site-settings",
                                    "webiny-apps/page-builder/theme-development/style-inheritance"
                                ]
                            }
                        ]
                    },
                    {
                        type: "category",
                        label: "Development",
                        items: [
                            "webiny-apps/page-builder/development/rendering-pages"
                            //"webiny-apps/form-builder/creating-new-form-fields",
                            //"webiny-apps/form-builder/custom-form-triggers"
                        ]
                    }
                ]
            },
            {
                type: "category",
                label: "Security",
                items: [
                    "webiny-apps/security/introduction",
                    "webiny-apps/security/users",
                    "webiny-apps/security/roles",
                    "webiny-apps/security/groups",
                    {
                        type: "category",
                        label: "Development",
                        items: [
                            {
                                type: "category",
                                label: "API",
                                items: [
                                    {
                                        type: "category",
                                        label: "GraphQL Helpers",
                                        items: [
                                            "webiny-apps/security/development/API/GraphQLHelpers/has-role",
                                            "webiny-apps/security/development/API/GraphQLHelpers/has-scope"
                                        ]
                                    }
                                ]
                            },
                            {
                                type: "category",
                                label: "App",
                                items: [
                                    {
                                        type: "category",
                                        label: "Components",
                                        items: [
                                            "webiny-apps/security/development/App/Components/secure-route",
                                            "webiny-apps/security/development/App/Components/secure-view"
                                        ]
                                    }
                                ]
                            },
                            {
                                type: "category",
                                label: "Plugins Reference",
                                items: ["webiny-apps/security/development/plugin-reference/app"]
                            }
                        ]
                    }
                ]
            }
        ],
        Other: [
            {
                type: "category",
                label: "FAQ",
                items: ["other/faq/how-is-webiny-serverless", "other/faq/why-not-dynamodb"]
            },
            {
                type: "category",
                label: "Guides",
                items: ["other/guides/mongodb-atlas"]
            },
            {
                type: "link",
                label: "How To Contribute",
                href: "https://github.com/webiny/webiny-js/blob/master/CONTRIBUTING.md"
            }
        ]
    }
};
