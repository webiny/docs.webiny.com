# Webiny Documentation 📝

The official https://webiny.com/docs documentation source code.

## Repository Setup

Webiny uses [Next.js](https://nextjs.org/) for its documentation. Here is how you can run the project locally:

1. Install Next.js globally

   ```sh
   npm install next --global
   ```

2. Clone this repository

   ```sh
   git clone https://github.com/webiny/docs.webiny.com.git
   ```

3. Go into the project root directory

   ```sh
   cd docs.webiny.com
   ```

4. Install JS dependencies

   ```sh
   yarn
   ```

5. Start the dev server

   ```sh
   yarn dev
   ```

## Project Structure

All the articles are inside the [`src/docs`](https://github.com/webiny/docs.webiny.com/tree/master/src/docs) folder. Articles are grouped by version, but version folders are not just a full copy of the previous version folder. We have proper inheritance in place, and you only need to copy the article you're changing, or create a new one. For us, the base version is `5.28.x` (starting from 5.29.x, we introduced versioned docs).

Navigation is what defines the structure and pages that will be built. Every version folder has a `navigation.js` file, which defines navigation using React. Navigation can be inherited from previous versions, and then modified. You can add sections and articles, remove them, and modify. Here's a code example:

```tsx
import React from "react";
import { Collapsable, Page, Section } from "@/docs/utils/navigation";
import { Navigation as BaseNavigation } from "../5.29.x/navigation";

export const Navigation = () => {
  return (
    <>
      {/* Inherit navigation from 5.29.x. */}
      <BaseNavigation />
      {/* Add new items. */}
      <Collapsable title={"Webiny Overview"}>
        <Section title={"Features"}>
          <Page link={"overview/features/mailer"} />
        </Section>
      </Collapsable>
    </>
  );
};
```

Static assets are also covered by our inheritance mechanism. This means that, if you are just editing a part of an article, and you're not touching images/videos, you don't need to copy them from the base folder. They will be picked up automatically.

To delete an article or an entire section from a specific version of docs, you pass a `remove` prop to that element:

```tsx
export const Navigation = () => {
  return (
    <>
      {/* Inherit navigation from 5.29.x. */}
      <BaseNavigation />
      {/* Remove the entire section. */}
      <Collapsable title={"Webiny Overview"} remove />
    </>
  );
};
```

## Contributors

### 🧡 Thanks goes to these wonderful people!

<a href="https://github.com/webiny/docs.webiny.com/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=webiny/docs.webiny.com" />
</a>
