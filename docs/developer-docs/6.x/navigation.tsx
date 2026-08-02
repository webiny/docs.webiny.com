import React from "react";
import { Group, NavigationRoot, Page, Separator } from "@webiny/docs-generator";

export const Navigation = ({ children }: { children: React.ReactNode }) => {
  return (
    <NavigationRoot directory={__dirname}>
      <Page link={"get-started/welcome"} hidden={true} />
      <Group
        title={"Get Started"}
        icon={"/docs/menu-icons/get-started.svg"}
        link={"get-started/quickstart"}
      >
        <Page link={"get-started/quickstart"} />
        <Page link={"get-started/connect-ai-environment"} />
        <Page link={"get-started/first-customization"} />
        <Page link={"get-started/local-development"} />
        <Page link={"get-started/deploy-webiny"} />
        <Page link={"get-started/upgrade"} />
      </Group>
      <Group
        title={"Build with AI"}
        icon={"/docs/menu-icons/build-with-ai.svg"}
        link={"build-with-ai/ai-assisted-development"}
      >
        <Page link={"build-with-ai/ai-assisted-development"} />
        <Page link={"build-with-ai/configure-mcp-server"} />
      </Group>
      <Group
        title={"Core Concepts"}
        icon={"/docs/menu-icons/core-concepts.svg"}
        link={"core-concepts/project-structure"}
      >
        <Page hidden link={"core-concepts/architecture"} />
        <Page hidden link={"core-concepts/applications"} />
        <Page link={"core-concepts/project-structure"} />
        <Page link={"core-concepts/extensions"} />
        <Page hidden link={"core-concepts/di"} />
        <Page hidden link={"core-concepts/result"} />
        <Page hidden link={"core-concepts/multi-tenancy"} />
        <Page link={"core-concepts/local-development"} />
        <Page link={"core-concepts/environment-variables"} />
        <Page link={"core-concepts/webiny-sdk"} />
        <Page link={"core-concepts/debugging"} />
        <Page link={"core-concepts/security"} />
      </Group>
      <Separator title={"Platform"} />
      <Group
        title={"Admin"}
        icon={"/docs/menu-icons/admin.svg"}
        link={"admin/whitelabeling"}
      >
        <Page link={"admin/whitelabeling"} />
        <Page link={"admin/connect-custom-domain"} />
        <Page link={"admin/build-params"} />
        <Page link={"admin/file-url-formatter"} />
      </Group>
      <Group
        title={"API"}
        icon={"/docs/menu-icons/api.svg"}
        link={"webiny-api/connect-custom-domain"}
      >
        <Page link={"webiny-api/connect-custom-domain"} />
        <Page link={"webiny-api/extend-graphql-schema"} />
        <Page link={"webiny-api/api-routes"} />
        <Page link={"webiny-api/build-params"} />
        <Page link={"webiny-api/encryption"} title={"Encryption"} />
        <Page link={"background-tasks/about"} title={"Background Tasks"} />
      </Group>
      <Separator title={"Apps"} />
      <Group
        title={"Headless CMS"}
        icon={"/docs/menu-icons/headless-cms.svg"}
        link={"headless-cms/graphql-api-overview"}
      >
        <Page hidden link={"headless-cms/about"} />
        <Page
          link={"headless-cms/graphql-api-overview"}
          title={"GraphQL API Overview"}
        />
        <Page link={"headless-cms/api-playground"} title={"API Playground"} />
        <Page
          link={"headless-cms/using-webiny-sdk"}
          title={"Using the Webiny SDK"}
        />
        <Page
          link={"headless-cms/advanced-filtering"}
          title={"Advanced Filtering"}
        />
        <Page
          link={"headless-cms/content-models-via-code"}
          title={"Define Content Models via Code"}
        />
        <Page link={"headless-cms/live-preview"} title={"Live preview"} />
        <Page
          link={"headless-cms/content-modeling-best-practices"}
          title={"Content Modeling Best Practices"}
        />
        <Page link={"headless-cms/event-handlers"} title={"Event Handlers"} />
        <Page
          link={"headless-cms/customize-entry-list-columns"}
          title={"Customize Entry List Columns"}
        />
        <Page
          link={"headless-cms/custom-entries-bulk-action"}
          title={"Custom Entries Bulk Action"}
        />
        <Page
          link={"headless-cms/ai-summary-bulk-action"}
          title={"Generate AI Summary Bulk Action"}
        />
        <Page
          link={"headless-cms/migrating-to-webiny"}
          title={"Migrating to Webiny"}
        />
        <Page
          link={"headless-cms/date-time-and-identity-meta-fields"}
          title={"Date/Time and Identity Meta Fields"}
        />
        {/*<Group title={"Backend"}>*/}
        {/*  <Page link={"headless-cms/event-handler/group"} />*/}
        {/*  <Page link={"headless-cms/event-handler/model"} />*/}
        {/*  <Page link={"headless-cms/event-handler/entry"} />*/}
        {/*  <Page link={"headless-cms/event-handler/entry-extended"} />*/}
        {/*  <Page link={"headless-cms/use-case/group"} />*/}
        {/*  <Page link={"headless-cms/use-case/model"} />*/}
        {/*  <Page link={"headless-cms/use-case/entry"} />*/}
        {/*  <Page link={"headless-cms/builder/group"} />*/}
        {/*  <Page link={"headless-cms/builder/model"} />*/}
        {/*  <Page link={"headless-cms/builder/field"} />*/}
        {/*  <Page link={"headless-cms/examples/private-model"} />*/}
        {/*  <Page link={"headless-cms/examples/single-entry-model"} />*/}
        {/*</Group>*/}
        {/*<Group title={"UI"}>*/}
        {/*  <Page link={"headless-cms/ui/field-renderer"} />*/}
        {/*</Group>*/}
      </Group>
      <Group
        title={"Website Builder"}
        icon={"/docs/menu-icons/page-builder.svg"}
        link={"website-builder/how-it-works"}
      >
        <Page link={"website-builder/how-it-works"} title={"How It Works"} />
        <Page
          link={"website-builder/setup-nextjs"}
          title={"Setup Next.js Project"}
        />
        <Page
          link={"website-builder/multi-tenant-nextjs"}
          title={"Multi-Tenant Setup"}
        />
        <Page link={"website-builder/theme"} title={"Configure Theme"} />
        <Page
          link={"website-builder/custom-component"}
          title={"Create Custom Component"}
        />
        <Page link={"website-builder/page-types"} title={"Page Types"} />
        <Page link={"website-builder/page-settings"} title={"Page Settings"} />
        <Page
          link={"website-builder/customize-page-list-columns"}
          title={"Customize Page List Columns"}
        />
        <Page
          link={"website-builder/event-handlers"}
          title={"Event Handlers"}
        />
        <Page
          link={"website-builder/preview-url-modifier"}
          title={"Preview URL Modifier"}
        />
      </Group>
      <Group
        title={"Tenant Manager"}
        icon={"/docs/menu-icons/tenant-manager.svg"}
        link={"tenant-manager/manage-tenants"}
      >
        <Page link={"tenant-manager/manage-tenants"} />
        <Page link={"tenant-manager/extend-tenant-model"} />
      </Group>
      {/*<Group title={"GraphQL"} icon={"/docs/menu-icons/webiny-overview.svg"} link={"graphql/about"}>*/}
      {/*  <Page link={"graphql/about"} />*/}
      {/*  <Page link={"graphql/reference"} />*/}
      {/*  <Page link={"graphql/example"} />*/}
      {/*</Group>*/}
      {/*<Group*/}
      {/*  title={"Tenant Manager"}*/}
      {/*  icon={"/docs/menu-icons/webiny-overview.svg"}*/}
      {/*  link={"tenant-manager/manage-tenants"}*/}
      {/*>*/}
      {/*  <Page link={"tenant-manager/manage-tenants"} title={"Manage Tenants"} />*/}
      {/*  <Page link={"tenant-manager/extend-tenant-model"} title={"Extend Tenant Model"} />*/}
      {/*</Group>*/}
      <Group
        title={"Security"}
        icon={"/docs/menu-icons/webiny-overview.svg"}
        link={"security/roles"}
      >
        <Page link={"security/roles"} />
        <Page link={"security/teams"} />
        <Page link={"security/universal-api-keys"} />
      </Group>
      <Separator title={"Operations"} />
      <Group
        title={"CLI"}
        icon={"/docs/menu-icons/cli.svg"}
        link={"cli/deploy"}
      >
        <Page link={"cli/deploy"} />
        <Page link={"cli/destroy"} />
        <Page link={"cli/output"} />
        <Page link={"cli/watch"} />
        <Page link={"cli/pulumi"} />
        <Page link={"cli/info"} />
      </Group>
      <Group
        title={"Deployments and Infrastructure"}
        icon={"/docs/menu-icons/infrastructure.svg"}
        link={"infrastructure/diagrams"}
      >
        <Page
          link={"infrastructure/diagrams"}
          title={"Cloud Infrastructure Overview"}
        />
        <Page link={"infrastructure/introduction"} title={"Database Setups"} />
        <Page
          link={"infrastructure/deployment-modes"}
          title={"Deployment Modes"}
        />
        <Page
          link={"infrastructure/deploy-webiny-project-cf-template"}
          title={"AWS CloudFormation Template"}
        />
        <Page link={"infrastructure/ci-cd"} title={"CI/CD"} />
        <Page link={"infrastructure/github-actions"} title={"GitHub Actions"} />
        <Page
          link={"infrastructure/dynamodb-only"}
          title={"DynamoDB-Only Dev Environments"}
        />
        <Page
          link={"infrastructure/opensearch"}
          title={"Shared OpenSearch Cluster"}
        />
        <Page link={"infrastructure/yarnrc-security"} />
        <Group title={"Extensions"} link={"infrastructure/extensions/aws-tags"}>
          <Page
            link={"infrastructure/extensions/aws-tags"}
            title={"AWS Tags"}
          />
          <Page
            link={"infrastructure/extensions/resource-name-prefix"}
            title={"Resource Name Prefix"}
          />
          <Page
            link={"infrastructure/extensions/production-environments"}
            title={"Production Environments"}
          />
          <Page
            link={"infrastructure/extensions/env-specific-config"}
            title={"Environment-Specific Config"}
          />
          <Page
            link={"infrastructure/extensions/opensearch"}
            title={"Amazon OpenSearch"}
          />
          <Page
            link={"infrastructure/extensions/pulumi-extensions"}
            title={"Pulumi Extensions"}
          />
          <Page
            link={"infrastructure/extensions/build-and-deploy-hooks"}
            title={"Build and Deploy Hooks"}
          />
          <Page
            link={"infrastructure/extensions/encryption"}
            title={"Encryption"}
          />
        </Group>
      </Group>
      <Group
        title={"Reference"}
        icon={"/docs/menu-icons/reference-manual.svg"}
        link={"reference/extensions/api"}
      >
        <Group title={"Extensions"} link={"reference/extensions/api"}>
          <Page link={"reference/extensions/api"} title={"Api"} />
          <Page link={"reference/extensions/admin"} title={"Admin"} />
          <Page link={"reference/extensions/infra"} title={"Infra"} />
          <Page link={"reference/extensions/cli"} title={"Cli"} />
          <Page link={"reference/extensions/project"} title={"Project"} />
        </Group>
        {/* __REFERENCE_PAGES_START__ */}
        {/* __SDK_PAGES_START__ */}
        <Group title={"SDK"} link={"reference/sdk/overview"}>
          <Page link={"reference/sdk/overview"} title={"Overview"} />
          <Page link={"reference/sdk/cms"} title={"CMS"} />
          <Page link={"reference/sdk/languages"} title={"Languages"} />
          <Page link={"reference/sdk/file-manager"} title={"File Manager"} />
          <Page
            link={"reference/sdk/tenant-manager"}
            title={"Tenant Manager"}
          />
          <Page link={"reference/sdk/tasks"} title={"Tasks"} />
          <Page link={"reference/sdk/webhooks"} title={"Webhooks"} />
        </Group>
        {/* __SDK_PAGES_END__ */}
        {/* __REFERENCE_PAGES_END__ */}
        <Group title={"Admin"} link={"reference/admin/form-model"}>
          <Page link={"reference/admin/form-model"} title={"Form Model"} />
        </Group>
      </Group>
      <Separator />
      {children}
    </NavigationRoot>
  );
};
