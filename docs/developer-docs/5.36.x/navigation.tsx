import React from "react";
import { Group, Page, NavigationRoot } from "@webiny/docs-generator";
import { Navigation as BaseNavigation } from "../5.35.x/navigation";

export const Navigation = () => {
  return (
    <>
      <BaseNavigation />
      <NavigationRoot directory={__dirname}>
        <Group title={"File Manager"}>
          <Group title={"Integrations"}>
            <Page link={"file-manager/integrations/programmatic-file-upload"} />
          </Group>
        </Group>
      </NavigationRoot>
    </>
  );
};
