---
id: environments
title: Environments
sidebar_label: Environments
---

Environments are a powerful feature in Webiny Headless CMS.
Creating a new env (Environment) copies all the data and the models from the current env.

This allows you to make changes and prepare new content in the background. When serving production content without interruption.

Env allow you to create different content pools. They are particularly useful when separating `production`, `staging`, and `development` env. They never share data after creation, so make sure you always stick to the same environment.

In the Headless CMS menu, you can create a new environment by clicking on the `Manage Environments` button seen in the image below:

![Change Environments](/img/webiny-apps/headless-cms/features/environments/change-env.png)

You can create a new env and choose the base env which in this case is `production` env, or other env you created earlier.

If you have `production` and `stage`, and want to create a `dev` you can select `stage` as your source.

![Add New Environments](/img/webiny-apps/headless-cms/features/environments/new-env.png)

Env includes the Headless CMS features such as `content models`, `localization`, `roles&permissions`, `content model menus`.

These features can change per env, including `production`, the data in other envs stays the same that means it is not affected.