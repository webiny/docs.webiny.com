import React from "react";
import { Page, NavigationRoot, Group } from "@webiny/docs-generator";
import { Navigation as BaseNavigation } from "../5.37.x/navigation";

export const Navigation = () => {
  return (
    <BaseNavigation>
      <NavigationRoot directory={__dirname}>
        <Group title={"Headless CMS"}>
          <Group title={"Advanced"}>
            <Page link={"headless-cms/advanced/import-export-content-models"} />
          </Group>
        </Group>
      </NavigationRoot>
    </BaseNavigation>
  );
};
