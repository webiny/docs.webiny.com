---
id: registering-menu
title: Registering menu
sidebar_label: Registering menu
---

## Menu setup

To add a new menu you will need to register it as a plugin in `examples/apps/admin/src/plugins/index.js`.

First of all import react at the top of your project.

```javascript
import React from "react";
```

After that you can get back to actual menu registration.
There are different options how to actually register the menu. In this article we will follow the quicker one.

```javascript
  {
        type: "menu",
        name: "menu-test",
        render({ Menu, Section, Item }) {
            return (
                <Menu name="menutest" label={"MenuTest"}>
                    <Section label={"Menu test"}>
                        <Item label={"Menu test"} path="/newMenu/test" />
                    </Section>
                </Menu>
            );
        }
    }
```

You should add code above to your `examples/apps/admin/src/plugins/index.js` plugins array as shown on screen below.

![Code](/img/webiny-apps/menu-registration/menu-registration.png)

After doing this steps you should have your menu up when you rebuild your project.

![Menu Registration](/img/webiny-apps/menu-registration/menu-example.png)

Also, after menu is registrated successfuly you will need to register the actual route for it. You can find how to do that in [this article](/docs/webiny-apps/routes-registration/registering-routes).

P.S For another method of adding menu in cleaner way see the [Registering routes](/docs/webiny-apps/routes-registration/registering-routes) article.
