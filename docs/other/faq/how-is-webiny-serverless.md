---
id: how-is-webiny-serverless
title: How is Webiny serverless?
sidebar_label: How is Webiny serverless?
---

On a few occasions, we received a question in terms of:
> How is Webiny serverless when you use MongoDB as a database?

Or something like:
> You require an always-on database, how is this serverless?

To address the question I've decided to create this article and explain what serverless is and , and how it differs from FaaS (function as a service).

## What is "serverless"?

In a gist, `serverless` is any part of your infrastructure that you don't need to manage. 

It is a "server free" setup. Under that I mean a setup that you don't need to manage or maintain. All you need to do is consume it as a service. 

Serverless is also not one single technology, like compute. Serverless can be an image service, a database, file storage and much more. The moment it's something that you can "just use", it's serverless, in a nutshell. 

> But I thought that serverless scales to zero and I don't need to pay anything if I'm not using it?

True and not true. Certain serverless offerings like compute usually work in that way, but some don't. For example a file storage service you pay per how many files you have stored, regardless if you are using it or not. Similar goes for a database. The pricing model can differ between services. 

## Webiny uses MongoDB, that is not "serverless"

It depends. If you have installed MongoDB on to a server that you manage, it's true, that is not serverless. However, we recommend that you use a managed service, like [MongoDB Atlas](https://www.mongodb.com/cloud/atlas). In that case, MongoDB is a service you consume and don't manage, in that way it becomes "serverless".

## What is "FaaS"?

FaaS stands for function as a service, and it's something different to serverless. It falls in the "serverless" category, but "FaaS" !== "serverless". 

FaaS is a type of serverless compute. It is "stateless", meaning the function instance gets destroyed after it has finished. You cannot persistently store information inside a FaaS function. 

FaaS allows developers to only worry about his code and not the underlying compute infrastructure. 

Webiny is using FaaS functions, like Lambda, to power it's API. 

---

I hope this article clarified what serverless is. How Webiny is actually a serverless CMS when configured correctly, and how serverless is not to be mistaken with FaaS.
