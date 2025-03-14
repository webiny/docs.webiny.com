import React from "react";
import { Page, NavigationRoot, Group, Separator } from "@webiny/docs-generator";
import { Navigation as BaseNavigation } from "../5.41.x/navigation";

export const Navigation = ({ children }: { children: React.ReactNode }) => {
  return (
    <BaseNavigation>
      <NavigationRoot directory={__dirname}>
        <Separator/>
        <Group title={"Security"}
          icon={"/docs-menu-icons/wcp.svg"}
          link={"security/essentials/user-creation"}
          >
          <Group title={"Essentials"}>
            <Page link={"security/essentials/user-creation"} />
            <Page link={"security/essentials/role-creation"} />
            <Page link={"security/essentials/assign-role"} />
            <Page link={"security/essentials/team-creation"} />
            <Page link={"security/essentials/assign-team"} />
          </Group>
        </Group>
        {children}
      </NavigationRoot>
    </BaseNavigation>
  );
};
