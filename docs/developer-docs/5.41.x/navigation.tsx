import React from "react";
import { Navigation as BaseNavigation } from "../5.40.x/navigation";
import { Group, NavigationRoot, Page } from "@webiny/docs-generator";

export const Navigation = () => {
  return (
    <>
      {/* Inherit navigation from 5.40.x. */}
      <BaseNavigation />
      {/* Add new items. */}
      <NavigationRoot directory={__dirname}>
        <Group
          title={"Security"}
          icon={"/docs-menu-icons/page-builder.svg"}
          link={"security/programmatically-create-roles-and-teams"}
        >
          <Page link={"security/programmatically-create-roles-and-teams"} />
        </Group>
      </NavigationRoot>
    </>
  );
};
