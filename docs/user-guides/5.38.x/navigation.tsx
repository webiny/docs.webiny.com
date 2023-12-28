import React from "react";
import { Page, NavigationRoot, Group, Separator } from "@webiny/docs-generator";
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

        <Separator />

        <Group title={"File Manager"}>
          <Group title={"Essentials"}>
            <Page link={"file-manager/essentials/upload-file"} />
            <Page link={"file-manager/essentials/organizing-files"} />
            <Page link={"file-manager/essentials/tagging-files"} />
            <Page link={"file-manager/essentials/file-aliases"} />
            <Page link={"file-manager/essentials/bulk-actions"} />
        </Group>
      </Group>

      </NavigationRoot>
    </BaseNavigation>
  );
};
