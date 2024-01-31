import React from "react";
import { NavigationRoot, Page } from "@webiny/docs-generator";

export const Navigation = () => {
  return (
    <NavigationRoot directory={__dirname} linkPrefix={"messages"}>
      <Page link={"./lambda-edge-warning"} hidden={true} />
      <Page link={"./cloudwatch"} hidden={true} />
    </NavigationRoot>
  );
};
