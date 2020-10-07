---
id: api
title: API Plugins Reference
sidebar_label: API
---

### [`form-trigger-handler`](/docs/webiny-apps/form-builder/development/plugins-reference/api#form-trigger-handler)

#### Summary

Used to define custom business logic that gets executed upon successful form submission (e.g. send data to a specific e-mail address).

#### Type

```ts
type FbFormTriggerData = { [key: string]: any };
type FbFormSubmissionData = { [key: string]: any };

type FbFormTriggerHandlerParams = {
    formSubmission: { [key: string]: any };
    trigger: FbFormTriggerData;
    data: FbFormSubmissionData;
    form: { [key: string]: any };
};


type FbFormTriggerHandlerPlugin = Plugin & {
    type: "form-trigger-handler";
    trigger: string;
    handle: (args: FbFormTriggerHandlerParams) => Promise<void>;
};
```

#### Example

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

Click [here](https://github.com/webiny/webiny-examples/blob/master/docs.webiny.com/form-builder-custom-api-trigger.ts) to check out the full example.
