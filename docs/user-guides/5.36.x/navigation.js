import React from "react";
import { NavigationRoot } from "@webiny/docs-generator";
import { Navigation as BaseNavigation } from "../5.35.x/navigation";

export const Navigation = () => {
    return (
        <BaseNavigation>
            <NavigationRoot directory={__dirname}>
                {/*<Page file={"./test.mdx"} />*/}
            </NavigationRoot>
        </BaseNavigation>
    );
};
