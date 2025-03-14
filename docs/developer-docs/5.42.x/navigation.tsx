import React from "react";
import { Navigation as BaseNavigation } from "../5.41.x/navigation";
import { Group, Page, NavigationRoot } from "@webiny/docs-generator";

export const Navigation = () => {
  return (
    <>
      {/* Inherit navigation from 5.41.x. */}
      <BaseNavigation />
      {/* Add new items. */}
      <NavigationRoot directory={__dirname}>
        <Group
                title={"Webiny Overview"}
                icon={"/docs-menu-icons/webiny-overview.svg"}
                link={"overview/introduction"}
              >
                <Group title={"Applications"}>
                  <Page link={"overview/applications/a-b-testing-and-personalization"} />
                </Group>
          </Group>
        <Group title={"Core Development Concepts"}>
          <Group title={"Basics"} after={"Basics"}>
            <Page link={"core-development-concepts/basics/user-project-upgrade"} />
            <Page link={"core-development-concepts/basics/logger"} />
          </Group>
        </Group>
      </NavigationRoot>
    </>
  );
};
