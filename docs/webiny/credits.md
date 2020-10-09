---
id: credits
title: Credits
sidebar_label: Credits
---

Webiny as an open source project depends on many 3rd party open source libraries and technologies. We are happy for the open source community and all the contributors creating and maintaining many of the great software that allows us, and many others, to build on top of this foundation as well as provide back to the community.

> This page mentions some, but not all, libraries that we have used to create Webiny. For the full list please visit our code base on [GitHub](https://github.com/Webiny/webiny-js).

### Core technology

#### Node.js

Webiny code base is primarily written in Javascript and [Node.js](https://nodejs.org/en/) is the technology that allows us to run JavaScript server side.

Licence: [Custom](https://github.com/nodejs/node/blob/master/LICENSE)

#### MySQL

[MySQL](https://www.mysql.com/) is the default database that ships with Webiny. We've been a long time users of MySQL, as well as other databases, like MongoDb, but we felt going forward with MySQL is the best choice, due to developments in areas like Serverless Aurora, which enables Webiny to easily scale database workload, with almost to no maintenance or management required on the database side.

Licence: [GPL](http://www.gnu.org/licenses/old-licenses/gpl-2.0.html)

### JavaScript libraries

#### React

[React](https://reactjs.org/) is the core library in which most of the Webiny functionality has been developed. The philosophy that React introduces in how client interfaces are built brings structure and maintainability to the UI components.

Licence: [MIT](https://github.com/facebook/react/blob/master/LICENSE)

#### Redux

Building complex interfaces like the Webiny Page Editor is quite challenging. The flow of data in how users are interacting with the interface, the states in which the actions are fired, all that is quite challenging to manage. [Redux](https://redux.js.org/introduction) makes this bit simpler, as well as it adds rules to the code, so debugging and working with the code is easier.

Licence: [MIT](https://github.com/reduxjs/redux/blob/master/LICENSE.md)

#### GraphQL

By now we have built thousands of different APIs in our careers. We have been primarily working with RESTful APIs, and we believed that this was a great developer experience, but then [GraphQL](https://graphql.org/) came along. At first we were bit skeptical, like with any new technology. But once we got to know GraphQL, we saw that is was so much better and decided that this will be our technology of choice for any API we build going forward.

Licence: [MIT](https://github.com/graphql/graphql-js/blob/master/LICENSE)

#### Webpack

Getting a decent build output is something of an art. Build is such a crucial step of every application. It's tightly coupled with the performance of the application if not the most important thing for the performance. [Webpack](https://webpack.js.org/) is doing an amazing job for us in this area.

Licence: [MIT](https://github.com/webpack/webpack/blob/master/LICENSE)

#### Babel

If we would have to build apps by writing ECMAScript5, that probably wouldn't be such a pleasant experience. Luckily [Babel](https://babeljs.io/) allows us to use the latest and greatest ECMAScript features while developing, and the compiling our code to browser compatible versions in the background.

Licence: [MIT](https://github.com/babel/babel/blob/master/LICENSE)

#### **ESLint**

This little guy keeps us in check. No unused variables, no importing of images and libraries that are not needed in the particular code, as well it checks for come common pitfalls in our code, and makes sure we don't commit any of those, until the code is quality made by strict standards.

Licence: [MIT](https://github.com/eslint/eslint)

#### Serverless Framework

Webiny API latey is designed for edge compute serverless environments. To help us get the best possible approach in building such an API layer, [Serverless Framework](https://serverless.com/) is our technology of choice.

Licence: [MIT](https://github.com/serverless/serverless/blob/master/LICENSE.txt)

#### Other dependencies:

- [Emotion](https://emotion.sh/) / Licence: [MIT](https://github.com/emotion-js/emotion/blob/master/LICENSE)
- [Storybook](https://storybook.js.org/) / Licence: [MIT](https://github.com/storybooks/storybook/blob/master/LICENSE)
- [Jest](https://jestjs.io/) / Licence: [MIT](https://github.com/facebook/jest/blob/master/LICENSE)
- [Lodash](https://lodash.com/) / Licence: [MIT](https://github.com/lodash/lodash/blob/master/LICENSE)
- [Slate](https://www.slatejs.org/) / Licence: [MIT](https://github.com/ianstormtaylor/slate/blob/master/License.md)

### Icons, themes, styles and other visual components

#### Google Material Web Components

[Google Material Design](https://material.io/) defines the style of the UI elements that are present in the Webiny administration. This includes many of the icons that are present throughout the user interface.

Licence: [Apache 2.0](https://github.com/material-components/material-components-web/blob/master/LICENSE)

#### Font Awesome

We've been a long fan of [Font Awesome](https://fontawesome.com/), and we love their icons. Their icons are used for several UI elements in Webiny administration interface in their original state as provided by the Font Awesome website.

Licence: [Commons Attribution 4.0 International](https://fontawesome.com/license)

#### React Material Web Components \(RMWC\)

Webiny features numerous React UI components, several of those components internally are using the [RMWC](https://github.com/jamesmfriedman/rmwc) library by [James Friedman](https://github.com/jamesmfriedman).

Licence: [MIT](https://github.com/jamesmfriedman/rmwc/blob/master/LICENSE)
