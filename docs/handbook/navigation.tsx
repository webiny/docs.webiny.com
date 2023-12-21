import React from "react";
import { Page, Group, NavigationRoot } from "@webiny/docs-generator";

export const Navigation = () => {
  return (
    <NavigationRoot directory={__dirname}>
      <Group title={"Welcome!"}>
        
        <Group title={"About the company"} linkPrefix={"company"}>
          <Page file={"./company/why-webiny-exists"} />
          <Page file={"./company/how-we-got-here"} />
          <Page file={"./company/who-are-we-building-for"} />
          <Page file={"./company/how-we-make-users-happy"} />
          <Page file={"./company/how-we-make-money"} />
          <Page file={"./company/our-ethos"} />
        </Group>

        <Page file={"./introduction"} link={"introduction"} />
        <Group title={"Engineering"} linkPrefix={"engineering"}>
          <Page file={"./engineering/cypress"} />
          <Page file={"./engineering/cypress.mdx"} link={"testing/cypress"} />
        </Group>
      </Group>
    </NavigationRoot>
  );
};
