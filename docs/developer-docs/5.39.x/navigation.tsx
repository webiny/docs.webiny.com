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
        <Group title={"Get Started"} link={"get-started/welcome"}>
          <Page link={"get-started/welcome"} />
        </Group>
        <Group title={"Admin Area"}>
          <Group title={"extensions"}>
            <Page link={"admin-area/extending/environment-variables"} />
            <Page link={"admin-area/extending/webpack-config"} />
          </Group>
        </Group>
        <Group
          title={"Webiny Overview"}
          icon={"/docs-menu-icons/webiny-overview.svg"}
          link={"overview/why-and-when-to-use-webiny"}
        >
          <Page link={"overview/why-and-when-to-use-webiny"} before="overview/pricing" />
          <Page link={"overview/introduction"} remove />
        </Group>
        <Group
          title={"Headless CMS"}
          icon={"/docs-menu-icons/headless-cms.svg"}
          link={"headless-cms/overview"}
        >
          <Page link={"headless-cms/overview"} hidden={true} />
          <Group title={"Basics"}>
            <Page
              link={"headless-cms/basics/content-modeling-best-practices"}
              after={"headless-cms/basics/migrating-to-webiny"}
            />
          </Group>
          <Group title={"extensions"}>
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
            <Page link={"headless-cms/extending/lexical-editor"} />
          </Group>
          <Group title={"References"}>
            <Page link={"headless-cms/references/date-time-and-identity-meta-fields"} />
          </Group>
        </Group>
        <Group
          title={"Page Builder"}
          icon={"/docs-menu-icons/page-builder.svg"}
          link={"page-builder/overview"}
        >
          <Page link={"page-builder/overview"} hidden={true} />
          <Group title={"extensions"}>
            <Page
              link={"page-builder/extending/customize-page-list-actions"}
              before={"page-builder/extending/customize-page-bulk-actions"}
            />
          </Group>
        </Group>
        <Group title={"File Manager"}>
          <Group title={"extensions"}>
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
        <Group title={"Webiny Enterprise"}>
          <Group title={"Advanced Access Control Layer (AACL)"}>
            <Page link={"enterprise/aacl/private-files"} />
          </Group>
        </Group>
      </NavigationRoot>
    </>
  );
};
