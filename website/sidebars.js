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
            "How-to Guides": [
                {
                    type: "category",
                    label: "Deployment",
                    items: [
                        "how-to-guides/deployment/deploy-your-project",
                        "how-to-guides/deployment/destroy-cloud-infrastructure",
                        "how-to-guides/deployment/preview-deployments",
                        /*"how-to-guides/deployment/aws-regions-profiles",*/
                        "how-to-guides/deployment/configure-aws-credentials"
                    ]
                },
                {
                    type: "category",
                    label: "CI/CD",
                    items: [
                        "how-to-guides/ci-cd/introduction",
                        "how-to-guides/ci-cd/ci-cd",
                        "how-to-guides/ci-cd/development",
                        "how-to-guides/ci-cd/environments",
                        "how-to-guides/ci-cd/version-control"
                    ]
                },
                {
                    type: "category",
                    label: "Headless CMS",
                    items: ["how-to-guides/headless-cms/create-a-webiny-headless-cms-field-plugin"]
                },
                {
                    type: "category",
                    label: "Webiny CLI",
                    items: [
                        "how-to-guides/webiny-cli/working-with-workspaces",
                        "how-to-guides/webiny-cli/adding-custom-commands"
                    ]
                },
                "how-to-guides/upgrade-webiny"
            ],
            "Key Topics": [
                {
                    type: "category",
                    label: "Project Organization",
                    items: [
                        "key-topics/project-organization/project-applications-and-packages",
                        "key-topics/project-organization/project-applications",
                        "key-topics/project-organization/monorepo-organization"
                    ]
                },
                {
                    type: "category",
                    label: "Deployment",
                    items: [
                        "key-topics/deployment/introduction",
                        "key-topics/deployment/iac-with-pulumi",
                        "key-topics/deployment/environments"
                    ]
                },
                /*{
                    type: "category",
                    label: "Page Builder",
                    items: ["key-topics/page-builder/prerendering-pages"]
                },*/
                {
                    type: "category",
                    label: "Cloud Infrastructure",
                    items: [
                        "key-topics/cloud-infrastructure/introduction",
                        {
                            type: "category",
                            label: "API",
                            items: [
                                "key-topics/cloud-infrastructure/api/introduction",
                                "key-topics/cloud-infrastructure/api/overview",
                                "key-topics/cloud-infrastructure/api/graphql-requests",
                                "key-topics/cloud-infrastructure/api/file-upload",
                                "key-topics/cloud-infrastructure/api/file-download",
                                "key-topics/cloud-infrastructure/api/overview-vpc-default",
                                "key-topics/cloud-infrastructure/api/overview-vpc-custom"
                            ]
                        },
                        {
                            type: "category",
                            label: "Admin Area",
                            items: [
                                "key-topics/cloud-infrastructure/admin/introduction",
                                "key-topics/cloud-infrastructure/admin/overview",
                                "key-topics/cloud-infrastructure/admin/serving-application-files"
                            ]
                        },
                        {
                            type: "category",
                            label: "Website",
                            items: [
                                "key-topics/cloud-infrastructure/website/introduction",
                                "key-topics/cloud-infrastructure/website/overview",
                                "key-topics/cloud-infrastructure/website/prerendering-pages",
                                "key-topics/cloud-infrastructure/website/serving-pages"
                            ]
                        }
                    ]
                },
                "key-topics/tools-libraries",
                "key-topics/ci-cd",
                "key-topics/webiny-cli"
            ]
        },
        {
            Contributing: ["contributing/documentation"]
        },
        "webiny-telemetry"
    ]
};
