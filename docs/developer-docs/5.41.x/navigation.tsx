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
        {/* Add new groups and pages here. */}
        <Group title={"Core Development Concepts"}>
          <Group title={"Security Framework"}>
            <Page link={"core-development-concepts/security-framework/programmatically-create-roles-and-teams"} />
          </Group>
        </Group>
      </NavigationRoot>
    </>
  );
};
