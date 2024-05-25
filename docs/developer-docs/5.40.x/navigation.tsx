import React from "react";
import { Navigation as BaseNavigation } from "../5.38.x/navigation";
import { Group, NavigationRoot, Page } from "@webiny/docs-generator";

export const Navigation = () => {
  return (
    <>
      {/* Inherit navigation from 5.38.x. */}
      <BaseNavigation />
      {/* Add new items. */}
      <NavigationRoot directory={__dirname}>
        {/* Add new groups and pages here. */}
        <Group title={"Admin Area"}>
          <Group title={"Extending Functionality"}>
            <Page link={"admin-area/extending/custom-dashboard"} />
            <Page
              link={"admin-area/extending/customize-navigation"}
              after={"admin-area/extending/custom-dashboard"}
            />
          </Group>
        </Group>
        <Group title={"Headless CMS"}>
          <Group title={"Extending Functionality"}>
            <Page
              link={"headless-cms/extending/customize-entry-list-actions"}
              after={"headless-cms/extending/customize-entry-list-bulk-actions"}
            />
            <Page
              link={"headless-cms/extending/customize-entry-list-table-columns"}
              after={"headless-cms/extending/customize-entry-list-bulk-actions"}
            />
            <Page
              link={"headless-cms/extending/create-rich-text-content-renderer"}
              after={"headless-cms/extending/custom-field-type"}
            />
            <Page
              link={"headless-cms/extending/private-models"}
              after={"headless-cms/extending/custom-sorting"}
            />
          </Group>
          <Group title={"References"}>
            <Page link={"headless-cms/references/date-time-and-identity-meta-fields"} />
          </Group>
        </Group>
        <Group title={"File Manager"}>
          <Group title={"Extending Functionality"}>
            <Page link={"file-manager/extending/customize-file-preview"} />
            <Page link={"file-manager/extending/customize-file-actions"} />
            <Page link={"file-manager/extending/create-a-file-type-plugin"} remove />
          </Group>
        </Group>
        <Group title={"Page Builder"}>
          <Group title={"Extending Functionality"}>
            <Page
              link={"page-builder/extending/customize-page-list-actions"}
              before={"page-builder/extending/customize-page-bulk-actions"}
            />
            <Page
              link={"page-builder/extending/customize-editors"}
              before={"page-builder/extending/customize-page-list-actions"}
            />
          </Group>
        </Group>
        <Group title={"File Manager"}>
          <Group title={"Extending Functionality"}>
            <Page
              link={"file-manager/extending/customize-file-list-actions"}
              after={"file-manager/extending/customize-file-bulk-actions"}
            />
            <Page
              link={"file-manager/extending/customize-file-list-table-columns"}
              after={"file-manager/extending/customize-file-bulk-actions"}
            />
          </Group>
        </Group>
        <Group title={"Core Development Concepts"}>
          <Group title={"Basics"}>
            <Page link={"core-development-concepts/basics/plugins"} remove />
            <Page link={"core-development-concepts/basics/importing-plugins"} remove />
            <Page
              link={"core-development-concepts/basics/extensions"}
              before={"core-development-concepts/basics/tools-and-libraries"}
            />
          </Group>
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
      </NavigationRoot>
    </>
  );
};
