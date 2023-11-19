import React from "react";
import { Navigation as BaseNavigation } from "../5.36.x/navigation";
import { Page, Section, Collapsable, NavigationRoot } from "@webiny/docs-generator";

export const Navigation = () => {
    return (
        <NavigationRoot directory={__dirname}>
            {/* Inherit navigation from 5.36.x. */}
            <BaseNavigation />
            {/* Add new items. */}
            <Collapsable title={"Headless CMS"}>
                <Section title={"Extending functionality"}>
                    <Page
                        link={"headless-cms/extending/customize-entry-list-filters"}
                        after={"headless-cms/extending/custom-field-type"}
                    />
                    <Page
                        link={"headless-cms/extending/customize-entry-editor-actions"}
                        after={"headless-cms/extending/customize-entry-list-filters"}
                    />
                    <Page link={"headless-cms/extending/render-rich-text-content"} remove />
                </Section>
                <Section title={"Integrations"}>
                    <Page link={"headless-cms/integrations/legacy-render-rich-text-content"} />
                    <Page link={"headless-cms/integrations/render-lexical-rich-text-content"} />
                </Section>
            </Collapsable>
            <Collapsable title={"File Manager"}>
                <Section title={"Extending functionality"}>
                    <Page link={"file-manager/extending/customize-file-filters"} />
                    <Page link={"file-manager/extending/customize-file-fields"} />
                    <Page link={"file-manager/extending/customize-file-key"} />
                </Section>
            </Collapsable>
            <Collapsable title={"Page Builder"}>
                <Section title={"Extending functionality"}>
                    <Page
                        link={"page-builder/extending/lexical-editor"}
                        after={"page-builder/extending/extend-page-settings"}
                    />
                </Section>
            </Collapsable>
            <Collapsable title={"Webiny Enterprise"}>
                <Page link={"enterprise/teams"} />
            </Collapsable>
        </NavigationRoot>
    );
};
