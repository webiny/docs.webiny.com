import React from "react";
import { Page, NavigationRoot, Group, Separator } from "@webiny/docs-generator";
import { Navigation as BaseNavigation } from "../5.38.x/navigation";

export const Navigation = ({ children }: { children: React.ReactNode }) => {
  return (
    <BaseNavigation>
      <NavigationRoot directory={__dirname}>

      <Group title={"Headless CMS"}>
        <Group title={"Essentials"}>
          <Page link={"headless-cms/advanced/advanced-search-filter-builder"} />
        </Group>
      </Group>

      <Separator />

      <Group title={"Security"}>
        <Group title={"Essentials"}>
        <Page link={"security/essentials/user-creation"} />
        <Page link={"security/essentials/role-creation"} />
        <Page link={"security/essentials/assign-role"} />
        <Page link={"security/essentials/team-creation"} />
        <Page link={"security/essentials/assign-team"} />
        <Page link={"security/essentials/api-key-creation"} />
        <Page link={"security/essentials/folder-level-permission-in-headless-cms"} />
        </Group>
      </Group>

      <Group title={"Form Builder"}>
        <Group title={"Advanced"}>
          <Page link={"form-builder/advanced/email-triggers"} />
          <Page link={"form-builder/advanced/multi-steps-form"} />
        </Group>
      </Group>
      {children}
      </NavigationRoot>
    </BaseNavigation>
  );
};
