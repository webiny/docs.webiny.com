import React from "react";
import { Group, Page, Separator, NavigationRoot } from "@webiny/docs-generator";

export const Navigation = () => {
  return (
    <NavigationRoot directory={__dirname}>
      <Page link={"get-started/welcome"} hidden={true} />
      <Group
        title={"Get Started"}
        icon={"/docs/menu-icons/get-started.svg"}
        link={"get-started/install-webiny"}
      >
        <Page link={"get-started/install-webiny"} />
        <Page link={"get-started/build-with-llms-ai"} />
      </Group>
      <Group
        title={"Webiny Overview"}
        icon={"/docs/menu-icons/webiny-overview.svg"}
        link={"overview/why-and-when-to-use-webiny"}
      >
        <Page link={"overview/why-and-when-to-use-webiny"} />
        <Page link={"overview/pricing"} />
        <Group title={"Applications"}>
          <Page link={"overview/applications/admin"} />
          <Page link={"overview/applications/apw"} />
          <Page link={"overview/applications/control-panel"} />
          <Page link={"overview/applications/file-manager"} />
          <Page link={"overview/applications/form-builder"} />
          <Page link={"overview/applications/headless-cms"} />
          <Page link={"overview/applications/page-builder"} />
          <Page link={"overview/applications/a-b-testing-and-personalization"} />
        </Group>
        <Group title={"Features"}>
          <Page link={"overview/features/access-control"} />
          <Page link={"overview/features/advanced-content-organization"} />
          <Page link={"overview/features/audit-logs"} />
          <Page link={"overview/features/cli"} />
          <Page link={"overview/features/framework"} />
          <Page link={"overview/features/multi-tenancy"} />
          <Page link={"overview/features/multiple-environments"} />
          <Page link={"overview/features/nocode-suite"} />
          <Page link={"overview/features/self-hosted"} />
          <Page link={"overview/features/serverless-infrastructure"} />
          <Page link={"overview/features/site-reliability"} />
          <Page link={"overview/features/security"} />
          <Page link={"overview/features/mailer"} />
          <Page link={"overview/features/sso-and-custom-authenticators"} />
        </Group>
      </Group>
      <Separator />
      <Group
        title={"Headless CMS"}
        icon={"/docs/menu-icons/headless-cms.svg"}
        link={"headless-cms/overview"}
      >
        <Page link={"headless-cms/overview"} hidden={true} />
        <Group title={"Basics"}>
          <Page link={"headless-cms/basics/graphql-api"} />
          <Page link={"headless-cms/basics/using-graphql-api"} />
          <Page link={"headless-cms/basics/using-graphql-api-advanced-filtering"} />
          <Page link={"headless-cms/basics/content-modeling-best-practices"} />
        </Group>
        <Group title={"Artificial intelligence (AI)"}>
          <Page link={"headless-cms/ai/smart-seo-open-ai"} />
        </Group>
        <Group title={"Extensions"}>
          <Page link={"headless-cms/extending/content-models-via-code"} />
          <Page link={"headless-cms/extending/custom-field-type"} />
          <Page link={"headless-cms/extending/create-rich-text-content-renderer"} />
          <Page link={"headless-cms/extending/customize-entry-list-filters"} />
          <Page link={"headless-cms/extending/customize-entry-list-bulk-actions"} />
          <Page link={"headless-cms/extending/customize-entry-list-table-columns"} />
          <Page link={"headless-cms/extending/customize-entry-list-actions"} />
          <Page link={"headless-cms/extending/customize-folder-fields"} />
          <Page link={"headless-cms/extending/confirmation-dialog-for-folder-drag-and-drop"} />
          <Page link={"headless-cms/extending/conditional-rendering"} />
          <Page link={"headless-cms/extending/customize-entry-editor-actions"} />
          <Page link={"headless-cms/extending/customize-entry-form-layout"} />
          <Page link={"headless-cms/extending/extend-graphql-api"} />
          <Page link={"headless-cms/extending/content-models-via-code-storage-id"} />
          <Page link={"headless-cms/extending/custom-sorting"} />
          <Page link={"headless-cms/extending/private-models"} />
          <Page link={"headless-cms/extending/lexical-editor"} />
          <Page link={"headless-cms/extending/content-entry-live-preview"} />
          <Page link={"headless-cms/extending/content-entry-traverser"} />
        </Group>
        <Group title={"Integrations"}>
          <Page link={"headless-cms/integrations/nextjs"} />
          <Page link={"headless-cms/integrations/gatsby"} />
          <Page link={"headless-cms/integrations/legacy-render-rich-text-content"} />
          <Page link={"headless-cms/integrations/render-lexical-rich-text-content"} />
          <Page link={"headless-cms/integrations/integrations-list"} />
        </Group>
        <Group title={"Notes App Tutorial"}>
          <Page link={"headless-cms/notes-app/introduction"} />
          <Page link={"headless-cms/notes-app/webiny-infrastructure-setup"} />
          <Page link={"headless-cms/notes-app/react-notes-app"} />
        </Group>
        <Group title={"References"}>
          <Page link={"headless-cms/references/lifecycle-events"} />
          <Page link={"headless-cms/references/plugins"} />
          <Page link={"headless-cms/references/storage-transform-plugin"} />
          <Page link={"headless-cms/references/date-time-and-identity-meta-fields"} />
        </Group>
      </Group>
      <Group
        title={"Page Builder"}
        icon={"/docs/menu-icons/page-builder.svg"}
        link={"page-builder/theming/introduction"}
      >
        <Page link={"page-builder/overview"} hidden={true} />
        <Group title={"Theming"}>
          <Page link={"page-builder/theming/introduction"} />
          <Page link={"page-builder/theming/theme-object"} />
          <Page link={"page-builder/theming/page-layouts"} />
          <Page link={"page-builder/theming/best-practices"} />
        </Group>
        <Group title={"Extensions"}>
          <Page link={"page-builder/extending/customize-editors"} />
          <Page link={"page-builder/extending/customize-page-list-actions"} />
          <Page link={"page-builder/extending/customize-page-bulk-actions"} />
          <Page link={"page-builder/extending/customize-folder-fields"} />
          <Page link={"page-builder/extending/confirmation-dialog-for-folder-drag-and-drop"} />
          <Page link={"page-builder/extending/create-a-page-element"} />
          <Page link={"page-builder/extending/loading-data-in-page-elements"} />
          <Page link={"page-builder/extending/customize-button-callback-handler"} />
          <Page link={"page-builder/extending/extend-graphql-api"} />
          <Page link={"page-builder/extending/extend-page-settings"} />
          <Page link={"page-builder/extending/lexical-editor"} />
          <Page link={"page-builder/extending/customize-website-settings"} />
        </Group>
        <Group title={"References"}>
          <Page link={"page-builder/references/lifecycle-events"} />
          <Page link={"page-builder/references/plugins"} />
        </Group>
      </Group>
      <Group
        title={"Form Builder"}
        icon={"/docs/menu-icons/form-builder.svg"}
        link={"form-builder/theming/introduction"}
      >
        <Group title={"Theming"}>
          <Page link={"form-builder/theming/introduction"} />
          <Page link={"form-builder/theming/layouts"} />
        </Group>
        <Group title={"References"}>
          <Page link={"form-builder/references/plugins"} />
        </Group>
      </Group>
      <Group
        title={"File Manager"}
        icon={"/docs/menu-icons/file-manager.svg"}
        link={"file-manager/extending/customize-file-preview"}
      >
        <Group title={"Extensions"}>
          <Page link={"file-manager/extending/create-a-custom-file-manager-renderer"} />
          <Page link={"file-manager/extending/customize-file-filters"} />
          <Page link={"file-manager/extending/customize-file-bulk-actions"} />
          <Page link={"file-manager/extending/customize-file-list-table-columns"} />
          <Page link={"file-manager/extending/customize-file-list-actions"} />
          <Page link={"file-manager/extending/customize-folder-fields"} />
          <Page link={"file-manager/extending/confirmation-dialog-for-folder-drag-and-drop"} />
          <Page link={"file-manager/extending/customize-file-fields"} />
          <Page link={"file-manager/extending/customize-file-key"} />
          <Page link={"file-manager/extending/customize-file-details-drawer"} />
          <Page link={"file-manager/extending/customize-file-preview"} />
          <Page link={"file-manager/extending/customize-file-actions"} />
        </Group>
        <Group title={"Integrations"}>
          <Page link={"file-manager/integrations/programmatic-file-upload"} />
        </Group>
      </Group>
      <Group title={"Security"} icon={"/docs/menu-icons/wcp.svg"} link={"security/overview"}>
        <Page link={"security/overview"} hidden={true} />
        <Group title={"Security Framework"}>
          <Page link={"security/security-framework/introduction"} />
          <Page link={"security/security-framework/api-security"} />
          <Page link={"security/security-framework/react-security"} />
        </Group>
        <Group title={"Extensions"}>
          <Page link={"security/extensions/programmatically-create-roles-and-teams"} />
        </Group>
      </Group>
      <Group
        title={"Admin Area"}
        icon={"/docs/menu-icons/admin.svg"}
        link={"admin-area/basics/framework"}
      >
        <Group title={"Basics"}>
          <Page link={"admin-area/basics/framework"} />
          <Page link={"admin-area/basics/api-playground"} />
        </Group>
        <Group title={"Extensions"}>
          <Page link={"admin-area/extending/change-logo"} />
          <Page link={"admin-area/extending/custom-routes"} />
          <Page link={"admin-area/extending/custom-dashboard"} />
          <Page link={"admin-area/extending/customize-navigation"} />
          <Page link={"admin-area/extending/custom-providers"} />
          <Page link={"admin-area/extending/graphql-request-batching"} />
          <Page link={"admin-area/extending/environment-variables"} />
          <Page link={"admin-area/extending/webpack-config"} />
        </Group>
        <Group title={"Extending Functionality"}>
          <Page link={"admin-area/extending/environment-utilities"} />
        </Group>
      </Group>
      <Separator />
      <Group
        title={"Core Development Concepts"}
        icon={"/docs/menu-icons/core-dev-concepts.svg"}
        link={"core-development-concepts/basics/extensions"}
      >
        <Group title={"Basics"}>
          <Page link={"core-development-concepts/basics/extensions"} />
          <Page link={"core-development-concepts/basics/webiny-cli"} />
          <Page link={"core-development-concepts/basics/project-deployment"} />
          <Page link={"core-development-concepts/basics/watch-command"} />
          <Page link={"core-development-concepts/basics/environment-variables"} />
          <Page link={"core-development-concepts/basics/routes-and-events"} />
          <Page link={"core-development-concepts/basics/user-project-upgrade"} />
          <Page link={"core-development-concepts/basics/logger"} />
        </Group>
        <Group title={"Project Organization"}>
          <Page link={"core-development-concepts/project-organization/project-applications"} />
          <Page
            link={
              "core-development-concepts/project-organization/project-applications-and-packages"
            }
          />
          <Page link={"core-development-concepts/project-organization/monorepo-organization"} />
        </Group>
        <Group title={"Development"}>
          <Page link={"core-development-concepts/development/local-development"} />
        </Group>
        <Group title={"Extending and Customizing"}>
          <Page link={"core-development-concepts/extending-and-customizing/extend-graphql-api"} />
          <Page
            link={"core-development-concepts/extending-and-customizing/adding-custom-cli-commands"}
          />
          <Page
            link={
              "core-development-concepts/extending-and-customizing/create-a-package-in-webiny-project"
            }
          />
          <Page
            link={"core-development-concepts/extending-and-customizing/integrate-tailwindcss"}
          />
          <Page
            link={
              "core-development-concepts/extending-and-customizing/how-to-customize-elasticsearch-index"
            }
          />
          <Page
            link={
              "core-development-concepts/extending-and-customizing/add-custom-route-to-existing-lambda"
            }
          />
          <Page
            link={
              "core-development-concepts/extending-and-customizing/customizing-the-error-output"
            }
          />
          <Page
            link={"core-development-concepts/extending-and-customizing/intercepting-the-request"}
          />
          <Page link={"core-development-concepts/extending-and-customizing/lexical-tools"} />
        </Group>
        <Group title={"CI/CD"}>
          <Page link={"core-development-concepts/ci-cd/introduction"} />
          <Page link={"core-development-concepts/ci-cd/environments"} />
          <Page link={"core-development-concepts/ci-cd/version-control"} />
          <Page link={"core-development-concepts/ci-cd/cloud-infrastructure-state-files"} />
          <Page link={"core-development-concepts/ci-cd/testing"} />
          <Page link={"core-development-concepts/ci-cd/workflows"} />
          <Page link={"core-development-concepts/ci-cd/setup"} />
        </Group>
        <Group title={"Background Tasks"}>
          <Page link={"core-development-concepts/background-tasks/about-background-tasks"} />
          <Page link={"core-development-concepts/background-tasks/how-background-tasks-work"} />
          <Page
            link={"core-development-concepts/background-tasks/how-to-define-a-background-task"}
          />
          <Page
            link={"core-development-concepts/background-tasks/how-to-handle-a-background-task-run"}
          />
          <Page link={"core-development-concepts/background-tasks/background-task-management"} />
          <Page link={"core-development-concepts/background-tasks/built-in-background-tasks"} />
          <Page link={"core-development-concepts/background-tasks/what-to-be-careful-about"} />
        </Group>
      </Group>
      <Group
        title={"Infrastructure"}
        icon={"/docs/menu-icons/infrastructure.svg"}
        link={"infrastructure/basics/introduction"}
      >
        <Group title={"Basics"}>
          <Page link={"infrastructure/basics/introduction"} />
          <Page link={"infrastructure/basics/environments"} />
          <Page link={"infrastructure/basics/preview-deployments"} />
          <Page link={"infrastructure/basics/destroy-cloud-infrastructure"} />
          <Page link={"infrastructure/basics/modify-cloud-infrastructure"} />
          <Page link={"infrastructure/basics/build-and-deploy-hooks"} />
          <Page link={"infrastructure/basics/best-practices"} />
        </Group>
        <Group title={"Pulumi IaC"}>
          <Page link={"infrastructure/pulumi-iac/iac-with-pulumi"} />
          <Page link={"infrastructure/pulumi-iac/execute-pulumi-commands"} />
        </Group>
        <Group title={"AWS"}>
          <Page link={"infrastructure/aws/configure-aws-credentials"} />
          <Page link={"infrastructure/aws/use-aws-profiles"} />
        </Group>
        <Group title={"Additional Resources"}>
          <Page link={"infrastructure/additional-resources/connect-custom-domain"} />
          <Page link={"infrastructure/additional-resources/service-manifests"} />
        </Group>
      </Group>
      <Group
        title={"Architecture"}
        icon={"/docs/menu-icons/architecture.svg"}
        link={"architecture/introduction"}
      >
        <Page link={"architecture/introduction"} />
        <Group title={"Core Architecture"}>
          <Page link={"architecture/core/overview"} />
        </Group>
        <Group title={"API Architecture"}>
          <Page link={"architecture/api/overview"} />
          <Page link={"architecture/api/graphql-requests"} />
          <Page link={"architecture/api/file-upload"} />
          <Page link={"architecture/api/file-download"} />
        </Group>
        <Group title={"Admin Area Architecture"}>
          <Page link={"architecture/admin/overview"} />
          <Page link={"architecture/admin/serving-application-files"} />
        </Group>
        <Group title={"Website Architecture"}>
          <Page link={"architecture/website/overview"} />
          <Page link={"architecture/website/prerendering-pages"} />
          <Page link={"architecture/website/serving-pages"} />
        </Group>
        <Group title={"Deployment Modes"}>
          <Page link={"architecture/deployment-modes/introduction"} />
          <Page link={"architecture/deployment-modes/development"} />
          <Page link={"architecture/deployment-modes/production"} />
        </Group>
      </Group>
      <Group
        title={"Performance & Load Benchmark"}
        icon={"/docs/menu-icons/benchmark.svg"}
        link={"performance-and-load-benchmark/introduction"}
      >
        <Page link={"performance-and-load-benchmark/introduction"} />
        <Page link={"performance-and-load-benchmark/code"} />
        <Group title={"Headless CMS"}>
          <Page link={"performance-and-load-benchmark/headless-cms/write-benchmark"} />
          <Page link={"performance-and-load-benchmark/headless-cms/read-benchmark"} />
          <Page link={"performance-and-load-benchmark/headless-cms/performance-tuning"} />
        </Group>
        <Group title={"Page Builder"}>
          <Page link={"performance-and-load-benchmark/page-builder/deliver-a-page"} />
        </Group>
      </Group>
      <Separator />
      <Group
        title={"Webiny Enterprise"}
        icon={"/docs/menu-icons/enterprise.svg"}
        link={"enterprise/multi-tenancy"}
      >
        <Page link={"enterprise/multi-tenancy"} />
        <Page link={"enterprise/theme-manager"} />
        <Page link={"enterprise/okta-integration"} />
        <Page link={"enterprise/okta-oidc-app-integration"} />
        <Page link={"enterprise/auth0-integration"} />
        <Page link={"enterprise/use-existing-amazon-vpc"} />
        <Page link={"enterprise/cognito-federation"} />
        <Page link={"enterprise/advanced-tenant-management"} />
        <Group title={"Advanced Access Control Layer (AACL)"}>
          <Page link={"enterprise/aacl/introduction"} />
          <Page link={"enterprise/aacl/teams"} />
          <Page link={"enterprise/aacl/folder-level-permissions"} />
          <Page link={"enterprise/aacl/private-files"} />
        </Group>
      </Group>
      <Group title={"Webiny Control Panel"} icon={"/docs/menu-icons/wcp.svg"} link={"wcp/overview"}>
        <Page link={"wcp/overview"} />
        <Page link={"wcp/link-a-project"} />
      </Group>
      <Separator />
      <Group
        title={"Release Management"}
        icon={"/docs/menu-icons/release-management.svg"}
        link={"release-management/branching-strategy"}
      >
        <Page link={"release-management/branching-strategy"} />
        <Page link={"release-management/unstable-releases"} />
      </Group>
      <Group
        title={"Community Plugins"}
        icon={"/docs/menu-icons/community-plugins.svg"}
        link={"community-plugins/introduction"}
      >
        <Page link={"community-plugins/introduction"} />
      </Group>
      <Group
        title={"Webiny Telemetry"}
        icon={"/docs/menu-icons/telemetry.svg"}
        link={"webiny-telemetry/webiny-telemetry"}
      >
        <Page link={"webiny-telemetry/webiny-telemetry"} />
      </Group>
    </NavigationRoot>
  );
};
