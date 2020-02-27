---
id: security-service
title: Webiny Architecture - Security Service
sidebar_label: Security Service
---

## Security Service Architecture Graph
[![Webiny Serverless CMS - Architecture - Security Service](/img/deep-dive/architecture/webiny-architecture-security-service.png)](/img/deep-dive/architecture/webiny-architecture-security-service.png)

The Security service architecture is used in cases where the client needs to go through an authentication process - i.e. Login form.

## Components
- A - **CloudFront web distribution**
- B - **APIGateway**
- C - **Apollo Gateway service**
- D - **Security service**
- E - **Database**
- F - **Cognito**

## Request Flow

1. Client submits the login form.

2. The request goes to the **(F) Cognito** for the verification of user credentials. 

    > By default Webiny uses Cognito as the user pool and authentication service. In case you want to intergrate any other service, that is possible by creating a new security plugin. Please open an issue on our [GitHub](https://github.com/webiny/webiny-js) and we'll provide you with the steps and required know-how. 

3. If the credentials are valid, **(F) Cognito** returns a Cognito token back to the client.

4. The client then submits the token to the **(D) Security service**. 

5. The **Security service** verifies the Cognito token and check that the user is valid in the **(E) Database**.

6. If the user is valid, a Webiny JWT token is returned back to the client. The client then uses this token on all requests to the Webiny API.


