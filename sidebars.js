module.exports = {
    docs: [
        "introduction",
        "tutorials/install-webiny",
        {
            "Core Concepts": [
                {
                    type: "category",
                    label: "Project Organization",
                    items: [
                        "key-topics/project-organization/project-applications",
                        "key-topics/project-organization/project-applications-and-packages",
                        "key-topics/project-organization/monorepo-organization"
                    ]
                },
                "key-topics/plugins",
                "how-to-guides/use-watch-command",
                "how-to-guides/deployment/deploy-your-project",
                "key-topics/webiny-cli"
            ]
        },
        {
            type: "category",
            label: "Create Custom Application",
            items: [
                "tutorials/create-custom-application/introduction",
                "tutorials/create-custom-application/getting-started",
                "tutorials/create-custom-application/graphql-api",
                {
                    type: "category",
                    label: "React Application",
                    items: [
                        "tutorials/create-custom-application/react-application/introduction",
                        "tutorials/create-custom-application/react-application/layout",
                        "tutorials/create-custom-application/react-application/new-pin-modal-dialog",
                        "tutorials/create-custom-application/react-application/homepage",
                        "tutorials/create-custom-application/react-application/pin-details-page"
                    ]
                },
                {
                    type: "category",
                    label: "Security",
                    items: [
                        "tutorials/create-custom-application/security/introduction",
                        "tutorials/create-custom-application/security/getting-started",
                        {
                            type: "category",
                            label: "Cloud Infrastructure",
                            items: [
                                "tutorials/create-custom-application/security/cloud-infrastructure/adding-user-pool-and-user-pool-domain",
                                "tutorials/create-custom-application/security/cloud-infrastructure/adding-user-pool-client",
                                "tutorials/create-custom-application/security/cloud-infrastructure/adjusting-webiny-config-ts-configuration-file"
                            ]
                        },
                        {
                            type: "category",
                            label: "React Application",
                            items: [
                                "tutorials/create-custom-application/security/react-application/initial-setup",
                                "tutorials/create-custom-application/security/react-application/integrating-hosted-ui-authentication-flow"
                            ]
                        },
                        {
                            type: "category",
                            label: "GraphQL API",
                            items: [
                                "tutorials/create-custom-application/security/graphql-api/initial-setup",
                                "tutorials/create-custom-application/security/graphql-api/implementing-authentication-and-authorization-checks"
                            ]
                        },
                        "tutorials/create-custom-application/security/wrapping-it-up"
                    ]
                }
            ]
        },
        {
            type: "category",
            label: "Serverless CMS",
            items: [
                "webiny-overview/serverless-cms/apps/intro",
                {
                    type: "category",
                    label: "Headless CMS",
                    items: [
                        "webiny-overview/serverless-cms/apps/headless-cms",
                        "key-topics/webiny-applications/headless-cms/graphql-api",
                        "how-to-guides/webiny-applications/headless-cms/using-graphql-api",
                        "how-to-guides/webiny-applications/headless-cms/extend-graphql-api",
                        "tutorials/headless-cms/create-a-webiny-headless-cms-custom-field-plugin",
                        "how-to-guides/webiny-applications/headless-cms/content-model-plugins",
                        "key-topics/headless-cms/lifecycle-events",
                        "how-to-guides/webiny-applications/headless-cms/create-a-content-model-form-layout",
                        "how-to-guides/webiny-applications/headless-cms/rendering-rich-text",
                        {
                            type: "category",
                            label: "Plugins",
                            items: ["serverless-cms/headless-cms/plugins/storage-transform-plugin"]
                        }
                    ]
                },
                {
                    type: "category",
                    label: "Page Builder",
                    items: [
                        "webiny-overview/serverless-cms/apps/page-builder",
                        "tutorials/page-builder/create-a-new-page-element",
                        "tutorials/page-builder/customize-an-existing-page-builder-element",
                        "how-to-guides/webiny-applications/page-builder/extend-graphql-api",
                        "how-to-guides/webiny-applications/page-builder/extend-page-settings",
                        "key-topics/page-builder/lifecycle-events",
                        {
                            type: "category",
                            label: "Themes",
                            items: [
                                "how-to-guides/webiny-applications/themes/page-builder/introduction",
                                "how-to-guides/webiny-applications/themes/page-builder/colors",
                                "how-to-guides/webiny-applications/themes/page-builder/elements",
                                "how-to-guides/webiny-applications/themes/page-builder/layouts"
                            ]
                        }
                    ]
                },
                {
                    type: "category",
                    label: "Form Builder",
                    items: [
                        "webiny-overview/serverless-cms/apps/form-builder",
                        {
                            type: "category",
                            label: "Themes",
                            items: [
                                "how-to-guides/webiny-applications/themes/form-builder/introduction",
                                "how-to-guides/webiny-applications/themes/form-builder/layouts"
                            ]
                        }
                    ]
                },
                {
                    type: "category",
                    label: "File Manager",
                    items: [
                        "webiny-overview/serverless-cms/apps/file-manager",
                        "how-to-guides/webiny-applications/file-manager/create-a-file-type-plugin"
                    ]
                },
                {
                    type: "category",
                    label: "Admin Area",
                    items: [
                        "how-to-guides/webiny-applications/admin-area/introduction",
                        "how-to-guides/webiny-applications/admin-area/framework",
                        "how-to-guides/webiny-applications/admin-area/api-playground",
                        "how-to-guides/webiny-applications/admin-area/change-logo",
                        // "how-to-guides/webiny-applications/admin-area/customize-navigation-menu",
                        {
                            type: "category",
                            label: "Extend Admin Area",
                            items: [
                                "tutorials/extend-admin-area/introduction",
                                "how-to-guides/scaffolding/extend-admin-area",
                                "tutorials/extend-admin-area/getting-started",
                                "tutorials/extend-admin-area/extending-entities",
                                // "tutorials/extend-admin-area/testing",
                                {
                                    type: "category",
                                    label: "Security",
                                    items: [
                                        "tutorials/extend-admin-area/security/introduction",
                                        "tutorials/extend-admin-area/security/graphql-api",
                                        "tutorials/extend-admin-area/security/admin-area"
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            type: "category",
            label: "Deployment",
            items: [
                "key-topics/deployment/introduction",
                "key-topics/deployment/environments",
                "how-to-guides/deployment/preview-deployments",
                "key-topics/deployment/iac-with-pulumi",
                "how-to-guides/deployment/execute-pulumi-commands",
                "how-to-guides/deployment/connect-custom-domain",
                "how-to-guides/deployment/destroy-cloud-infrastructure",
                "how-to-guides/deployment/build-and-deploy-hooks",
                {
                    type: "category",
                    label: "AWS",
                    items: [
                        "how-to-guides/deployment/aws/configure-aws-credentials",
                        "how-to-guides/deployment/aws/use-aws-profiles"
                    ]
                },
                {
                    type: "category",
                    label: "CI/CD",
                    items: [
                        "key-topics/ci-cd/introduction",
                        "key-topics/ci-cd/environments",
                        "key-topics/ci-cd/version-control",
                        "key-topics/ci-cd/cloud-infrastructure-state-files",
                        "key-topics/ci-cd/testing",
                        "key-topics/ci-cd/workflows",
                        "how-to-guides/scaffolding/ci-cd"
                    ]
                }
            ]
        },
        {
            type: "category",
            label: "Key Topics",
            items: [
                {
                    type: "category",
                    label: "Scaffolding",
                    items: [
                        "how-to-guides/scaffolding/introduction",
                        "how-to-guides/scaffolding/full-stack-application",
                        "how-to-guides/scaffolding/graphql-api",
                        "how-to-guides/scaffolding/extend-graphql-api",
                        "how-to-guides/scaffolding/react-application"
                    ]
                },
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
                "how-to-guides/environment-variables",
                "how-to-guides/importing-plugins",
                "how-to-guides/extend-graphql-api",
                // {
                //     type: "category",
                //     label: "UI Composer",
                //     items: [
                //         "key-topics/ui-composer/introduction",
                //         "key-topics/ui-composer/building-views",
                //         "key-topics/ui-composer/creating-elements"
                //     ]
                // },
                "tutorials/webiny-cli/adding-custom-commands",
                "key-topics/tools-libraries",
                "how-to-guides/webiny-applications/themes/introduction",
                "tutorials/create-a-package-in-webiny-project",
                "key-topics/multi-tenancy",
                {
                    type: "category",
                    label: "Integrations",
                    items: ["how-to-guides/integrations/integrate-tailwindcss"]
                }
            ]
        },
        {
            type: "category",
            label: "Security",
            items: [
                "webiny-overview/security",
                "key-topics/security-framework/introduction",
                "key-topics/security-framework/api-security",
                "key-topics/security-framework/react-security"
            ]
        },
        {
            type: "category",
            label: "Performance",
            items: [
                "webiny-overview/performance-benchmark/introduction",
                "webiny-overview/performance-benchmark/headless-cms-write-benchmark",
                "webiny-overview/performance-benchmark/headless-cms-read-benchmark",
                "webiny-overview/performance-benchmark/pb-deliver-a-page"
            ]
        },
        {
            type: "category",
            label: "Community Plugins",
            items: ["community-plugins/introduction"]
        },
        {
            "Release Notes": [
                "how-to-guides/upgrade-webiny",
                {
                    type: "category",
                    label: "5.22.1",
                    items: ["release-notes/5.22.1/changelog", "release-notes/5.22.1/upgrade-guide"]
                },
                {
                    type: "category",
                    label: "5.22.0",
                    items: ["release-notes/5.22.0/changelog", "release-notes/5.22.0/upgrade-guide"]
                },
                {
                    type: "category",
                    label: "5.21.0",
                    items: ["release-notes/5.21.0/changelog", "release-notes/5.21.0/upgrade-guide"]
                },
                {
                    type: "category",
                    label: "5.20.0",
                    items: ["release-notes/5.20.0/changelog", "release-notes/5.20.0/upgrade-guide"]
                },
                {
                    type: "category",
                    label: "5.19.1",
                    items: ["release-notes/5.19.1/changelog", "release-notes/5.19.1/upgrade-guide"]
                },
                {
                    type: "category",
                    label: "Older Releases",
                    items: [
                        {
                            type: "category",
                            label: "5.19.0",
                            items: [
                                "release-notes/5.19.0/changelog",
                                "release-notes/5.19.0/upgrade-guide"
                            ]
                        },
                        {
                            type: "category",
                            label: "5.18.0",
                            items: [
                                "release-notes/5.18.0/changelog",
                                "release-notes/5.18.0/upgrade-guide"
                            ]
                        },
                        {
                            type: "category",
                            label: "5.17.0",
                            items: [
                                "release-notes/5.17.0/changelog",
                                "release-notes/5.17.0/upgrade-guide"
                            ]
                        },
                        {
                            type: "category",
                            label: "5.16.0",
                            items: [
                                "release-notes/5.16.0/changelog",
                                "release-notes/5.16.0/upgrade-guide"
                            ]
                        },
                        {
                            type: "category",
                            label: "5.15.0",
                            items: [
                                "release-notes/5.15.0/changelog",
                                "release-notes/5.15.0/upgrade-guide"
                            ]
                        },
                        {
                            type: "category",
                            label: "5.14.0",
                            items: [
                                "release-notes/5.14.0/changelog",
                                "release-notes/5.14.0/upgrade-guide"
                            ]
                        },
                        {
                            type: "category",
                            label: "5.13.0",
                            items: [
                                "release-notes/5.13.0/changelog",
                                "release-notes/5.13.0/upgrade-guide"
                            ]
                        },
                        {
                            type: "category",
                            label: "5.12.0",
                            items: [
                                "release-notes/5.12.0/changelog",
                                "release-notes/5.12.0/upgrade-guide"
                            ]
                        },
                        {
                            type: "category",
                            label: "5.11.1",
                            items: [
                                "release-notes/5.11.1/changelog",
                                "release-notes/5.11.1/upgrade-guide"
                            ]
                        },
                        {
                            type: "category",
                            label: "5.11.0",
                            items: [
                                "release-notes/5.11.0/changelog",
                                "release-notes/5.11.0/upgrade-guide"
                            ]
                        },
                        {
                            type: "category",
                            label: "5.10.0",
                            items: [
                                "release-notes/5.10.0/changelog",
                                "release-notes/5.10.0/upgrade-guide"
                            ]
                        },
                        {
                            type: "category",
                            label: "5.9.0",
                            items: [
                                "release-notes/5.9.0/changelog",
                                "release-notes/5.9.0/upgrade-guide"
                            ]
                        },
                        {
                            type: "category",
                            label: "5.8.0",
                            items: [
                                "release-notes/5.8.0/changelog",
                                "release-notes/5.8.0/upgrade-guide"
                            ]
                        },
                        {
                            type: "category",
                            label: "5.7.0",
                            items: [
                                "release-notes/5.7.0/changelog",
                                "release-notes/5.7.0/upgrade-guide"
                            ]
                        },
                        {
                            type: "category",
                            label: "5.6.0",
                            items: [
                                "release-notes/5.6.0/changelog",
                                "release-notes/5.6.0/upgrade-guide"
                            ]
                        },
                        {
                            type: "category",
                            label: "5.5.0",
                            items: [
                                "release-notes/5.5.0/changelog",
                                "release-notes/5.5.0/upgrade-guide"
                            ]
                        },
                        {
                            type: "category",
                            label: "5.4.0",
                            items: [
                                "release-notes/5.4.0/changelog",
                                "release-notes/5.4.0/upgrade-guide"
                            ]
                        },
                        {
                            type: "category",
                            label: "5.3.0",
                            items: ["release-notes/5.3.0/changelog"]
                        }
                    ]
                }
            ]
        },
        {
            type: "category",
            label: "Contributing",
            items: ["contributing/documentation", "contributing/new-page-template"]
        },
        "webiny-telemetry"
    ],
    enterprise: [
        "enterprise/multi-tenancy",
        "enterprise/theme-manager",
        "enterprise/okta-integration"
    ]
};
