import React from "react";
import { Group, Page, NavigationRoot, Separator } from "@webiny/docs-generator";

export const Navigation = ({ children }: { children: React.ReactNode }) => {
  return (
    <NavigationRoot directory={__dirname} linkPrefix={"user-guides"}>
      <Group title={"Get Started"} icon={"/docs-menu-icons/get-started.svg"} link={"overview"}>
        <Page link={"overview"} />
      </Group>
      <Separator />
      <Group
        title={"Website Builder"}
        icon={"/docs-menu-icons/page-builder.svg"}
        link={"website-builder/essentials/glossary"}
      >
        <Group title={"Essentials"}>
          <Page title={"Glossary"} link={"website-builder/essentials/glossary"} />
          <Page link={"website-builder/essentials/create-page"} />
        </Group>
      </Group>
      <Separator />
      <Group
        title={"File Manager"}
        icon={"/docs-menu-icons/file-manager.svg"}
        link={"file-manager/essentials/upload-file"}
      >
        <Group title={"Essentials"}>
          <Page link={"file-manager/essentials/upload-file"} />
          <Page link={"file-manager/essentials/organizing-files"} />
          <Page link={"file-manager/essentials/tagging-files"} />
        </Group>
      </Group>
      <Separator />
      {children}
    </NavigationRoot>
  );
};
