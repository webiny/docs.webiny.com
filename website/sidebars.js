module.exports = {
    docs: [
        "introduction",
        {
            Tutorials: [
                "tutorials/install-webiny",
                {
                    type: "category",
                    label: "Headless CMS",
                    items: [
                        "tutorials/headless-cms/create-a-webiny-headless-cms-address-field-plugin"
                    ]
                }
            ],
            "How-to guides": [
                {
                    type: "category",
                    label: "Deployment",
                    items: [
                        "how-to-guides/deployment/deploy-your-project",
                        "how-to-guides/deployment/configure-aws-credentials"
                    ]
                },
                {
                    type: "category",
                    label: "Headless CMS",
                    items: ["how-to-guides/headless-cms/create-a-webiny-headless-cms-field-plugin"]
                }
            ],
            "Key Topics": [
                "key-topics/project-organization",
                "key-topics/project-applications",
                {
                    type: "category",
                    label: "Deployment",
                    items: [
                        "key-topics/deployment/introduction",
                        "key-topics/deployment/iac-with-pulumi",
                        "key-topics/deployment/environments"
                    ]
                },
                "key-topics/webiny-cli",
                "key-topics/cloud-infrastructure",
                {
                    type: "category",
                    label: "Headless CMS",
                    items: [
                        "key-topics/headless-cms/content-models-explained",
                        {
                            type: "category",
                            label: "Lifecycle hooks",
                            items: [
                                "key-topics/headless-cms/lifecycle-hooks/content-model",
                                "key-topics/headless-cms/lifecycle-hooks/content-entry"
                            ]
                        }
                    ]
                }
            ],
            References: [
                {
                    type: "category",
                    label: "Headless CMS",
                    items: ["references/headless-cms/api/index"]
                }
            ]
        },
        {
            Contributing: ["contributing/documentation"]
        },
        "webiny-telemetry"
    ]
};
