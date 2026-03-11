import React from "react";
import { Group, Page, NavigationRoot, Separator } from "@webiny/docs-generator";

export const Navigation = ({ children }: { children: React.ReactNode }) => {
  return (
    <NavigationRoot directory={__dirname} linkPrefix={"user-guides"}>
      <Group title={"Get Started"} icon={"/docs/menu-icons/get-started.svg"} link={"overview"}>
        <Page link={"overview"} />
      </Group>
      <Separator />
      <Group
        title={"Headless CMS"}
        icon={"/docs/menu-icons/headless-cms.svg"}
        link={"headless-cms/essentials/glossary"}
      >
        <Group title={"Essentials"}>
          <Page title={"Glossary"} link={"headless-cms/essentials/glossary"} />
          <Page link={"headless-cms/essentials/create-content-model"} />
          <Page link={"headless-cms/essentials/create-content-entry"} />
          <Page link={"headless-cms/essentials/create-content-model-group"} />
          <Page link={"headless-cms/essentials/content-entry-revisions"} />
          <Page link={"headless-cms/essentials/clone-content-model"} />
          <Page link={"headless-cms/essentials/manage-content-model-settings"} />
          <Page link={"headless-cms/essentials/add-validator-to-fields"} />
          <Page link={"headless-cms/essentials/reference-field"} />
        </Group>
        <Group title={"Advanced"}>
          <Page link={"headless-cms/advanced/import-export-content-models"} />
        </Group>
      </Group>
      <Separator />
      <Group
        title={"Website Builder"}
        icon={"/docs/menu-icons/page-builder.svg"}
        link={"website-builder/essentials/glossary"}
      >
        <Group title={"Essentials"}>
          <Page title={"Glossary"} link={"website-builder/essentials/glossary"} />
          <Page link={"website-builder/essentials/create-page"} />
          <Page link={"website-builder/essentials/nextjs-starter-kit"} />
          <Page link={"website-builder/essentials/custom-components"} />
        </Group>
      </Group>
      <Separator />
      <Group
        title={"File Manager"}
        icon={"/docs/menu-icons/file-manager.svg"}
        link={"file-manager/essentials/upload-file"}
      >
        <Group title={"Essentials"}>
          <Page link={"file-manager/essentials/upload-file"} />
          <Page link={"file-manager/essentials/organizing-files"} />
          <Page link={"file-manager/essentials/tagging-files"} />
        </Group>
      </Group>
      <Separator />
      <Group
        title={"Security"}
        icon={"/docs/menu-icons/wcp.svg"}
        link={"security/essentials/create-user"}
      >
        <Group title={"Essentials"}>
          <Page link={"security/essentials/create-user"} />
          <Page link={"security/essentials/create-user-role"} />
          <Page link={"security/essentials/assign-role"} />
          <Page link={"security/essentials/create-team"} />
          <Page link={"security/essentials/assign-team"} />
        </Group>
      </Group>
      {children}
    </NavigationRoot>
  );
};
