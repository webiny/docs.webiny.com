---
id: mongodb-atlas
title: Configuring MongoDB Atlas
sidebar_label: Configuring MongoDB Atlas
---

This article will guide you through Configuring MongoDB Atlas. 

If you prefer the Video version, check out our YouTube video below:

[![Configuring MongoDB Atlas](/img/get-started/configuring-mongodb.jpg)](http://www.youtube.com/watch?v=GOMvnI-r2qs "Configuring MongoDB Atlas")

> This guide might look long, but it's gonna take you less than 5 minutes to go through it.

To create a free MongoDB cluster head over to MongoDB Atlas and create an account (no credit card is required). https://www.mongodb.com/cloud/atlas/register

![MongoDB Atlas Register](/img/guides/mongodb-atlas/mongodb-atlas-register.png)

Once your account is created, you'll be presented with an option to create your first cluster. Select the Free option (or paid if that suits you better).

![MongoDB Atlas Select Cluster Type](/img/guides/mongodb-atlas/mongodb-atlas-select-cluster.png)

Afterwards select your cloud provider and region. We recommend to select AWS and the same region where you will deploy your Webiny instance, but this is not a requirement.

Once you are ready, click the create cluster button.

![MongoDB Atlas Create Cluster](/img/guides/mongodb-atlas/mongodb-atlas-create-cluster.png)

When your cluster is deployed it's time to get your MongoDB server connection string. Under the Atlas menu, make sure you're inside the Clusters submenu. There under your cluster click the connect button.

![MongoDB Atlas Cluster Dashboard](/img/guides/mongodb-atlas/mongodb-atlas-cluster-dashboard.png)

This will present a screen with several connection options. But before that you'll need to whitelist an IP to allow Lambda to connect to your cluster. Click the Add a different IP address button and then insert `0.0.0.0/0` in the IP Address space and press Add IP Address.

![MongoDB Atlas Cluster Whitelist IP](/img/guides/mongodb-atlas/mongodb-atlas-whitelist-ip-1.png)

![MongoDB Atlas Cluster Whitelist IP](/img/guides/mongodb-atlas/mongodb-atlas-whitelist-ip-2.png)

> This IP range allows any outside client, given it has the right credentials, to connect to your database. Because Lambda functions are deployed on the "public internet", their IP address changes, so you can't whitelist a specific address, instead you need to allow any IP to connect.

Once you've whitelisted the IP, add a database user. You can add any credentials you want there, just make sure you note the password, you'll need it later.

![MongoDB Atlas Cluster Create User](/img/guides/mongodb-atlas/mongodb-atlas-add-user.png)

Cool, at this point you should have completed both steps and have a dialog looking like the one below. Click the choose a connection method button to proceed to the next step.

![MongoDB Atlas Cluster Connect](/img/guides/mongodb-atlas/mongodb-atlas-connect.png)

Now it's time to select your connection method. For your case select the "Connect Your Application" option.

![MongoDB Atlas Cluster Connection Method](/img/guides/mongodb-atlas/mongodb-atlas-connection-method.png)

This will present you with a connection string. You want to copy that string and replace `<password>` with the password you assigned to your MongoDB user.

![MongoDB Atlas Cluster Connection Method](/img/guides/mongodb-atlas/mongodb-atlas-connection-string.png)

At this point you can close this window and paste the connection string into the `.env.json` file in your webiny project folder. Just make sure you've replaced the `<password>`.