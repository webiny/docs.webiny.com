import React from "react";
import { Navigation as BaseNavigation } from "../5.34.x/navigation";
import { Group, NavigationRoot, Page } from "@webiny/docs-generator";

export const Navigation = () => {
  return (
    <>
      {/* Inherit navigation from 5.34.x. */}
      <BaseNavigation />
      <NavigationRoot directory={__dirname}>
        <Group title={"Admin Area"}>
          <Group title={"extensions"}>
            <Page link={"admin-area/extending/custom-providers"} />
          </Group>
        </Group>
        <Group title={"Webiny Overview"}>
          <Group title={"Features"} linkPrefix={"features"}>
            <Page
              link={"overview/features/advanced-content-organization"}
              after={"overview/features/access-control"}
            />
          </Group>
        </Group>
      </NavigationRoot>
    </>
  );
};
