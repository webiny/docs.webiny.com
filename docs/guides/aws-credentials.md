---
id: aws-credentials
title: Configuring AWS Credentials
sidebar_label: Configuring AWS Credentials
---

This article will guide you through Configuring AWS Credentials. 

If you prefer the Video version, check out our YouTube video below:

[![Configuring AWS Credentials](/img/get-started/configuring-aws-credentials.jpg)](http://www.youtube.com/watch?v=qmtDRmplMG4 "Configuring AWS Credentials")

To create your AWS account and set up your IAM credentials we should first navigate [here](https://aws.amazon.com/console/):

![aws-sign-in](/img/guides/aws-iam/aws-sign-in.png)

Next we click on Create a new AWS account:

![aws-login](/img/guides/aws-iam/aws-login.png)

Afterwards we will input our credentials and create our account:

![aws-register](/img/guides/aws-iam/aws-register.png)

Once we are registered, we will login and head to the AWS Management Console and Select **IAM** under **Security, Identity & Compliance**:

![aws-iam-selection](/img/guides/aws-iam/aws-iam-selection.png)

Once we click on **IAM** let's select **Users** under **Access Management**:

![aws-iam-users](/img/guides/aws-iam/aws-iam-users.png)

Then we'll click on **Add user** to create the account with the IAM credentials:

![aws-create-user](/img/guides/aws-iam/aws-create-user.png)

We'll see a 5 step process, and the first is to create a User name for the credentials, and we will select the **Programmatic access** checkbox:

![aws-user-details](/img/guides/aws-iam/aws-user-details.png)

Next we'll Select **Attach existing Policies** from the three Options at the top of the screen and will check the **AdministratorAccess** checkbox. We'll then click **Next:Tags**:

![aws-user-permissions](/img/guides/aws-iam/aws-user-permissions.png)

We can just skip this step, and click **Next:Review**:

![aws-user-tags](/img/guides/aws-iam/aws-user-tags.png)

After all the steps are complete, we will see a Review page, make sure your page looks something similar to this, and then click **Create user**:

![aws-user-review](/img/guides/aws-iam/aws-user-review.png)

Lastly, you will receive a Success message where you will see your **Access key ID** and **secret access key**. You need to copy these strings and keep them safe somewhere for your use when creating projects with Webiny.

![aws-user-created](/img/guides/aws-iam/aws-user-created.png)

Now that we have the **Access key ID** and **secret access key** we can put them in `~/.aws/credentials`. It should look something like this:

![aws-credentials](/img/guides/aws-iam/aws-credentials.png)

And that's it! You now have your AWS credentials, happy coding!