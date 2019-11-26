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
            "deep-dive/cloud-architecture",
            //"deep-dive/database",
            // "deep-dive/deployment",
            "deep-dive/plugins-crash-course"
        ],
        "API Development": [
            "coming-soon"
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
            {
                type: "category",
                label: "Admin",
                items: ["webiny-apps/admin/introduction"]
            },
            {
                type: "category",
                label: "File Manager",
                items: ["webiny-apps/file-manager/introduction"]
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
                    "webiny-apps/form-builder/form-settings",
                    "webiny-apps/form-builder/form-builder-settings",
                    "webiny-apps/form-builder/embed-forms-via-page-builder",
                    {
                        type: "category",
                        label: "Development",
                        items: [
                            "webiny-apps/form-builder/react-component",
                            "webiny-apps/form-builder/form-layouts",
                            "webiny-apps/form-builder/creating-new-form-fields",
                            "webiny-apps/form-builder/custom-form-triggers"
                        ]
                    }
                ]
            },
            {
                type: "category",
                label: "Page Builder",
                items: [
                    "webiny-apps/page-builder/introduction",
                    "webiny-apps/page-builder/getting-started"
                ]
            }
        ],
        Other: [
            {
                type: "category",
                label: "FAQ",
                items: ["other/faq/how-is-webiny-serverless"]
            },
            {
                type: "link",
                label: "How To Contribute",
                href: "https://github.com/webiny/webiny-js/blob/master/CONTRIBUTING.md"
            }
        ]
    }
};
