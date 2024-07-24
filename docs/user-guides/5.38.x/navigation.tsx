import React from "react";
import { Page, NavigationRoot, Group, Separator } from "@webiny/docs-generator";
import { Navigation as BaseNavigation } from "../5.37.x/navigation";

export const Navigation = () => {
  return (
    <BaseNavigation>
      <NavigationRoot directory={__dirname}>
        <Group
          title={"Headless CMS"}
          icon={"/docs-menu-icons/headless-cms.svg"}
          link={"headless-cms/essentials/glossary"}
          >
          <Group title={"Advanced"}>
            <Page link={"headless-cms/advanced/import-export-content-models"} />
          </Group>
        </Group>

        <Separator />

        <Group title={"File Manager"}
          icon={"/docs-menu-icons/file-manager.svg"}
          link={"file-manager/essentials/upload-file"}
          >
          <Group title={"Essentials"}>
            <Page link={"file-manager/essentials/upload-file"} />
            <Page link={"file-manager/essentials/organizing-files"} />
            <Page link={"file-manager/essentials/tagging-files"} />
            <Page link={"file-manager/essentials/file-aliases"} />
            <Page link={"file-manager/essentials/bulk-actions"} />
          </Group>
        </Group>

        <Separator />

        <Group title={"Advanced Publishing Workflow"}
          icon={"/docs-menu-icons/enterprise.svg"}
          link={"apw/essentials/introduction-to-apw"}
          >
          <Group title={"Essentials"}>
            <Page title="Introduction" link={"apw/essentials/introduction-to-apw"} />
            <Page title="APW User Guides Outline" link={"apw/essentials/apw-user-guides-outline-users-creation"} />
            <Page link={"apw/essentials/define-workflow"} />
            <Page link={"apw/essentials/submit-record-for-review"} />
            <Page link={"apw/essentials/review-record"} />
            <Page link={"apw/essentials/submit-change"} />
            <Page link={"apw/essentials/provide-sign-off"} />
            <Page link={"apw/essentials/scheduled-publishing"} />
          </Group>
        </Group>

      </NavigationRoot>
    </BaseNavigation>
  );
};
