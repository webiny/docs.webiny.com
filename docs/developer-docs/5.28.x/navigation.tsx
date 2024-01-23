import React from "react";
import { Group, Page, Separator, NavigationRoot } from "@webiny/docs-generator";
import { Navigation as SharedNavigation } from "../shared/navigation";

export const Navigation = () => {
  return (
    <NavigationRoot directory={__dirname}>
      <Group title={"Get Started"}>
        <Page link={"get-started/install-webiny"} />
      </Group>
      <Group title={"Webiny Overview"}>
        <Page link={"overview/introduction"} />
        <Page link={"overview/pricing"} />
        <Group title={"Applications"}>
          <Page link={"overview/applications/admin"} />
          <Page link={"overview/applications/apw"} />
          <Page link={"overview/applications/control-panel"} />
          <Page link={"overview/applications/file-manager"} />
          <Page link={"overview/applications/form-builder"} />
          <Page link={"overview/applications/headless-cms"} />
          <Page link={"overview/applications/page-builder"} />
        </Group>
        <Group title={"Features"}>
          <Page link={"overview/features/access-control"} />
          <Page link={"overview/features/cli"} />
          <Page link={"overview/features/framework"} />
          <Page link={"overview/features/multi-tenancy"} />
          <Page link={"overview/features/multiple-environments"} />
          <Page link={"overview/features/nocode-suite"} />
          <Page link={"overview/features/self-hosted"} />
          <Page link={"overview/features/serverless-infrastructure"} />
          <Page link={"overview/features/site-reliability"} />
          <Page link={"overview/features/security"} />
        </Group>
      </Group>
      <Separator />
      <Group title={"Headless CMS"}>
        <Group title={"Basics"}>
          <Page link={"headless-cms/basics/graphql-api"} />
          <Page link={"headless-cms/basics/using-graphql-api"} />
        </Group>
        <Group title={"Extending Functionality"}>
          <Page link={"headless-cms/extending/content-models-via-code"} />
          <Page link={"headless-cms/extending/custom-field-type"} />
          <Page link={"headless-cms/extending/customize-entry-form-layout"} />
          <Page link={"headless-cms/extending/extend-graphql-api"} />
          <Page link={"headless-cms/extending/render-rich-text-content"} />
        </Group>
        <Group title={"Integrations"}>
          <Page link={"headless-cms/integrations/nextjs"} />
          <Page link={"headless-cms/integrations/gatsby"} />
        </Group>
        <Group title={"References"}>
          <Page link={"headless-cms/references/lifecycle-events"} />
          <Page link={"headless-cms/references/plugins"} />
          <Page link={"headless-cms/references/storage-transform-plugin"} />
        </Group>
      </Group>
      <Group title={"Page Builder"}>
        <Group title={"Theming"}>
          <Page link={"page-builder/theming/introduction"} />
          <Page link={"page-builder/theming/colors"} />
          <Page link={"page-builder/theming/elements"} />
          <Page link={"page-builder/theming/layouts"} />
        </Group>
        <Group title={"Extending Functionality"}>
          <Page link={"page-builder/extending/create-a-page-element"} />
          <Page link={"page-builder/extending/customize-an-existing-element"} />
          <Page link={"page-builder/extending/customize-button-callback-handler"} />
          <Page link={"page-builder/extending/extend-graphql-api"} />
          <Page link={"page-builder/extending/extend-page-settings"} />
        </Group>
        <Group title={"References"}>
          <Page link={"page-builder/references/lifecycle-events"} />
          <Page link={"page-builder/references/plugins"} />
        </Group>
      </Group>
      <Group title={"Form Builder"}>
        <Group title={"Theming"}>
          <Page link={"form-builder/theming/introduction"} />
          <Page link={"form-builder/theming/layouts"} />
        </Group>
        <Group title={"References"}>
          <Page link={"form-builder/references/plugins"} />
        </Group>
      </Group>
      <Group title={"File Manager"}>
        <Group title={"Extending Functionality"}>
          <Page link={"file-manager/extending/create-a-file-type-plugin"} />
        </Group>
      </Group>
      <Group title={"Admin Area"}>
        <Group title={"Basics"}>
          <Page link={"admin-area/basics/framework"} />
          <Page link={"admin-area/basics/api-playground"} />
        </Group>
        <Group title={"Extending Functionality"}>
          <Page link={"admin-area/extending/change-logo"} />
        </Group>
        <Group title={"New App Tutorial"}>
          <Page link={"admin-area/new-app-tutorial/introduction"} />
          <Page link={"admin-area/new-app-tutorial/scaffolding"} />
          <Page link={"admin-area/new-app-tutorial/get-started"} />
          <Page link={"admin-area/new-app-tutorial/extending-entities"} />
          <Page link={"admin-area/new-app-tutorial/security"} />
          <Page link={"admin-area/new-app-tutorial/securing-graphql-api"} />
          <Page link={"admin-area/new-app-tutorial/securing-client-app"} />
        </Group>
      </Group>
      <Separator />
      <Group title={"Core Development Concepts"}>
        <Group title={"Basics"}>
          <Page link={"core-development-concepts/basics/tools-and-libraries"} />
          <Page link={"core-development-concepts/basics/plugins"} />
          <Page link={"core-development-concepts/basics/importing-plugins"} />
          <Page link={"core-development-concepts/basics/webiny-cli"} />
          <Page link={"core-development-concepts/basics/project-deployment"} />
          <Page link={"core-development-concepts/basics/watch-command"} />
          <Page link={"core-development-concepts/basics/environment-variables"} />
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

        <Group title={"Scaffolding"}>
          <Page link={"core-development-concepts/scaffolding/introduction"} />
          <Page link={"core-development-concepts/scaffolding/extend-admin-area"} />
          <Page link={"core-development-concepts/scaffolding/extend-graphql-api"} />
          <Page link={"core-development-concepts/scaffolding/full-stack-application"} />
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
              "core-development-concepts/extending-and-customizing/how-to-change-elasticsearch-index-name-to-contain-locale"
            }
          />
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

        <Group title={"Security Framework"}>
          <Page link={"core-development-concepts/security-framework/introduction"} />
          <Page link={"core-development-concepts/security-framework/api-security"} />
          <Page link={"core-development-concepts/security-framework/react-security"} />
        </Group>
      </Group>
      <Group title={"Infrastructure"}>
        <Group title={"Basics"}>
          <Page link={"infrastructure/basics/introduction"} />
          <Page link={"infrastructure/basics/environments"} />
          <Page link={"infrastructure/basics/preview-deployments"} />
          <Page link={"infrastructure/basics/destroy-cloud-infrastructure"} />
          <Page link={"infrastructure/basics/build-and-deploy-hooks"} />
        </Group>
        <Group title={"Pulumi IaC"}>
          <Page link={"infrastructure/pulumi-iac/iac-with-pulumi"} />
          <Page link={"infrastructure/pulumi-iac/execute-pulumi-commands"} />
        </Group>
        <Group title={"AWS"}>
          <Page link={"infrastructure/aws/configure-aws-credentials"} />
          <Page link={"infrastructure/aws/use-aws-profiles"} />
        </Group>
        <Group title={"Additional resources"}>
          <Page link={"infrastructure/additional-resources/connect-custom-domain"} />
        </Group>
      </Group>
      <Group title={"Architecture"}>
        <Page link={"architecture/introduction"} />
        <Group title={"API Architecture"}>
          <Page link={"architecture/api/introduction"} />
          <Page link={"architecture/api/overview"} />
          <Page link={"architecture/api/graphql-requests"} />
          <Page link={"architecture/api/file-upload"} />
          <Page link={"architecture/api/file-download"} />
          <Page link={"architecture/api/overview-vpc-default"} />
          <Page link={"architecture/api/overview-vpc-custom"} />
        </Group>
        <Group title={"Admin Area Architecture"}>
          <Page link={"architecture/admin/introduction"} />
          <Page link={"architecture/admin/overview"} />
          <Page link={"architecture/admin/serving-application-files"} />
        </Group>
        <Group title={"Website Architecture"}>
          <Page link={"architecture/website/introduction"} />
          <Page link={"architecture/website/overview"} />
          <Page link={"architecture/website/prerendering-pages"} />
          <Page link={"architecture/website/serving-pages"} />
        </Group>
      </Group>
      <Separator />
      <Group title={"Webiny Enterprise"}>
        <Page link={"enterprise/multi-tenancy"} />
        <Page link={"enterprise/theme-manager"} />
        <Page link={"enterprise/okta-integration"} />
      </Group>
      <Separator />
      <SharedNavigation />
    </NavigationRoot>
  );
};
