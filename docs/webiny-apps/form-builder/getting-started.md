---
id: getting-started
title: Getting Started
sidebar_label: Getting Started
---

In this section we will cover everything you need to know in order to get started with the Form Builder app. We will learn how to create a simple form, publish it, and finally embed it in our pages created with the [Page Builder](/docs/webiny-apps/page-builder/introduction) app.

Form Builder is included by default in every Webiny installation,
so no additional installation steps are required. Just log in into
the Webiny Admin, and from the menu in the left sidebar, click on the Form Builder.

> Don't have Webiny installed? [Follow this article](get-started/quick-start.md)


![Form Builder](/img/webiny-apps/form-builder/getting-started/open-via-sidebar.png)

Once clicked, the first thing you'll see is the list of all previously created forms.
As by default there aren't any, let's go ahead and create our first form. Click on the "plus"
icon in the bottom right corner. You will be prompted to enter a form name, after which you'll be automatically redirected to the form builder.

## Form Builder

There are a couple of important UI sections in the form builder:

![form builder](/img/webiny-apps/form-builder/getting-started/form-builder-ui.png)

#### 1 - Form status and name

This shows the current status of your form and its name. You can click on the name in order to change it.

#### 2 - Fields menu

The fields menu contains all of the fields that can be added to your form. They are organized into field groups, such as the "contact information" group, where each group contains a set of predefined fields. If you need to create a new field from scratch, you can do that with the "custom field", which sits above all field groups.

Fields are added by simply dragging and dropping them in the preferred location in the fields editor. You can add multiple fields in a row, and have as many rows as needed.

Note: additional form fields can be added via plugins (more on this in the following sections).

#### 3 - Fields editor

This is the section of form builder which shows you all of the added fields and allows you to edit them, enables you to preview your form and finally, define triggers (more on this in the following sections).

#### 4 - Form options

A couple of options are available here. The "revisions" dropdown shows you all of the available revisions you've created for this particular form (more on revisions in the following sections). Then, the little cogwheel icon will show you additional options like enabling Google ReCaptcha, terms of service checkbox, switching visual layouts, and more. Finally, the publish button publishes current form revision.

## Publish a simple form and display it in the Page Builder

For starters, add a few fields. You can do that easily by dragging and dropping one or more fields from the "contact information" fields group.

Once you're done, the next step is to publish the form. This will enable us to display it inside of the Page Builder. Use the publish button that's located in the top right Form options section.

Once you've done that, you should be taken back to the forms list.

From there, navigate to the [Page Builder](/docs/webiny-apps/page-builder/introduction) app, and open the page builder by choosing an already existing page or creating a new one.

To include your newly created form, simply find the Form element in the page elements menu, and drag and drop it into the desired place on your page.

![form builder](/img/webiny-apps/form-builder/getting-started/page-builder-embed-form.png)

Once you do that, you will need to chose the form and a revision. For now, just note that forms can have multiple published revisions (versions), and here you can select a specific one or just set it to always use the latest. More information on revisions and publishing can be found [here](/docs/webiny-apps/form-builder/revisions-and-publishing).

![form builder](/img/webiny-apps/form-builder/getting-started/page-builder-choose-form.png)

Click "Save" to confirm you selection, and you're done! You should now see your form on the page.

> If you are a developer, you might want to check out the [`Form` React component](/docs/webiny-apps/form-builder/react-component), which will enable you to show any form via a simple React component.

And that completes this short [Getting Started](/docs/webiny-apps/form-builder/getting-started) guide. Feel free to check out other topics like [Revisions and publishing](/docs/webiny-apps/form-builder/revisions-and-publishing), [Triggers](/docs/webiny-apps/form-builder/triggers), and [Form Builder Settings](<(/docs/webiny-apps/form-builder/settings)>), or if you aren't familiar with the Page Builder yet, you can also visit the [Page Builder](/docs/webiny-apps/page-builder/introduction) documentation.
