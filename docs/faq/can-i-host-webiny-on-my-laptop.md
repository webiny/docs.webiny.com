---
id: can-i-host-webiny-on-my-laptop
title: Can I host Webiny on my laptop?
sidebar_label: Can I host Webiny on my laptop?
---

Yes, you can. 

You need a MongoDB instance in order to run Webiny. Our developers generally use the free [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) instance in order to host it, but you are free to host your database on your own laptop.

All AWS Lambda functions, however, must still be deployed on Amazon's servers. 

## Hosting MongoDB locally

Download the [MongoDB installer](https://www.mongodb.com/try/download/community) associated with your Platform and install MongoDB. There are installers available for a wide variety of platforms.

After installing it succesfully, a MongoDB instance will be running on your laptop on the default port `27017`. The connection string will thus be `mongodb://localhost:27017` .

Update `MONGODB_SERVER` in `.env.json` inside your Webiny project's root with the connection string aforementioned. 

You are now able will be able to run your application using your newly self-hosted database on your own laptop.