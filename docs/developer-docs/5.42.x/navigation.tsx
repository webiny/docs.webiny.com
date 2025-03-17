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
        <Group title={"Core Development Concepts"}>
          <Group title={"Basics"} after={"Basics"}>
            <Page link={"core-development-concepts/basics/user-project-upgrade"} />
            <Page link={"core-development-concepts/basics/logger"} />
          </Group>
        </Group>
        <Group title={"Headless CMS"}>
          <Group title={"extensions"}>
            <Page
              link={"headless-cms/extending/customize-folder-fields"}
              after={"headless-cms/extending/customize-entry-list-actions"}
            />
          </Group>
        </Group>
        <Group title={"File Manager"}>
          <Group title={"extensions"}>
            <Page
              link={"file-manager/extending/customize-folder-fields"}
              after={"file-manager/extending/customize-file-list-actions"}
            />
          </Group>
        </Group>
        <Group title={"Page Builder"}>
          <Group title={"extensions"}>
            <Page
              link={"page-builder/extending/customize-folder-fields"}
              after={"page-builder/extending/customize-page-bulk-actions"}
            />
          </Group>
        </Group>
      </NavigationRoot>
    </>
  );
};
