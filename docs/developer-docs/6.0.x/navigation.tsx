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
      <Group
        title={"Headless CMS"}
        icon={"/docs-menu-icons/headless-cms.svg"}
        link={"headless-cms/about"}
      >
        <Page link={"headless-cms/about"} />
        <Page link={"headless-cms/event-handler/group"} />
        <Page link={"headless-cms/event-handler/model"} />
        <Page link={"headless-cms/event-handler/entry"} />
        <Page link={"headless-cms/event-handler/entry-extended"} />

        <Page link={"headless-cms/use-case/group"} />
        <Page link={"headless-cms/use-case/model"} />
      </Group>
      <Page link={"overview/pricing"} hidden={true} />
      <Page link={"overview/features/security"} hidden={true} />
      <Separator />
      {children}
    </NavigationRoot>
  );
};
