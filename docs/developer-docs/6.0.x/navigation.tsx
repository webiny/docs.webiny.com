import React from "react";
import { Group, Page, NavigationRoot } from "@webiny/docs-generator";
import { Separator } from "@webiny/docs-generator";

export const Navigation = ({ children }: { children: React.ReactNode }) => {
  return (
    <NavigationRoot directory={__dirname}>
      <Group
        title={"Get Started"}
        icon={"/docs-menu-icons/get-started.svg"}
        link={"get-started/install-webiny"}
      >
        <Page link={"get-started/welcome"} />
        <Page link={"get-started/install-webiny"} />
      </Group>
      <Page link={"overview/pricing"} hidden={true} />
      <Page link={"overview/features/security"} hidden={true} />
      <Separator />
      {children}
    </NavigationRoot>
  );
};
