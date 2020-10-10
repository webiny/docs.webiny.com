---
id: form-fields
title: Webiny Form Builder - Form Fields
sidebar_label: Form Fields
---

Every form consists of fields, for example inputs, text areas, radio buttons, checkboxes and so on. You place these on a form in order to gather any type of information you might need for your particular case. You might want to ask your site visitors to enter their first and last name, e-mail address, phone number, job title, and similar.

Form builder lets you easily add any number of fields to your form. Once the form builder is opened, all the available fields can be found in the left menu:

![Fields menu.](/img/webiny-apps/form-builder/form-fields/fields-menu.png)

Fields are organized into groups which can contain one or more predefined fields. For example, "Contact Information" field group contains frequently used fields used to gather your site visitor's personal information. This can speed up your form creation process because you won't have to create each field from scratch. But you can still do it, by choosing the "Custom Field" option.

> If you are a developer and want to create additional field groups and field types, you can visit [this](/docs/webiny-apps/form-builder/creating-new-form-fields) section.

# Adding fields

To add a field to your form, simply drag and drop it to the form editor area, located in the center of the screen (note the placeholder with the _Drop your first field here_ message, shown in the screenshot in the previous section).

![Add fields by dragging and dropping it onto the form editor section.](/img/webiny-apps/form-builder/form-fields/add-field.png)

Form fields are placed into rows, in which you can have a maximum of four fields. To make it a bit easier, while you're dragging a field, you will see green helper bars that will show you where the field can be dropped. You can drop it in a new row, above or below an existing row, or into an existing one, left or right from the existing field.

### Adding custom fields

As previously shown, when adding new fields, you can either choose one of the predefined fields (e.g. from the "Contact Information" fields category) or create a new one from scratch by choosing the "Custom Field" option.

Let's take a look what happens when you drop a custom field.

When you drop a custom field, you will be immediately asked to choose the type of the field you want to add:

![Select a field type.](/img/webiny-apps/form-builder/form-fields/field-settings-field-types.png)

For this example, we'll choose the "Radio" field, which will enable the site visitor to select one of the provided options.

Once selected, in the next screen, you can specify field's general settings and validators:

![Field's general settings.](/img/webiny-apps/form-builder/form-fields/field-settings-general.png)

Every field has a few basic settings, like for example "Label", "Field ID", and "Help text". But, depending on the chosen field type, there may be additional ones. A good example is the chosen Radio field, which has the "Options" section that enables us to define all the available options that will be presented to the site visitor.

If we look at the above screenshot, we can see we created a new Radio field, with a label "Your favorite animal?", and we offered three options to choose from: "Dog", "Cat", and "Parrot".

Once you're done with setting up the general settings, you can also set up field validators.

Validators, simply put, let you validate user's input. You might require site visitor to enter an e-mail address, so you want to make sure that the actual value that was entered is an actual e-mail address.

You can do all kinds of validations, for example make the field required, restrict the length of the input, set the minimum and maximum number that can be entered, and so on. Some validators are also specific to the field type, meaning, a specific validator that's offered for one field type, might not be available on the other field type.

For this particular case, we can set if the field is required or not. Once we enable it, we can also change the default message that will be shown to the site visitor, if nothing was selected before submitting the actual form.

![Field's validators settings.](/img/webiny-apps/form-builder/form-fields/field-settings-validators.png)

If we save our field settings and take a look at the form preview, we can see how our radio field looks like:

![Created Radio field.](/img/webiny-apps/form-builder/form-fields/field-preview.png)

And this is basically all you need to know about adding field and fields customization. In order to add new fields to your form, you can just repeat the same process we've just shown.

From here, the next logical step would be to [publish](/docs/webiny-apps/form-builder/revisions-and-publishing) your form and show it on your website [using Page Builder](docs/webiny-apps/form-builder/embed-forms-via-page-builder), or if you are a developer and need a bit more control, using the provided [React Component](/docs/webiny-apps/form-builder/react-component).
