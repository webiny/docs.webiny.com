---
id: environments
title: Environments
sidebar_label: Environments
---

Environments are a powerful feature in Webiny Headless CMS.
Creating a new environment copies all the data and the models from the current environment.

This allows you to make changes and prepare new content in the background. When serving production content without interruption.

Environments allow you to create different content pools. They are particularly useful when separating `production`, `staging`, and `development` environment. They never share data after creation, so make sure you always stick to the same environment.

In the Headless CMS menu, you can create a new environment by clicking on the `Manage Environments` button seen in the image below:

![Change Environments](/img/webiny-apps/headless-cms/features/environments/change-env.png)

When you create a new environment you will choose the base environment. In this case is `production` or another environment you created earlier.

If you have `production` and `stage` and want to create a `dev` environment, you can select `stage` as your source.

![Add New Environments](/img/webiny-apps/headless-cms/features/environments/new-env.png)

The environments include all the Headless CMS features. They are `content models`, `localization`, `roles&permissions`,  and `content model menus`.

These features can change per environment, including `production`, the data in other envs stays the same that means it is not affected.