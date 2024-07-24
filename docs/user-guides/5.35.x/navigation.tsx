import React from "react";
import { Group, Page, NavigationRoot, Separator } from "@webiny/docs-generator";

export const Navigation = ({ children }: { children: React.ReactNode }) => {
  return (
    <NavigationRoot directory={__dirname} linkPrefix={"user-guides"}>
      <Group
        title={"Get Started"}
        icon={"/docs-menu-icons/get-started.svg"}
        link={"overview"}
        >
        <Page link={"overview"} />
      </Group>
      <Separator />
      <Group
        title={"Headless CMS"}
        icon={"/docs-menu-icons/headless-cms.svg"}
        link={"headless-cms/essentials/glossary"}
        >
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
      <Group
        title={"Page Builder"}
        icon={"/docs-menu-icons/page-builder.svg"}
        link={"page-builder/essentials/glossary"}
      >
        <Group title={"Essentials"}>
          <Page title={"Glossary"} link={"page-builder/essentials/glossary"} />
          <Page title={"Overview"} link={"page-builder/essentials/overview"} />
          <Page title={"Training Course"} link={"page-builder/essentials/training-course"} />
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
      <Separator />
      <Group title={"Form Builder"}
        icon={"/docs-menu-icons/form-builder.svg"}
        link={"form-builder/essentials/create-form"}
        >
        <Group title={"Essentials"}>
          <Page link={"form-builder/essentials/create-form"} />
          <Page link={"form-builder/essentials/using-reCAPTCHA-in-form"} />
        </Group>
      </Group>
      {children}
    </NavigationRoot>
  );
};
