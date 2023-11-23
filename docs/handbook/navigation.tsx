import React from "react";
import { Page, Group, NavigationRoot } from "@webiny/docs-generator";

export const Navigation = () => {
  return (
    <NavigationRoot directory={__dirname}>
      <Group title={"Welcome!"}>
        <Page file={"./introduction"} link={"introduction"} />
        <Group title={"Engineering"}>
          <Page file={"./engineering/cypress"} />
          <Page file={"./engineering/cypress.mdx"} link={"testing/cypress"} />
        </Group>
      </Group>
    </NavigationRoot>
  );
};
