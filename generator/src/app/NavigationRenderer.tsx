import React from "react";
// @ts-ignore
import ReactDOM from "react-dom";
// @ts-ignore
import { JSDOM } from "jsdom";
// @ts-ignore
import debounce from "debounce";
import { Properties, toObject, Property } from "@webiny/react-properties";
import { INavigationRenderer, Navigation } from "../abstractions/IReactRenderer";
import { NavigationPageProvider, PageProvider } from "../components/navigation";

export class NavigationRenderer implements INavigationRenderer {
  async render(element: JSX.Element, pageProvider: NavigationPageProvider) {
    return new Promise<Navigation>(resolve => {
      const onChange = debounce((value: Property[]) => {
        resolve(toObject(value));
      });

      this.mount(
        <Properties onChange={onChange}>
          <PageProvider pageProvider={pageProvider}>{element}</PageProvider>
        </Properties>
      );
    });
  }

  private mount(element: JSX.Element) {
    const dom = new JSDOM(`<div id="root"/>`);
    // @ts-ignore
    global["window"] = dom.window;
    // @ts-ignore
    global["document"] = dom.window.document;
    const root = dom.window.document.getElementById("root");
    ReactDOM.render(element, root);
  }
}
