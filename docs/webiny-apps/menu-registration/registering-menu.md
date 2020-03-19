---
id: registering-menu
title: Registering menu
sidebar_label: Registering menu
---

## Menu setup

To add a new menu you will need to register it as a plugin.

After that you can get back to actual menu registration.
There are different options how to actually register the menu. In this article we will follow the quicker one.

Note that the plugin is defined once, but must be registered both in your Admin and website apps.
> By default, all of the Admin and website plugins are registered in `apps/admin/src/plugins/index.js` and `apps/site/src/plugins/index.js`, respectively.

The following snippet of code shows how to add a new menu via a simple plugin:

```javascript
   {
        type: "menu",
        name: "billing-menu",
        render({ Menu, Section, Item }) {
            return (
                <Menu name="billing-menu" label={"Billings Menu"}>
                    <Section label={"Billings"}>
                        <Item label={"Billings"} path="/billing-menu/billing"/>
                    </Section>
                </Menu>
            );
        }
    },
```

You should add code above to your plugins array as you can see on example below.

```javascript

import { fileUploadPlugin, imagePlugin } from "@webiny/app/plugins";
import adminPlugins from "@webiny/app-admin/plugins";
import i18nPlugins from "@webiny/app-i18n/admin/plugins";
import securityPlugins from "@webiny/app-security/admin/plugins";
import pageBuilderPlugins from "@webiny/app-page-builder/admin/plugins";
import pageBuilderTheme from "@webiny/app-page-builder-theme";
import formBuilderPlugins from "@webiny/app-form-builder/admin/plugins";
import formBuilderPageBuilderPlugins from "@webiny/app-form-builder/page-builder/admin/plugins";
import formBuilderTheme from "@webiny/app-form-builder-theme";
import cookiePolicyPlugins from "@webiny/app-cookie-policy/admin";
import googleTagManagerPlugins from "@webiny/app-google-tag-manager/admin";
import typeformPlugins from "@webiny/app-typeform/admin";
import mailchimpPlugins from "@webiny/app-mailchimp/admin";
import cognito from "@webiny/app-plugin-security-cognito";
import cognitoTheme from "@webiny/app-plugin-security-cognito-theme/admin";

// Add react as import dependency
import React from "react";

const plugins = [
    // One of the options of adding new menus
 {
        type: "menu",
        name: "billing-menu",
        render({ Menu, Section, Item }) {
            return (
                <Menu name="billing-menu" label={"Billings Menu"}>
                    <Section label={"Billings"}>
                        <Item label={"Billings"} path="/billing-menu/billing"/>
                    </Section>
                </Menu>
            );
        }
    },
    fileUploadPlugin(),
    imagePlugin,
    adminPlugins,
    i18nPlugins,
    securityPlugins,
    pageBuilderPlugins,
    pageBuilderTheme(),
    formBuilderPlugins,
    formBuilderPageBuilderPlugins,
    formBuilderTheme(),
    cookiePolicyPlugins,
    googleTagManagerPlugins,
    typeformPlugins,
    mailchimpPlugins,
    cognito({
        region: process.env.REACT_APP_USER_POOL_REGION,
        userPoolId: process.env.REACT_APP_USER_POOL_ID,
        userPoolWebClientId: process.env.REACT_APP_USER_POOL_WEB_CLIENT_ID
    }),
    cognitoTheme()
];

export default plugins;
```

After doing this steps you should have your menu up when you rebuild your project.

![Menu Registration](/img/webiny-apps/menu-registration/menu-example.png)

Also, after menu is registrated successfuly you will need to register the actual route for it. You can find how to do that in [this article](/docs/webiny-apps/routes-registration/registering-routes).

P.S For another method of adding menu in another way see the [Registering routes](/docs/webiny-apps/routes-registration/registering-routes) article.
