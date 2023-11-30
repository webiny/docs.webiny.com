import React from "react";
import { Navigation as BaseNavigation } from "../5.37.x/navigation";
import { Group, Page, NavigationRoot } from "@webiny/docs-generator";

export const Navigation = () => {
  return (
    <>
      {/* Inherit navigation from 5.37.x. */}
      <BaseNavigation />
      {/* Add new items. */}
      <NavigationRoot directory={__dirname}>
        <Group title={"Page Builder"}>
          <Group title={"Extending functionality"}>
            <Page
              link={"page-builder/extending/customize-page-bulk-actions"}
              before={"page-builder/extending/create-a-page-element"}
            />
          </Group>
        </Group>
        <Group title={"Headless CMS"}>
          <Group title={"Extending functionality"}>
            <Page
              link={"headless-cms/extending/customize-entry-list-bulk-actions"}
              after={"headless-cms/extending/customize-entry-list-filters"}
            />
          </Group>
        </Group>
        <Group title={"File Manager"}>
          <Group title={"Extending functionality"}>
            <Page
              link={"file-manager/extending/customize-file-bulk-actions"}
              after={"file-manager/extending/customize-file-filters"}
            />
          </Group>
        </Group>
        <Group title={"Webiny Enterprise"}>
          <Page link={"enterprise/teams"} remove />
          <Group title={"Advanced Access Control Layer (AACL)"}>
            <Page link={"enterprise/aacl/introduction"} />
            <Page link={"enterprise/aacl/teams"} />
            <Page link={"enterprise/aacl/folder-level-permissions"} />
          </Group>
        </Group>
        <Group title={"Core Development Concepts"}>
          <Group title={"Extending and Customizing"}>
            <Page link={"core-development-concepts/extending-and-customizing/lexical-tools"} />
          </Group>
        </Group>
      </NavigationRoot>
    </>
  );
};
