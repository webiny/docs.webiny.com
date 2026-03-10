// @ts-ignore
import { JSDOM } from "jsdom";
import React from "react";
import ReactDOM from "react-dom";
import debounce from "debounce";
import { Properties, toObject, Property } from "@webiny/react-properties";
import { IReactRenderer } from "../abstractions/IReactRenderer";

export class ReactRenderer<T> implements IReactRenderer<T> {
  async render(element: React.ReactElement) {
    return new Promise<T>(resolve => {
      const onChange = debounce((value: Property[]) => {
        resolve(toObject(value));
      });

      this.mount(<Properties onChange={onChange}>{element}</Properties>);
    });
  }

  private mount(element: React.ReactElement) {
    const dom = new JSDOM(`<div id="root"/>`);
    // @ts-ignore
    global["window"] = dom.window;
    // @ts-ignore
    global["document"] = dom.window.document;
    const root = dom.window.document.getElementById("root");
    ReactDOM.render(element, root);
  }
}
