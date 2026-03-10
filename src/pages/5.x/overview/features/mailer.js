/* @jsxRuntime classic */
/* @jsx mdx */

import React from 'react'
import { mdx } from '@mdx-js/react'

import _Link from 'next/link'
import _Image1 from '/Users/svenalhamad/Dev/docs.webiny.com/docs/developer-docs/5.x/overview/features/assets/mailer-settings.png'
import { Heading as _Heading } from '@/components/Heading'
import {Alert} from "@/components/Alert";
import { Layout as _Layout } from "@/layouts/DocumentationLayout"

import _navigation from "@/data/navigation.0a14da.json";

import _versions from "@/data/versions.778dba.json";

const Layout = _Layout;
const pageData = {
  "title": "Mailer",
  "description": "Overview of the package used to send e-mails.",
  "type": "docs",
  "showPageHeader": true,
  "fullWidth": false,
  "version": "5.x"
};
const docsearch = {
  "type": "docs",
  "weight": 100,
  "versions": ["5.x"]
};
const navigation = _navigation;
const versions = _versions;
const tableOfContents = [{
  "title": "About",
  "slug": "about",
  "children": []
}, {
  "title": "Available Transports",
  "slug": "available-transports",
  "children": [{
    "title": "Dummy Transport",
    "slug": "dummy-transport",
    "children": []
  }, {
    "title": "SMTP Transport",
    "slug": "smtp-transport",
    "children": [{
      "title": "Basic Configuration via Environment Variables",
      "slug": "basic-configuration-via-environment-variables"
    }, {
      "title": "Basic Configuration via Admin UI",
      "slug": "basic-configuration-via-admin-ui"
    }, {
      "title": "Advanced Configuration via Code",
      "slug": "advanced-configuration-via-code"
    }]
  }, {
    "title": "The Default Transport Is Not Working for Me!",
    "slug": "the-default-transport-is-not-working-for-me",
    "children": []
  }]
}, {
  "title": "Custom Transport",
  "slug": "custom-transport",
  "children": []
}, {
  "title": "Usage",
  "slug": "usage",
  "children": []
}];
const makeShortcode = name => function MDXDefaultShortcode(props) {
      console.warn("Component " + name + " was not imported, exported, or provided by MDXProvider as global scope")
      return <div {...props}/>
    };
const Editor = makeShortcode("Editor");
const Image = makeShortcode("Image");
const layoutProps = {
  Layout,
pageData,
docsearch,
navigation,
versions,
tableOfContents
};
const MDXLayout = "wrapper"
export default function MDXContent({
  components,
  ...props
}) {
  return <MDXLayout {...layoutProps} {...props} components={components} mdxType="MDXLayout">




<Alert type="success" title="What You’ll Learn" mdxType="Alert">
<ul>
<li parentName="ul">{`How to use api-mailer to send e-mails`}</li>
<li parentName="ul">{`How to use api-mailer with basic configuration`}</li>
<li parentName="ul">{`How to use api-mailer with advanced configuration`}</li>
</ul>
</Alert>
<_Heading level={2} id={"about"} nextElement={{
      "type": "paragraph"
    }}>About</_Heading>
<p>{`Starting from 5.30.0 version of Webiny we have a mailer package (`}<inlineCode parentName="p">{`@webiny/api-mailer`}</inlineCode>{`) via which you can send e-mails.`}</p>
<p>{`The package uses `}<inlineCode parentName="p">{`transports`}</inlineCode>{` to send e-mails. The `}<inlineCode parentName="p">{`transport`}</inlineCode>{` is an implementation of sending the e-mails, and we have few built-in ones.`}</p>
<_Heading level={2} id={"available-transports"} nextElement={{
      "type": "list",
      "ordered": false,
      "start": null,
      "spread": false
    }}>Available Transports</_Heading>
<ul>
<li parentName="ul">{`Dummy Transport - does not send e-mails, just records them in an array which you can access later`}</li>
<li parentName="ul">{`SMTP Transport - sends e-mails with the use of `}<a parentName="li" {...{
          "href": "https://github.com/nodemailer/nodemailer"
        }}>{`nodemailer`}</a>{` library`}</li>
</ul>
<Alert type="info" title="Our built-in transport is not working for you?" mdxType="Alert">
<p>{`  We provide a default STMP transport, which might not work for you. If that is the case, you can create your own transport.`}</p>
<p>{`  Please check the `}<a parentName="p" {...{
          "href": "#the-default-transport-is-not-working-for-me"
        }}>{`The Default Transport Is Not Working for Me!`}</a>{` section for more information.`}</p>
</Alert>
<_Heading level={3} id={"dummy-transport"} nextElement={{
      "type": "paragraph"
    }}>Dummy Transport</_Heading>
<p>{`A transport which pretends to be sending e-mails.`}</p>
<p>{`It is used for testing and as a backup in case no other transport exists or is not configured.`}</p>
<_Heading level={3} id={"smtp-transport"} nextElement={{
      "type": "paragraph"
    }}>SMTP Transport</_Heading>
<p>{`A transport which sends e-mails via the `}<a parentName="p" {...{
        "href": "https://github.com/nodemailer/nodemailer"
      }}>{`nodemailer`}</a>{` library. It requires credentials to be defined, which we will go through.
If this transport fails to be created, it falls back to the `}<inlineCode parentName="p">{`Dummy Transport`}</inlineCode>{`.`}</p>
<_Heading level={4} id={"basic-configuration-via-environment-variables"} nextElement={{
      "type": "paragraph"
    }}>Basic Configuration via Environment Variables</_Heading>
<p>{`The simplest, and most rudimentary, configuration is done via the environment variables:`}</p>
<Editor title="" lang="dotenv" mdxType="Editor">
{`# required
WEBINY_MAILER_HOST=smtp.webiny.com
WEBINY_MAILER_PORT=25
WEBINY_MAILER_USER=root
WEBINY_MAILER_PASSWORD=password
WEBINY_MAILER_REPLY_TO=reply-to@webiny.com
# optional
WEBINY_MAILER_FROM=mailing-list@webiny.com`}
</Editor>
<p>{`Variables `}<inlineCode parentName="p">{`WEBINY_MAILER_HOST`}</inlineCode>{`, `}<inlineCode parentName="p">{`WEBINY_MAILER_USER`}</inlineCode>{`, `}<inlineCode parentName="p">{`WEBINY_MAILER_PASSWORD`}</inlineCode>{` and `}<inlineCode parentName="p">{`WEBINY_MAILER_REPLY_TO`}</inlineCode>{` `}<strong parentName="p">{`must`}</strong>{` be defined for SMTP Transport to work.`}</p>
<p>{`The `}<inlineCode parentName="p">{`WEBINY_MAILER_FROM`}</inlineCode>{` variable is an optional one.`}</p>
<p>{`When applying the variables we run them through the validation process, so if any are invalid (for example, you do not put e-mail in `}<inlineCode parentName="p">{`WEBINY_MAILER_FROM`}</inlineCode>{`), the creation process of the transport will fail.`}</p>
<Alert type="info" mdxType="Alert">
  When configuring transport via the environment variables, that configuration is used for all
  tenants in the system.
</Alert>
<_Heading level={4} id={"basic-configuration-via-admin-ui"} nextElement={{
      "type": "paragraph"
    }}>Basic Configuration via Admin UI</_Heading>
<p>{`Configuring `}<inlineCode parentName="p">{`SMTP Transport`}</inlineCode>{` via the UI is the easiest way to configure the transport.`}</p>
<p>{`The “downside” is that, in multi-tenancy systems, you need to store configuration for each tenant.
If you do not want to do that, use the configuration via environment variables.`}</p>
<Image src={_Image1} alt={"Mailer Settings"} mdxType="Image" />
<Alert type="warning" mdxType="Alert">
<p>{`Configuration via the UI is not available until you have the `}<inlineCode parentName="p">{`WEBINY_MAILER_PASSWORD_SECRET`}</inlineCode>{` environment variable set.
Since we are storing the password in the database, we need to encrypt it. The `}<inlineCode parentName="p">{`WEBINY_MAILER_PASSWORD_SECRET`}</inlineCode>{` is used as a secret in the `}<inlineCode parentName="p">{`crypto-js`}</inlineCode>{` library’s AES algorithm.`}</p>
</Alert>
<_Heading level={4} id={"advanced-configuration-via-code"} nextElement={{
      "type": "paragraph"
    }}>Advanced Configuration via Code</_Heading>
<p>{`The advanced configuration is done by creating your own SMTP Transport with custom config. You can use our `}<inlineCode parentName="p">{`createSmtpMailer`}</inlineCode>{` method, you just need to pass the custom configuration.`}</p>
<Editor title="" lang="typescript" mdxType="Editor">
{`import { createTransport, createSmtpTransport } from "@webiny/api-mailer";

const transport = createTransport(async ({ settings, context }) => {
  return createSmtpTransport({
    ...settings,
    host: "my.changed.host",
    headers: {
      ["my-header"]: "value"
    }
    // ... or what ever you want to change in the SMTP Transport
  });
});

// register in your handler

const handler = createHandler({
  plugins: [
    // existing plugins
    transport
  ]
});`}
</Editor>
<p>{`When creating the transport via `}<inlineCode parentName="p">{`createTransport`}</inlineCode>{`, you will get the `}<inlineCode parentName="p">{`settings`}</inlineCode>{` and the `}<inlineCode parentName="p">{`context`}</inlineCode>{` variables. The `}<inlineCode parentName="p">{`settings`}</inlineCode>{` variable contains whatever was defined in either environment variables or the values which were stored via the Mailer Settings UI.`}</p>
<_Heading level={3} id={"the-default-transport-is-not-working-for-me"} nextElement={{
      "type": "paragraph"
    }}>The Default Transport Is Not Working for Me!</_Heading>
<p>{`If the default transport is not working for you, you can create your own transport.`}</p>
<p>{`We cannot implement all the possible services and providers, so we provide our users with the ability to create their own transports.`}</p>
<p>{`Please read the `}<a parentName="p" {...{
        "href": "#custom-transport"
      }}>{`Custom Transport`}</a>{` section for more information.`}</p>
<_Heading level={2} id={"custom-transport"} nextElement={{
      "type": "paragraph"
    }}>Custom Transport</_Heading>
<p>{`You can create your own transport if you do not like ours. You just need to use the `}<inlineCode parentName="p">{`createTransport`}</inlineCode>{` method which returns the transport.`}</p>
<Editor title="" lang="typescript" mdxType="Editor">
{`import { createTransport } from "@webiny/api-mailer";

const transport = createTransport(async params => {
    const { context, settings } = params;

    if (!settings?.user || !settings?.password) {
        throw new Error("There are no username and password in the settings. This will not work.");
    }
    
    const myCustomSender = initializeYourCustomSender();

    return {
        name: "webiny.mailer.myCustomTransport",
        send: async data => {
            try {
                const result = await myCustomSender({
                    ...data,
                    envelope: {
                        user: settings.user,
                        pass: settings.password
                    }
                });
                return {
                    result,
                    error: null,
                };
            } catch (ex) {
                return {
                    result: null,
                    error: ex
                };
            }
        }
    };
});


// register in your handler

const handler = createHandler({
  plugins: [
    // existing plugins
    transport
  ]
});`}
</Editor>
<p>{`Make sure that your transport is at the end of the plugins list, as it will then override our default transport.`}</p>
<_Heading level={2} id={"usage"} nextElement={{
      "type": "paragraph"
    }}>Usage</_Heading>
<p>{`For example, let’s say you want to send an e-mail when user creates an entry in the `}<inlineCode parentName="p">{`Person`}</inlineCode>{` model.
You would want to subscribe to the `}<inlineCode parentName="p">{`onEntryAfterCreate`}</inlineCode>{` event and send an e-mail only when added entry to that certain model.`}</p>
<Editor title="" lang="typescript" mdxType="Editor">
{`const plugin = new ContextPlugin<MailerContext>(async context => {
  context.cms.onEntryAfterCreate.subscribe(async ({ entry, model }) => {
    if (model.modelId !== "person") {
      return;
    }
    try {
      const response = await context.mailer.sendMail({
        to: ["me@test.local"],
        from: "webiny@test.local",
        subject: \`A new entry in the \${model.name} model was created\`,
        text: \`A new entry in the \${model.name} was created. ID of the entry is \${entry.id}\`,
        html: \`<h2>A new entry in the \${model.name}</h2>
                  <p>Entry ID is \${entry.id}, url is \${createEntryUrl(entry)}</p>\`
      });
      if (response.result) {
        return;
      } else if (!response.error) {
        console.log("E-mail was not sent, but there is no error in the response.");
        return;
      }
      console.log(response.error);
    } catch (ex) {
      console.log(ex.message);
    }
  });
});`}
</Editor>
{/* ================== AUTO-GENERATED ================== */}
{/* Add page layout to use with React. */}



{/* Add page data export. It will be attached to "layoutProps" by mdx-loader. */}

{/* Add Algolia data. */}








    </MDXLayout>;
}
;
MDXContent.isMDXComponent = true;
MDXContent.layoutProps = layoutProps;