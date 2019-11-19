---
id: revisions-and-publishing
title: Revisions and publishing
sidebar_label: Revisions and publishing
---

# Publishing

Each time you create a new form, it'll be created with the default `draft` status. Because of this, you won't be able to immediately show it on your website in any way.

In order to make it work, you need to publish your form, which can be done directly the form builder, or from the forms list.

![Publish the form the page builder](/assets/webiny-apps/form-builder/revisions-and-publishing/form-builder-publish.png)

![Publish the form the forms list](/assets/webiny-apps/form-builder/revisions-and-publishing/forms-list-publish.png)

Once you publish your form, you'll be able to show it either via the provided React components or by embeding it into your pages created via the [Page Builder](/docs/webiny-apps/page-builder/introduction) app.

# Revisions

Pages can have multiple "revisions" (also known as "versions"). 

Every new form starts with the revision `1`. Once you publish it, the revision gets locked, meaning you cannot make any changes to it anymore. The only way to introduce new changes is by creating a new revision. 

Revisions are automatically created when needed. More specifically, if you try to edit an existing published form, the system will automatically create a new revision for you. This will happen for example if you click on the "edit" icon, on a published form:

![Editing an existing published form will create a new revisions](/assets/webiny-apps/form-builder/revisions-and-publishing/edit-form-new-revision.png)

Revision numbers are always whole number, and are incremented by 1 each time a new one is created. For example if your current revision number is `2`, new revision number will be `3`.

# Publishing multiple revisions
Unlike pages created with the [Page Builder](/docs/webiny-apps/page-builder/introduction) app, where you can only have one page published at the same time, you can have multiple forms published at the same time. This can enable you to show different forms to different users, and for example track which form gives better results (provides better conversion). 

More on form and submissions stats can be found [here](/docs/webiny-apps/form-builder/form-stats).
