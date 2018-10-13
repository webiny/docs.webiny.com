---
id: get-started-point-your-domain-to-webiny
title: Point your domain to Webiny
sidebar_label: Point your domain to Webiny
---

To connect your custom domain, login to Site Manager, click the "Connect your domain name" button. You'll find it on the right hand side below the usage stats.

You'll be presented with a CNAME record.

> **What is a: CNAME** Every website needs to be hosted on a certain infrastructure. The way you say that www.example.com should be served from Webiny's infrastructure is via CNAME.

Now that you have a CNAME, you need to:

1. Access your DNS registrar (place where you manage your domains).
2. Go to the DNS management page.
3. Find your CNAME record. For example "www". If it doesn't exist, you can just create one.

| Host Name or Alias | Value \*              | TTL                                              |
| ------------------ | --------------------- | ------------------------------------------------ |
| www                | example.z1.webiny.com | Set the TTL to 3600, or leave the default value. |

> **Note:** \*Record value is the CNAME value you got from your Site Manager dashboard.

> **Note:** In certain cases, it might take up to 72h before the changes are reflected.

#### Accessing your site

Once the domain name is propagated, you'll be able to view your new website with SSL via your custom domain name. If you want to access the administration, you can do that via Site Manager, or navigating to https://my-custom-domain.com/admin.

#### Additional help

Here are some additional guides for specific DNS registrars that might help you with configuring your CNAME record:

1. [1and1 Web Hosting](https://www.1and1.com/help/domains/configuring-cname-records-for-subdomains/configuring-a-cname-for-an-existing-subdomain/)
2. [Bluehost](https://my.bluehost.com/cgi/help/559#modify)
3. [GoDaddy](https://ca.godaddy.com/help/add-a-cname-record-19236?)
4. [Namecheap](https://www.namecheap.com/support/knowledgebase/article.aspx/9646)
5. [Network Solutions](http://www.networksolutions.com/support/cname-records-host-aliases/)
