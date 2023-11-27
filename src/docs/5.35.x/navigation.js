import React from "react";
import { Navigation as BaseNavigation } from "../5.34.x/navigation";
import { Page, Section, Collapsable, NavGroup, Separator } from "@/docs/utils/navigation";

export const Navigation = () => {
    return (
        <>
            {/* Inherit navigation from 5.34.x. */}
            <BaseNavigation />
            {/* Add new items. */}
            <NavGroup type={"docs"}>
                <Collapsable title={"Webiny Overview"}>
                    <Section title={"Features"}>
                        <Page link={"overview/features/advanced-content-organization"} after={"CLI"} />
                    </Section>
                </Collapsable>
            </NavGroup>
            <NavGroup type={"user-guides"}>
                <Collapsable title={"Get Started"}>
                    <Page link={"user-guides/overview"} />
                </Collapsable>
                <Separator />
                <Collapsable title={"Headless CMS"}>
                    <Section title={"Essentials"}>
                        <Page title={"Glossary"} link={"user-guides/headless-cms/essentials/glossary"} />
                        <Page link={"user-guides/headless-cms/essentials/create-content-model"} />
                        <Page link={"user-guides/headless-cms/essentials/create-content-entry"} />
                        <Page link={"user-guides/headless-cms/essentials/create-content-model-group"} />
                        <Page link={"user-guides/headless-cms/essentials/content-entry-revisions"} />
                        <Page link={"user-guides/headless-cms/essentials/clone-content-model"} />
                        <Page link={"user-guides/headless-cms/essentials/manage-content-model-settings"} />
                        <Page link={"user-guides/headless-cms/essentials/add-validator-to-fields"} />
                        <Page link={"user-guides/headless-cms/essentials/reference-field"} />
                    </Section>
                    <Section title={"Advanced"}>
                        <Page link={"user-guides/headless-cms/advanced/content-localization"} />
                        <Page link={"user-guides/headless-cms/advanced/user-creation"} />
                    </Section>
                </Collapsable>
                <Separator />
                <Collapsable title={"Page Builder"}>
                    <Section title={"Essentials"}>
                        <Page title={"Glossary"} link={"user-guides/page-builder/essentials/glossary"} />
                        <Page title={"Overview"} link={"user-guides/page-builder/essentials/overview"} />
                        <Page title={"Training Course"} link={"user-guides/page-builder/essentials/training-course"} />
                        <Page link={"user-guides/page-builder/essentials/create-page"} />
                        <Page link={"user-guides/page-builder/essentials/create-a-page-block-from-figma-design"} />
                        <Page link={"user-guides/page-builder/essentials/website-settings"} />
                        <Page link={"user-guides/page-builder/essentials/seo-and-social-sharing"} />
                        <Page link={"user-guides/page-builder/essentials/navigation-menu"} />
                        <Page link={"user-guides/page-builder/essentials/page-revisions"} />
                    </Section>
                    <Section title={"Advanced"}>
                        <Page link={"user-guides/page-builder/advanced/user-creation"} />
                        <Page link={"user-guides/page-builder/advanced/page-export-import"} />
                        <Page link={"user-guides/page-builder/advanced/page-localization"} />
                    </Section>
                </Collapsable>
                <Separator />
                <Collapsable title={"Form Builder"}>
                    <Section title={"Essentials"}>
                        <Page link={"user-guides/form-builder/essentials/create-form"} />
                        <Page link={"user-guides/form-builder/essentials/using-reCAPTCHA-in-form"} />
                    </Section>
                </Collapsable>
            </NavGroup>
        </>
    );
};
