---
id: why-not-dynamodb
title: Why MongoDB and not DynamoDB?
sidebar_label: Why MongoDB and not DynamoDB?
---

Webiny suggests you use MongoDB Atlas. It's a managed service so you don't worry about servers, maintenance, and similar overhead. Alternatively, you can also use AWS DocumentDB which is MongoDb-compatible managed database service. 

## But why not DynamoDB?

DynamoDB is a great database, with many amazing features. However, Webiny has one goal that clashes with us being able to use DynamoDB and that is vendor lock-in. 

Webiny aims to support multi-cloud deployments and as such we cannot use a technology that can only be deployed on a single cloud provider. DynamoDB is an example of such technology since it's only available on AWS.

However, we expected those questions and requests to support different types of databases, and because of that reason the code inside Webiny doesn't interact directly with the database driver, instead, there is an abstraction layer. This abstraction layer allows developers to write adapters for other databases without the need to modify any code inside the Webiny core.

So if you want to use DynamoDb, all you need is an adapter for it. This applies to any other database. 

> If you're interested in writing an adapter. Have a look at this [github issue](https://github.com/webiny/webiny-js/issues/575) that provides already some guidelines. And for any other question, just give us a shout by opening a new topic on our repo.