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
          after={"Headless CMS"}
          icon={"/docs-menu-icons/wcp.svg"}
          link={"security/extensions/programmatically-create-roles-and-teams"}
        >
          <Group title={"Security Framework"}>
            <Page link={"security/security-framework/introduction"} />
            <Page link={"security/security-framework/api-security"} />
            <Page link={"security/security-framework/react-security"} />
          </Group>
          <Group title={"Extensions"}>
            <Page link={"security/extensions/programmatically-create-roles-and-teams"} />
          </Group>
        </Group>
        <Group title={"Core Development Concepts"}>
          <Group title={"Security Framework"} remove>
            <Page link={"security/security-framework/introduction"} remove/>
            <Page link={"security/security-framework/api-security"} remove/>
            <Page link={"security/security-framework/react-security"} remove/>
          </Group>
        </Group>
      </NavigationRoot>
    </>
  );
};
