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
      </Group>
      <Group title={"Basic"} icon={"/docs-menu-icons/webiny-overview.svg"} link={"basic/result"}>
        <Page link={"basic/result"} />
        <Page link={"basic/di"} />
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
      <Page link={"overview/pricing"} hidden={true} />
      <Page link={"overview/features/security"} hidden={true} />
      <Separator />
      {children}
    </NavigationRoot>
  );
};
