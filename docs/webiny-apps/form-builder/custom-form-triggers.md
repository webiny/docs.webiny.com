---
id: custom-form-triggers
title: Creating Custom Triggers
sidebar_label: Creating Custom Triggers
---

Custom form triggers let you perform custom business logic on a successful form submission, e.g. sending form submission data to an e-mail address of your choice, or maybe sending the data via an HTTP request, issued to your custom API endpoint.

:::info Note
To learn more about built-in triggers and triggers in general, visit the [Triggers](/docs/webiny-apps/form-builder/triggers) article. 
:::

Creating a custom trigger can be achieved by registering a simple `form-trigger-handler` plugin in the Form Builder API. In other words, in the `api/formBuilder/src/index.ts` file. 

Consider the following example: 

```ts
{
  type: "form-trigger-handler",
  trigger: "e-mail",
  async handle({ trigger, data, formSubmission }) {
    const myEmailClient = ...;
    myEmailClient.send(data)
  }
}
```

As we can see, the two properties that need to be defined are `trigger` and `handle`, which, respectively, define the name of the trigger, and  the logic that needs to be executed. In this particular example, we are executing the `send` method on an imaginary e-mail client - `myEmailClient`. 

:::info Note
Click [here](https://github.com/webiny/webiny-examples/blob/master/docs.webiny.com/form-builder-custom-api-trigger.ts) to check out the full example. 
:::


Note that the `handle` callback function can be an async function. Also, there is no limit when it comes to the number of triggers that can be defined.
