module.exports = {
    docs: [
        "introduction",
        {
            "Webiny Overview": [
                "webiny-overview/intro",
                {
                    type: "category",
                    label: "Performance Benchmark",
                    items: [
                        "webiny-overview/performance-benchmark/introduction",
                        "webiny-overview/performance-benchmark/headless-cms-write-benchmark",
                        "webiny-overview/performance-benchmark/headless-cms-read-benchmark",
                        "webiny-overview/performance-benchmark/pb-deliver-a-page"
                    ]
                },
                {
                    type: "category",
                    label: "Serverless CMS",
                    items: [
                        {
                            type: "category",
                            label: "Apps",
                            items: [
                                "webiny-overview/serverless-cms/apps/intro",
                                "webiny-overview/serverless-cms/apps/headless-cms",
                                "webiny-overview/serverless-cms/apps/page-builder",
                                "webiny-overview/serverless-cms/apps/form-builder",
                                "webiny-overview/serverless-cms/apps/file-manager"
                            ]
                        }
                    ]
                }
            ],
            Tutorials: [
                "tutorials/install-webiny",
                {
                    type: "category",
                    label: "Create An Application",
                    items: [
                        "tutorials/create-an-application/introduction",
                        "tutorials/create-an-application/api-package",
                        "tutorials/create-an-application/admin-area-package"
                    ]
                },
                {
                    type: "category",
                    label: "Headless CMS",
                    items: [
                        "tutorials/headless-cms/create-a-webiny-headless-cms-address-field-plugin"
                    ]
                },
                {
                    type: "category",
                    label: "Page Builder",
                    items: ["tutorials/page-builder/create-a-new-page-builder-element"]
                },
                {
                    type: "category",
                    label: "Webiny CLI",
                    items: ["tutorials/webiny-cli/adding-custom-commands"]
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
                    label: "Development Workflows",
                    items: [
                        "how-to-guides/ci-cd/introduction",
                        // "how-to-guides/ci-cd/developing-serverless-applications",
                        "how-to-guides/ci-cd/cloud-infrastructure-state-files",
                        // "how-to-guides/ci-cd/ci-cd",
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
                    items: ["how-to-guides/webiny-cli/working-with-workspaces"]
                },
                {
                    type: "category",
                    label: "Upgrade Webiny",
                    items: [
                        "how-to-guides/upgrade-webiny/overview",
                        "how-to-guides/upgrade-webiny/5.0.0-beta.4-to-5.0.0"
                    ]
                }
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
            ],
            References: [
                {
                    type: "category",
                    label: "Page Builder",
                    items: ["references/page-builder/plugins"]
                }
            ]
        },
        {
            Contributing: ["contributing/documentation", "contributing/new-page-template"]
        },
        "webiny-telemetry"
    ]
};
