import React from "react";
import { Group, Page, NavigationRoot } from "@webiny/docs-generator";
import { Navigation as BaseNavigation } from "../5.29.x/navigation";

export const Navigation = () => {
  return (
    <>
      {/* Inherit navigation from 5.29.x. */}
      <BaseNavigation />
      {/* Add new items. */}
      <NavigationRoot directory={__dirname}>
        <Group title={"Webiny Overview"}>
          <Group title={"Features"}>
            <Page link={"overview/features/mailer"} />
          </Group>
        </Group>
        <Group title={"Webiny Control Panel"} after={"Webiny Enterprise"}>
          <Page link={"wcp/overview"} />
          <Page link={"wcp/link-a-project"} />
        </Group>
      </NavigationRoot>
    </>
  );
};
