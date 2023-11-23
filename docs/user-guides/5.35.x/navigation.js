import React from "react";
import { Page, Group, Separator, NavigationRoot } from "@webiny/docs-generator";

export const Navigation = ({ children }) => {
    return (
        <NavigationRoot directory={__dirname} linkPrefix={"user-guides"}>
            <Group title={"Get Started"}>
                <Page link={"overview"} />
            </Group>
            <Separator />
            <Group title={"Headless CMS"}>
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
                    <Page link={"headless-cms/advanced/content-localization"} />
                    <Page link={"headless-cms/advanced/user-creation"} />
                </Group>
            </Group>
            <Separator />
            <Group title={"Page Builder"}>
                <Group title={"Essentials"}>
                    <Page title={"Glossary"} link={"page-builder/essentials/glossary"} />
                    <Page title={"Overview"} link={"page-builder/essentials/overview"} />
                    <Page
                        title={"Training Course"}
                        link={"page-builder/essentials/training-course"}
                    />
                    <Page link={"page-builder/essentials/create-page"} />
                    <Page link={"page-builder/essentials/create-a-page-block-from-figma-design"} />
                    <Page link={"page-builder/essentials/website-settings"} />
                    <Page link={"page-builder/essentials/seo-and-social-sharing"} />
                    <Page link={"page-builder/essentials/navigation-menu"} />
                    <Page link={"page-builder/essentials/page-revisions"} />
                </Group>
                <Group title={"Advanced"}>
                    <Page link={"page-builder/advanced/user-creation"} />
                    <Page link={"page-builder/advanced/page-export-import"} />
                    <Page link={"page-builder/advanced/page-localization"} />
                </Group>
            </Group>
            {children}
        </NavigationRoot>
    );
};
