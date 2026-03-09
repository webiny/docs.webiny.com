import React from "react";
import { Group, NavigationRoot, Page, Separator } from "@webiny/docs-generator";

export const Navigation = ({ children }: { children: React.ReactNode }) => {
  return (
    <NavigationRoot directory={__dirname}>
      <Group
        title={"Get Started"}
        icon={"/docs-menu-icons/get-started.svg"}
        link={"get-started/install-webiny"}
      >
        <Page link={"get-started/welcome"} />
        <Page link={"get-started/install-webiny"} />
        <Page link={"get-started/upgrade"} />
      </Group>
      <Group
        title={"Core Concepts"}
        icon={"/docs-menu-icons/webiny-overview.svg"}
        link={"core-concepts/architecture"}
      >
        <Page link={"core-concepts/architecture"} />
        <Page link={"core-concepts/applications"} />
        <Page link={"core-concepts/project-structure"} />
        <Page link={"core-concepts/di"} />
        <Page link={"core-concepts/result"} />
        <Page link={"core-concepts/multi-tenancy"} />
        <Page link={"core-concepts/local-development"} />
        <Page link={"core-concepts/environment-variables"} />
      </Group>
      <Group
        title={"Headless CMS"}
        icon={"/docs-menu-icons/headless-cms.svg"}
        link={"headless-cms/about"}
      >
        <Page link={"headless-cms/about"} />
        <Group title={"Backend"}>
          <Page link={"headless-cms/event-handler/group"} />
          <Page link={"headless-cms/event-handler/model"} />
          <Page link={"headless-cms/event-handler/entry"} />
          <Page link={"headless-cms/event-handler/entry-extended"} />

          <Page link={"headless-cms/use-case/group"} />
          <Page link={"headless-cms/use-case/model"} />
          <Page link={"headless-cms/use-case/entry"} />

          <Page link={"headless-cms/builder/group"} />
          <Page link={"headless-cms/builder/model"} />
          <Page link={"headless-cms/builder/field"} />

          <Page link={"headless-cms/examples/private-model"} />
          <Page link={"headless-cms/examples/single-entry-model"} />
        </Group>
        <Group title={"UI"}>
          <Page link={"headless-cms/ui/field-renderer"} />
        </Group>
      </Group>
      <Group
        title={"Tenant Manager"}
        icon={"/docs-menu-icons/webiny-overview.svg"}
        link={"tenant-manager/manage-tenants"}
      >
        <Page link={"tenant-manager/manage-tenants"} title={"Manage Tenants"} />
        <Page link={"tenant-manager/extend-tenant-model"} title={"Extend Tenant Model"} />
      </Group>
      <Group title={"GraphQL"} icon={"/docs-menu-icons/webiny-overview.svg"} link={"graphql/about"}>
        <Page link={"graphql/about"} />
        <Page link={"graphql/reference"} />
        <Page link={"graphql/example"} />
      </Group>
      <Group title={"Tasks"} icon={"/docs-menu-icons/webiny-overview.svg"} link={"tasks/about"}>
        <Page link={"tasks/about"} />
        <Page link={"tasks/reference"} />
        <Page link={"tasks/management"} />
      </Group>
      <Group title={"CLI"} icon={"/docs-menu-icons/webiny-overview.svg"} link={"cli/deploy"}>
        <Page link={"cli/deploy"} />
        <Page link={"cli/destroy"} />
        <Page link={"cli/output"} />
        <Page link={"cli/watch"} />
        <Page link={"cli/pulumi"} />
        <Page link={"cli/info"} />
      </Group>
      <Group
        title={"Reference"}
        icon={"/docs-menu-icons/core-dev-concepts.svg"}
        link={"reference/api/cms/entry"}
      >
        {/* __REFERENCE_PAGES_START__ */}
        <Page link={"reference/extensions"} />
        <Group title={"Admin"} link={"reference/admin"}>
          <Page link={"reference/admin"} title={"Root"} />
          <Page link={"reference/admin/aco"} title={"ACO"} />
          <Page link={"reference/admin/build-params"} title={"Build Params"} />
          <Page link={"reference/admin/configs"} title={"Configs"} />
          <Page link={"reference/admin/env-config"} title={"Env Config"} />
          <Page link={"reference/admin/form"} title={"Form"} />
          <Page link={"reference/admin/graphql-client"} title={"Graphql Client"} />
          <Page link={"reference/admin/lexical"} title={"Lexical Editor"} />
          <Page link={"reference/admin/local-storage"} title={"Local Storage"} />
          <Page link={"reference/admin/router"} title={"Router"} />
          <Page link={"reference/admin/tenancy"} title={"Tenancy"} />
          <Page link={"reference/admin/ui"} title={"UI"} />
          <Group title={"CMS"} link={"reference/admin/cms"}>
            <Page link={"reference/admin/cms"} title={"Root"} />
            <Page link={"reference/admin/cms/entry/editor"} title={"Editor"} />
            <Page link={"reference/admin/cms/entry/list"} title={"List"} />
            <Page link={"reference/admin/cms/fieldRenderers/dynamic-zone"} title={"Dynamic Zone"} />
            <Page link={"reference/admin/cms/fieldRenderers/object"} title={"Object"} />
            <Page link={"reference/admin/cms/lexical"} title={"Lexical Editor"} />
            <Page link={"reference/admin/cms/model"} title={"Model"} />
          </Group>
          <Group title={"Website Builder"} link={"reference/admin/website-builder"}>
            <Page link={"reference/admin/website-builder"} title={"Root"} />
            <Page link={"reference/admin/website-builder/lexical"} title={"Lexical Editor"} />
            <Page link={"reference/admin/website-builder/page/editor"} title={"Editor"} />
            <Page link={"reference/admin/website-builder/page/list"} title={"List"} />
            <Page link={"reference/admin/website-builder/redirect/list"} title={"List"} />
          </Group>
        </Group>
        <Group title={"API"} link={"reference/api/cms/entry"}>
          <Page link={"reference/api"} title={"Root"} />
          <Page link={"reference/api/build-params"} title={"Build Params"} />
          <Page link={"reference/api/event-publisher"} title={"Event Publisher"} />
          <Page link={"reference/api/graphql"} title={"GraphQL"} />
          <Page link={"reference/api/key-value-store"} title={"Key Value Store"} />
          <Page link={"reference/api/logger"} title={"Logger"} />
          <Page link={"reference/api/system"} title={"System"} />
          <Page link={"reference/api/tasks"} title={"Tasks"} />
          <Page link={"reference/api/tenancy"} title={"Tenancy"} />
          <Page link={"reference/api/tenant-manager"} title={"Tenant Manager"} />
          <Group title={"CMS"} link={"reference/api/cms/entry"}>
            <Page link={"reference/api/cms/entry"} title={"Entry"} />
            <Page link={"reference/api/cms/group"} title={"Group"} />
            <Page link={"reference/api/cms/model"} title={"Model"} />
          </Group>
          <Group title={"Security"} link={"reference/api/security"}>
            <Page link={"reference/api/security"} title={"Root"} />
            <Page link={"reference/api/security/api-key"} title={"Api Key"} />
            <Page link={"reference/api/security/authentication"} title={"Authentication"} />
            <Page link={"reference/api/security/role"} title={"Role"} />
            <Page link={"reference/api/security/user"} title={"User"} />
          </Group>
          <Group title={"Website Builder"} link={"reference/api/website-builder/page"}>
            <Page link={"reference/api/website-builder/nextjs"} title={"Next.js"} />
            <Page link={"reference/api/website-builder/page"} title={"Page"} />
            <Page link={"reference/api/website-builder/redirect"} title={"Redirect"} />
          </Group>
        </Group>
        <Group title={"CLI"} link={"reference/cli/overview"}>
          <Page link={"reference/cli/overview"} title={"Root"} />
          <Page link={"reference/cli/command"} title={"Command"} />
        </Group>
        <Group title={"Infrastructure"} link={"reference/infra/overview"}>
          <Page link={"reference/infra/overview"} title={"Root"} />
          <Page link={"reference/infra/admin"} title={"Admin"} />
          <Page link={"reference/infra/api"} title={"API"} />
          <Page link={"reference/infra/core"} title={"Core"} />
        </Group>
        {/* __REFERENCE_PAGES_END__ */}
      </Group>
      <Page link={"overview/pricing"} hidden={true} />
      <Page link={"overview/features/security"} hidden={true} />
      <Separator />
      {children}
    </NavigationRoot>
  );
};
