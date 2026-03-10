import React from "react";
import { Group, Page, NavigationRoot, Separator } from "@webiny/docs-generator";

export const Navigation = ({ children }: { children: React.ReactNode }) => {
  return (
    <NavigationRoot directory={__dirname} linkPrefix={"user-guides"}>
      <Group title={"Get Started"} icon={"/docs-menu-icons/get-started.svg"} link={"overview"}>
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
          <Page link={"headless-cms/advanced/import-export-content-models"} />
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

      <Group
        title={"Form Builder"}
        icon={"/docs-menu-icons/form-builder.svg"}
        link={"form-builder/essentials/create-form"}
      >
        <Group title={"Essentials"}>
          <Page link={"form-builder/essentials/create-form"} />
          <Page link={"form-builder/essentials/using-reCAPTCHA-in-form"} />
        </Group>
      </Group>

      <Separator />

      <Group
        title={"File Manager"}
        icon={"/docs-menu-icons/file-manager.svg"}
        link={"file-manager/essentials/upload-file"}
      >
        <Group title={"Essentials"}>
          <Page link={"file-manager/essentials/upload-file"} />
          <Page link={"file-manager/essentials/organizing-files"} />
          <Page link={"file-manager/essentials/tagging-files"} />
          <Page link={"file-manager/essentials/file-aliases"} />
          <Page link={"file-manager/essentials/bulk-actions"} />
        </Group>
      </Group>

      <Separator />

      <Group
        title={"Advanced Publishing Workflow"}
        icon={"/docs-menu-icons/enterprise.svg"}
        link={"apw/essentials/introduction-to-apw"}
      >
        <Group title={"Essentials"}>
          <Page title={"Introduction"} link={"apw/essentials/introduction-to-apw"} />
          <Page
            title={"APW User Guides Outline"}
            link={"apw/essentials/apw-user-guides-outline-users-creation"}
          />
          <Page link={"apw/essentials/define-workflow"} />
          <Page link={"apw/essentials/submit-record-for-review"} />
          <Page link={"apw/essentials/review-record"} />
          <Page link={"apw/essentials/submit-change"} />
          <Page link={"apw/essentials/provide-sign-off"} />
          <Page link={"apw/essentials/scheduled-publishing"} />
        </Group>
      </Group>

      <Separator />

      <Group
        title={"Security"}
        icon={"/docs-menu-icons/wcp.svg"}
        link={"security/essentials/user-creation"}
      >
        <Group title={"Essentials"}>
          <Page link={"security/essentials/user-creation"} />
          <Page link={"security/essentials/role-creation"} />
          <Page link={"security/essentials/assign-role"} />
          <Page link={"security/essentials/team-creation"} />
          <Page link={"security/essentials/assign-team"} />
        </Group>
      </Group>

      {children}
    </NavigationRoot>
  );
};
