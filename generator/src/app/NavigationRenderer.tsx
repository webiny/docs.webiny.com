import React from "react";
// @ts-ignore
import ReactDOM from "react-dom";
// @ts-ignore
import { JSDOM } from "jsdom";
// @ts-ignore
import debounce from "debounce";
import { Properties, toObject, Property } from "@webiny/react-properties";
import { INavigationRenderer } from "../abstractions/INavigationRenderer";
import { Navigation } from "./Navigation";

export class NavigationRenderer implements INavigationRenderer {
  private readonly rootDir: string;

  constructor(rootDir: string) {
    this.rootDir = rootDir;
  }

  async render(element: JSX.Element) {
    return new Promise<Navigation>(resolve => {
      const onChange = debounce((value: Property[]) => {
        resolve(new Navigation(toObject(value)));
      });

      this.mount(<Properties onChange={onChange}>{element}</Properties>);
    });
  }

  async renderFromPath(): Promise<Navigation> {
    this.flushRequireCache();
    const { Navigation } = await import(`${this.rootDir}/navigation.js`);
    return this.render(<Navigation />);
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

  private flushRequireCache() {
    Object.keys(require.cache)
      .filter(file => file.endsWith(`${this.rootDir}/navigation.js`))
      .forEach(key => delete require.cache[key]);
  }
}
