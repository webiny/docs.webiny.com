import React from "react";
import { Group, Page, NavigationRoot } from "@webiny/docs-generator";
import { Navigation as BaseNavigation } from "../5.32.x/navigation";

export const Navigation = () => {
  return (
    <>
      {/* Inherit navigation from 5.32.x. */}
      <BaseNavigation />
      <NavigationRoot directory={__dirname}>
        {/* Add new items. */}
        <Group title={"Admin Area"}>
          <Group title={"Extending functionality"}>
            <Page link={"admin-area/extending/custom-dashboard"} />
          </Group>
        </Group>
        <Group title={"File Manager"}>
          <Group title={"Extending Functionality"}>
            <Page link={"file-manager/extending/create-a-custom-file-manager-renderer"} />
          </Group>
        </Group>
        <Group title={"Headless CMS"}>
          <Group title={"Extending Functionality"}>
            <Page link={"headless-cms/extending/content-models-via-code-storage-id"} />
          </Group>
        </Group>
        <Group title={"Performance & Load Benchmark"}>
          <Group title={"Headless CMS"}>
            <Page link={"performance-and-load-benchmark/headless-cms/performance-tuning"} />
          </Group>
        </Group>
      </NavigationRoot>
    </>
  );
};
