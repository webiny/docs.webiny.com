---
id: headless-angular-tutorial
title: Creating a blog with Headless CMS + Angular
sidebar_label: Creating a blog with Headless CMS + Angular
---

In this short tutorial, we will learn how to use the popular [Angular](https://angular.io/) () with the [Webiny Headless CMS](/docs/webiny-apps/headless-cms/features/content-modeling).

> All of the code shown in this tutorial is also hosted in our [GitHub Examples](https://github.com/webiny/webiny-examples/blob/master/headlesscms-angular) repository.

## Prerequisites

##### 1. A Webiny Project

First of all, make sure you have a working [Webiny project](/docs/get-started/quick-start) set up.

> When setting up a new project, currently, there are [two project templates](/docs/get-started/quick-start#3-template-specific-setup) you can choose from: `full` and `cms`. Both include the Headless CMS app by default.

##### 2. Content Delivery API URL

The Headless CMS app exposes data via the Content Delivery API, which is a simple GraphQL API that dynamically updates its schema on content model changes that you make.
Once you've deployed your API stack (using the `yarn webiny deploy api` command), you should be able to find the Content Delivery API URL in the console output:

![Headless CMS API URLs](/img/guides/headless-vuejs-tutorial/headless-cms-api-url.jpg)

##### 3. Content Delivery API Access Token

In order to access the data via the Content Delivery API, we'll need a valid [Access Token](/docs/webiny-apps/headless-cms/features/access-tokens). These can be created via the Access Tokens form, which you can reach via the main menu:

![Headless CMS API Access Tokens](/img/guides/headless-angular-tutorial/access-tokens-menu.png)

Create a new token and make sure to copy the actual token string. We'll need it soon.

![Headless CMS API Access Tokens](/img/guides/headless-angular-tutorial/access-tokens-form.png)

## Creating our first content model

Now that we have all of the prerequisites out of the way, it's time to create our first [content model](/docs/webiny-apps/headless-cms/features/content-modeling). Let's open the **Models** section of the Headless CMS app.

![The Models View](/img/guides/headless-angular-tutorial/content-models-menu.png)

Let's create a new content model named **Blog Post**. Click on the "plus" icon in the lower right corner of the screen and in the dialog that's about to be shown, enter the following:

![New Content Mode Dialogl](/img/guides/headless-angular-tutorial/new-content-model-dialog.png)

For the content model group, we'll use the `Ungrouped`, which is the default group that comes out of the box with every Headless CMS app installation.

> Content model groups give you a way to organize the content models inside the main menu, allowing you to build logical sections for your content editors. You can click [here](/docs/webiny-apps/headless-cms/features/content-modeling-groups) to learn more.

Once we've submitted the form in the dialog, we should be redirected to the [Content Model Editor](/docs/webiny-apps/headless-cms/features/content-modeling). Let's add five fields: `title` as a `Text`,
`author` as `Text`, `description` as a `Long Text`, `Topic` as a `Text`, and `Url` as `Text` field. They will match every blog's title, author, description, topic and url, respectively.

<!---
Optionally, it is possible make both of the fields **required** in the `Validators` tab.
-->

![Blog Post Model](/img/guides/headless-angular-tutorial/editor-blog-model.png)

Save the changes by clicking on the **Save** button in the top right corner of the screen.

Now it's time to create the actual content. Proceed by clicking on the **View content** button, located on the left side of the **Save** button.

You can also reach the content area by clicking on the newly added **Blog Post** item in the main menu:

![Fact Model - Main Menu](/img/guides/headless-angular-tutorial/blog-in-menu.png)

## Managing Content

As mentioned, navigate to **Headless CMS > Ungrouped > Blog Post** and create couple of blog posts. Feel free to unleash your creativity. 😉

![Blog Post Form](/img/guides/headless-angular-tutorial/blog-post-form.png)

Once you feel happy with the facts, you can save the changes by clicking the **Save** button, located at the bottom of the form.

The next and final step is to publish the blog post, which will make it actually visible in the Content Delivery API. To do that, click on the **Publish** icon, found at the right side in the form header.

Now that we've covered the basics of creating content models and managing content, we can move on to the Angular part of this tutorial.

## Creating a new Angular app

We can create a [new Angular app](https://cli.angular.io/) by running this command.
```
ng new <project-name>
```
For this example we'll use `Webiny-Blog` as the project name. 
Angular provides you with a routing preset option, you are going to answer `y/N`, and select the `stylesheet format`.

![Creating a New Angular App - routing](/img/guides/headless-angular-tutorial/ng-new-routing.png)

![Creating a New Angular App - stylesheet](/img/guides/headless-angular-tutorial/ng-new-stylesheet-css.png)

> Ideally, you should create your Angular project in a folder outside of the Webiny project.

Now that we have a new Angular app ready to go, let's see what it takes to make a simple page that renders a list of all blog posts that we've just created.

## Fetching Blog Posts

We're going to start off by installing few NPM packages:
- [`apollo-client`]() Where the magic happens
- [`apollo-angular`]() Bridge between Angular and Apollo Client
- [`apollo-cache-inmemory`]() Our recommended cache
- [`apollo-angular-link-http`]() An Apollo Link for remote data fetching
- [`graphql`]() Second most important package
- [`graphql-tag`]() Parses your strings to GraphQL documents

These will help us with fetching the actual content from the Content Delivery API.

In your Angular project root, run the following command:

```
npm install --save apollo-angular \
  apollo-angular-link-http \
  apollo-link \
  apollo-client \
  apollo-cache-inmemory \
  graphql-tag \
  graphql
```

Once we have these ready, we can jump to the code. The following snippet shows the code located in the [`apolloClient.js`]() file:

```ts
import { HttpLink } from 'apollo-angular-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { setContext } from 'apollo-link-context';
import { ApolloLink } from 'apollo-link';

// Your Content Delivery API URL.
const CONTENT_DELIVERY_API_URL = '...';

// Your Content Delivery API Access Token.
const CONTENT_DELIVERY_API_ACCESS_TOKEN = '...';

export function provideApollo(httpLink: HttpLink) {
    const basic = setContext((operation, context) => ({
        headers: {
            Accept: 'charset=utf-8'
        }
    }));

    // Get the authentication token from local storage if it exists
    const accessToken = CONTENT_DELIVERY_API_ACCESS_TOKEN;

    // get the authentication token from local storage if it exists 
    const auth = setContext((operation, context) => ({
        headers: {
            Authorization: accessToken ? accessToken : ""
        },
    }));

    // HTTP connection to the API
    // You should use an absolute URL here
    const http_link = httpLink.create({ uri: CONTENT_DELIVERY_API_URL })

    const link = ApolloLink.from([basic, auth, http_link]);

    // Cache implementation
    const cache = new InMemoryCache();

    // Create the apollo client
    return {
        link,
        cache
    }
}
```

Now we will add this apollo Client to our Angular app so that we can fetch the content from the Content Delivery API.

Let's head over to [`src/app/app.module.ts`]() file:

```ts
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Apollo
import { HttpClientModule } from '@angular/common/http';
import { ApolloModule, APOLLO_OPTIONS } from 'apollo-angular';
import { HttpLinkModule, HttpLink } from 'apollo-angular-link-http';

// Components
import { AppComponent } from './app.component';
import { BlogsComponent } from './blogs/blogs.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

// Material
import { MaterialModule } from './material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatIconModule } from "@angular/material/icon";

// import the `provideApollo` that we just created 
import { provideApollo } from '../apolloClient';

@NgModule({
  declarations: [
    AppComponent,
    BlogsComponent
  ],
  imports: [
    BrowserModule,

    HttpClientModule,
    ApolloModule,
    HttpLinkModule,

    // Material
    NoopAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    MatIconModule
  ],
  providers: [{
    provide: APOLLO_OPTIONS,
    useFactory: provideApollo,
    deps: [HttpLink]
  }],
  bootstrap: [AppComponent]
})

export class AppModule { };
```

Head over to [`src/app/blogs/blogs.component.ts`]() file:

```ts
import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { Apollo } from 'apollo-angular';
import { MatIconRegistry } from "@angular/material/icon";
import { DomSanitizer } from "@angular/platform-browser";

import gql from 'graphql-tag'

const BLOG_QUERY = gql`
  query listBlogs {
    listBlogs {
        data {
          id
          title
          author
          description
          topic
          url  
        }
    }
  }
`;

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.scss']
})
export class BlogsComponent implements OnInit {
  blogs: any = [];
  loading: boolean = true;

  constructor(
    private apollo: Apollo,
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer
  ) {
    this.matIconRegistry.addSvgIcon(
      "angular",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/angular.svg")
    );
    this.matIconRegistry.addSvgIcon(
      "webiny",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/webiny.svg")
    );
  }

  ngOnInit() {
    this.apollo.watchQuery<any>({
      query: BLOG_QUERY
    })
      .valueChanges
      .pipe(
        map(result => result.data.listBlogs.data)
      ).subscribe(res => {
        this.blogs = res
        this.loading = false
      })
  }
}
```

Finally let's render some mark up in [`src/app/blogs/blogs.component.html`]() 🙂

```html
<div style="text-align:center">
  <br>
  <div class="container home">
    <div fxLayout="column" fxLayoutGap="20px" fxLayout.gt-md="row" fxLayoutAlign="space-around center" class="content">
      <div class="blocks header">
        <mat-icon svgIcon="webiny"></mat-icon>
        <h1 class="mat-h1">Webiny - Headless CMS Blog</h1>
        <mat-icon svgIcon="angular" class="mat-icon"></mat-icon>
        <h3>
          Created using Webiny Headless CMS and Angular
        </h3>
      </div>
    </div>
    <br>
    <div class="container">
      <div fxLayout="row" fxLayoutAlign="center center" class="content">
        <h1 *ngIf="loading">Loading...<mat-icon>mood</mat-icon>
        </h1>
        <br>
        <mat-card-content>
          <mat-card *ngFor="let blog of blogs" class="card">
            <mat-card-title>
              {{blog.title}}
            </mat-card-title>
            <mat-card-subtitle>
              By {{blog.author}}
            </mat-card-subtitle>
            <mat-card-content>
              {{blog.description}}
            </mat-card-content>
            <mat-card-actions>
              Url: {{blog.url}}
            </mat-card-actions>
            <mat-card-footer>
              Hashtags: {{blog.topic}}
            </mat-card-footer>
          </mat-card>
        </mat-card-content>

      </div>
    </div>
  </div>
</div>
```

## Previewing the page

Let's run `yarn serve` in our Angular project directory so we can see our page in action:

![Angular Blog](/img/guides/headless-angular-tutorial/output.png)

## Conclusion

Congratulations! 🎉

We've successfully created a simple page that displays a list of all created blog posts, powered by Webiny Headless CMS and Angular framework.

> The same can also be achieved with other popular tools, like [Gatsby](https://www.gatsbyjs.org/), [Vue.js](), [React.js](), and [Next.js](). To learn more, click [here](<headless-gatsby-tutorial>).
