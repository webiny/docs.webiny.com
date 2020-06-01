---
id: environments
title: Environments
sidebar_label: Environments
---

Environments are a powerful feature in Webiny Headless CMS. Creating a new environment copies all the data and all the models from the current environment. This allows you to make changes and prepare new content in the background, while still serving production content without interruption.

Environments allow you to create different content pools. They are particularly useful when separating `production`, `staging`, and `development` environments. They never share data after creation, so make sure you always stick to the same environment.

In the Headless CMS menu, you can create a new environment by clicking on the `Change environment` button shown in the image below:

![Change Environments](/img/webiny-apps/headless-cms/features/environments/change-env.png)


![Add New Environments](/img/webiny-apps/headless-cms/features/environments/new-env.png)

When creating new environments you can choose the base `production` environment or any other environment you created earlier.
So, technically if you have `prod` and `stage`, and want to create a `dev` you can select `stage` as your source.

Environments include all the Headless CMS features such as content models, localization, roles & permissions, content model menus.

These features can be changed per environment, including `production`, the data in other environments stays the same that means it is not affected.

Note: ?Prepare a note for the production environment? Ask the team?