import React from "react";
import { Page, Section, Collapsable, Separator, NavigationRoot } from "@webiny/docs-generator";

export const Navigation = ({ children }) => {
    return (
        <NavigationRoot directory={__dirname} linkPrefix={"user-guides"}>
            <Collapsable title={"Get Started"}>
                <Page link={"overview"} />
            </Collapsable>
            <Separator />
            <Collapsable title={"Headless CMS"}>
                <Section title={"Essentials"}>
                    <Page title={"Glossary"} link={"headless-cms/essentials/glossary"} />
                    <Page link={"headless-cms/essentials/create-content-model"} />
                    <Page link={"headless-cms/essentials/create-content-entry"} />
                    <Page link={"headless-cms/essentials/create-content-model-group"} />
                    <Page link={"headless-cms/essentials/content-entry-revisions"} />
                    <Page link={"headless-cms/essentials/clone-content-model"} />
                    <Page link={"headless-cms/essentials/manage-content-model-settings"} />
                    <Page link={"headless-cms/essentials/add-validator-to-fields"} />
                    <Page link={"headless-cms/essentials/reference-field"} />
                </Section>
                <Section title={"Advanced"}>
                    <Page link={"headless-cms/advanced/content-localization"} />
                    <Page link={"headless-cms/advanced/user-creation"} />
                </Section>
            </Collapsable>
            <Separator />
            <Collapsable title={"Page Builder"}>
                <Section title={"Essentials"}>
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
                </Section>
                <Section title={"Advanced"}>
                    <Page link={"page-builder/advanced/user-creation"} />
                    <Page link={"page-builder/advanced/page-export-import"} />
                    <Page link={"page-builder/advanced/page-localization"} />
                </Section>
            </Collapsable>
            {children}
        </NavigationRoot>
    );
};
