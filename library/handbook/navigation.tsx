import React from "react";
import { Page, Collapsable, Section } from "@webiny/docs-generator";

export const Navigation = () => {
  return (
    <>
      <Collapsable title={"Welcome!"}>
        <Section title={"Introduction"}>
          <Page link={"introduction"} />
          <Page file={"cypress.mdx"} />
          <Page file={"cypress.mdx"} link={"testing/cypress"} />
        </Section>
      </Collapsable>
    </>
  );
};
