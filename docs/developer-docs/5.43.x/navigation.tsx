import React from "react";
import { Navigation as BaseNavigation } from "../5.42.x/navigation";
import { Group, NavigationRoot, Page } from "@webiny/docs-generator";

export const Navigation = () => {
  return (
    <>
      <BaseNavigation />
      <NavigationRoot directory={__dirname}>
        <Group title={"Core Development Concepts"}>
          <Group title={"Background Tasks"}>
            <Page link={"core-development-concepts/background-tasks/about-background-tasks"} />
            <Page link={"core-development-concepts/background-tasks/how-background-tasks-work"} />
            <Page
              link={"core-development-concepts/background-tasks/how-to-define-a-background-task"}
            />
            <Page
              link={
                "core-development-concepts/background-tasks/how-to-handle-a-background-task-run"
              }
            />
            <Page link={"core-development-concepts/background-tasks/background-task-management"} />
            <Page link={"core-development-concepts/background-tasks/built-in-background-tasks"} />
            <Page link={"core-development-concepts/background-tasks/what-to-be-careful-about"} />
          </Group>
        </Group>
        <Group title={"Headless CMS"}>
          <Group title={"extensions"}>
            <Page
              link={"headless-cms/extending/confirmation-dialog-for-folder-drag-and-drop"}
              after={"headless-cms/extending/customize-folder-fields"}
            />
          </Group>
        </Group>
        <Group title={"File Manager"}>
          <Group title={"extensions"}>
            <Page
              link={"file-manager/extending/confirmation-dialog-for-folder-drag-and-drop"}
              after={"file-manager/extending/customize-folder-fields"}
            />
          </Group>
        </Group>
        <Group title={"Page Builder"}>
          <Group title={"extensions"}>
            <Page
              link={"page-builder/extending/confirmation-dialog-for-folder-drag-and-drop"}
              after={"page-builder/extending/customize-folder-fields"}
            />
          </Group>
        </Group>
      </NavigationRoot>
    </>
  );
};
