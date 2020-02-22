---
id: revisions-and-publishing
title: Webiny Page Builder - Revisions and Publishing
sidebar_label: Revisions and Publishing
---

# Publishing

Each time you create a new page, it'll be created with the default `draft` status. Because of this, you won't be able to immediately show it on your website in any way.

In order to make it work, you need to publish your page, which can be done directly the page builder, or from the pages list.

<!-- TODO: ADD IMAGES  -->

Once you publish your page, you'll be able to show it on your website.

# Revisions

Pages can have multiple "revisions" (also known as "versions").

Every new page starts with the revision `1`. Once you publish it, the revision gets locked, meaning you cannot make any changes to it anymore. The only way to introduce new changes is by creating a new revision.

Revisions are automatically created when needed. More specifically, if you try to edit an existing published page, the system will automatically create a new revision for you. This will happen for example if you click on the "edit" icon, on a published page:

<!-- TODO: ADD IMAGES  -->

Revision numbers are always whole number, and are incremented by 1 each time a new one is created. For example if your current revision number is `2`, new revision number will be `3`.

# Publishing multiple revisions

Unlike forms created with the [Form Builder](/docs/webiny-apps/form-builder/introduction) app, where you can have multiple forms published at the same time, you can have only one page published at the same time.
