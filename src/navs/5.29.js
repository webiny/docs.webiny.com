import { createNavUtils } from "@/utils/navElements";
import { generateReleaseNotes } from "@/utils/generateReleaseNotes";

export const createNavigation = (version = "5.29.x") => {
    const { collapsable, horizontalLine, page, section } = createNavUtils(version);

    return [
        collapsable("Get Started", [page("get-started/install-webiny")]),
        collapsable("Webiny Overview", [
            page("overview/introduction"),
            section("Applications", [
                page("overview/applications/admin"),
                page("overview/applications/apw"),
                page("overview/applications/control-panel"),
                page("overview/applications/file-manager"),
                page("overview/applications/form-builder"),
                page("overview/applications/headless-cms"),
                page("overview/applications/page-builder")
            ]),
            section("Features", [
                page("overview/features/access-control"),
                page("overview/features/cli"),
                page("overview/features/framework"),
                page("overview/features/multi-tenancy"),
                page("overview/features/multiple-environments"),
                page("overview/features/nocode-suite"),
                page("overview/features/self-hosted"),
                page("overview/features/serverless-infrastructure"),
                page("overview/features/site-reliability"),
                page("overview/features/security")
            ])
        ]),
        horizontalLine(),
        collapsable("Headless CMS", [
            section("Basics", [
                page("headless-cms/basics/graphql-api"),
                page("headless-cms/basics/using-graphql-api")
            ]),
            section("Extending functionality", [
                page("headless-cms/extending/content-models-via-code"),
                page("headless-cms/extending/custom-field-type"),
                page("headless-cms/extending/customize-entry-form-layout"),
                page("headless-cms/extending/extend-graphql-api"),
                page("headless-cms/extending/render-rich-text-content")
            ]),
            section("Integrations", [
                page("headless-cms/integrations/nextjs"),
                page("headless-cms/integrations/gatsby")
            ]),
            section("References", [
                page("headless-cms/references/lifecycle-events"),
                page("headless-cms/references/plugins"),
                page("headless-cms/references/storage-transform-plugin")
            ])
        ]),
        collapsable("Page Builder", [
            section("Theming", [
                page("page-builder/theming/introduction"),
                page("page-builder/theming/colors"),
                page("page-builder/theming/elements"),
                page("page-builder/theming/layouts")
            ]),
            section("Extending functionality", [
                page("page-builder/extending/create-a-page-element"),
                page("page-builder/extending/customize-an-existing-element"),
                page("page-builder/extending/extend-graphql-api"),
                page("page-builder/extending/extend-page-settings")
            ]),
            section("References", [
                page("page-builder/references/lifecycle-events"),
                page("page-builder/references/plugins")
            ])
        ]),
        collapsable("Form Builder", [
            section("Theming", [
                page("form-builder/theming/introduction"),
                page("form-builder/theming/layouts")
            ]),
            section("References", [page("form-builder/references/plugins")])
        ]),
        collapsable("File Manager", [
            section("Extending functionality", [
                page("file-manager/extending/create-a-file-type-plugin")
            ])
        ]),
        collapsable("Admin Area", [
            section("Basics", [
                page("admin-area/basics/framework"),
                page("admin-area/basics/api-playground")
            ]),
            section("Extending functionality", [page("admin-area/extending/change-logo")]),
            section("New App Tutorial", [
                page("admin-area/new-app-tutorial/introduction"),
                page("admin-area/new-app-tutorial/scaffolding"),
                page("admin-area/new-app-tutorial/get-started"),
                page("admin-area/new-app-tutorial/extending-entities"),
                page("admin-area/new-app-tutorial/security"),
                page("admin-area/new-app-tutorial/securing-graphql-api"),
                page("admin-area/new-app-tutorial/securing-client-app")
            ])
        ]),

        horizontalLine(),

        collapsable("Core Development Concepts", [
            section("Basics", [
                page("core-development-concepts/basics/tools-and-libraries"),
                page("core-development-concepts/basics/plugins"),
                page("core-development-concepts/basics/importing-plugins"),
                page("core-development-concepts/basics/webiny-cli"),
                page("core-development-concepts/basics/project-deployment"),
                page("core-development-concepts/basics/watch-command"),
                page("core-development-concepts/basics/environment-variables")
            ]),

            section("Project Organization", [
                page("core-development-concepts/project-organization/project-applications"),
                page(
                    "core-development-concepts/project-organization/project-applications-and-packages"
                ),
                page("core-development-concepts/project-organization/monorepo-organization")
            ]),

            section("Scaffolding", [
                page("core-development-concepts/scaffolding/introduction"),
                page("core-development-concepts/scaffolding/extend-admin-area"),
                page("core-development-concepts/scaffolding/extend-graphql-api"),
                page("core-development-concepts/ci-cd/setup")
            ]),

            section("Extending and Customizing", [
                page("core-development-concepts/extending-and-customizing/extend-graphql-api"),
                page(
                    "core-development-concepts/extending-and-customizing/adding-custom-cli-commands"
                ),
                page(
                    "core-development-concepts/extending-and-customizing/create-a-package-in-webiny-project"
                ),
                page("core-development-concepts/extending-and-customizing/integrate-tailwindcss"),
                page(
                    "core-development-concepts/extending-and-customizing/how-to-customize-elasticsearch-index"
                ),
                page(
                    "core-development-concepts/extending-and-customizing/how-to-change-elasticsearch-index-name-to-contain-locale"
                )
            ]),
            section("CI/CD", [
                page("core-development-concepts/ci-cd/introduction"),
                page("core-development-concepts/ci-cd/environments"),
                page("core-development-concepts/ci-cd/version-control"),
                page("core-development-concepts/ci-cd/cloud-infrastructure-state-files"),
                page("core-development-concepts/ci-cd/testing"),
                page("core-development-concepts/ci-cd/workflows"),
                page("core-development-concepts/ci-cd/setup")
            ]),

            section("Security Framework", [
                page("core-development-concepts/security-framework/introduction"),
                page("core-development-concepts/security-framework/api-security"),
                page("core-development-concepts/security-framework/react-security")
            ])
        ]),

        collapsable("Infrastructure", [
            section("Basics", [
                page("infrastructure/basics/introduction"),
                page("infrastructure/basics/environments"),
                page("infrastructure/basics/preview-deployments"),
                page("infrastructure/basics/destroy-cloud-infrastructure"),
                page("infrastructure/basics/build-and-deploy-hooks")
            ]),
            section("Pulumi IaC", [
                page("infrastructure/pulumi-iac/iac-with-pulumi"),
                page("infrastructure/pulumi-iac/execute-pulumi-commands")
            ]),
            section("AWS", [
                page("infrastructure/aws/configure-aws-credentials"),
                page("infrastructure/aws/use-aws-profiles")
            ]),
            section("Additional resources", [
                page("infrastructure/additional-resources/connect-custom-domain")
            ])
        ]),

        collapsable("Architecture", [
            page("architecture/introduction"),
            section("API Architecture", [
                page("architecture/api/introduction"),
                page("architecture/api/overview"),
                page("architecture/api/graphql-requests"),
                page("architecture/api/file-upload"),
                page("architecture/api/file-download"),
                page("architecture/api/overview-vpc-default"),
                page("architecture/api/overview-vpc-custom")
            ]),
            section("Admin Area Architecture", [
                page("architecture/admin/introduction"),
                page("architecture/admin/overview"),
                page("architecture/admin/serving-application-files")
            ]),
            section("Website Architecture", [
                page("architecture/website/introduction"),
                page("architecture/website/overview"),
                page("architecture/website/prerendering-pages"),
                page("architecture/website/serving-pages")
            ])
        ]),

        collapsable("Performance & Load Benchmark", [
            page("performance-and-load-benchmark/introduction"),
            section("Headless CMS", [
                page("performance-and-load-benchmark/headless-cms/write-benchmark"),
                page("performance-and-load-benchmark/headless-cms/read-benchmark")
            ]),
            section("Page Builder", [
                page("performance-and-load-benchmark/page-builder/deliver-a-page")
            ])
        ]),

        horizontalLine(),

        collapsable("Webiny Enterprise", [
            page("enterprise/multi-tenancy"),
            page("enterprise/theme-manager"),
            page("enterprise/okta-integration")
        ]),

        horizontalLine(),
        generateReleaseNotes(version),
        collapsable("Community Plugins", [page("community-plugins/introduction")]),
        collapsable("Webiny Telemetry", [page("webiny-telemetry/webiny-telemetry")]),
        collapsable("Write with Webiny", [page("write-with-webiny/write-with-webiny")])
    ];
};
