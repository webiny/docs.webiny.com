#### Page List `pagesList`

This section defines a list of possible React components that will render a
list of pages when a user inserts a page list element into the page.

A list can have different visual outputs depending on which list layout is selected. 

![Webiny - Theme Page List](assets/developer-tutorials/theme-overview-pagelist.png)

Each entry must contain the following attributes:

- `name` - internal identifier for that particular list layout
- `title` - human readable name of that identifier
- `component` - React component responsible for rendering

> **Note:** Like with any other React components, make sure you `import` the component at the top of your `src/index.js` file.

#### Mailchimp `mailchimp`

Certain optional addons, like the Mailchimp addon come with a default layout to render the Mailchimp subscribe form. The default layout always has the `name` of "default". In case you want to overwrite how the default form looks like, you can define your custom render method under the same name, and just provide your own `component` that will handle the render. 