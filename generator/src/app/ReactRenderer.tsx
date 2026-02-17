import React from "react";
import Renderer from "react-test-renderer";
import debounce from "debounce";
import { Properties, toObject, Property } from "@webiny/react-properties";
import { IReactRenderer } from "../abstractions/IReactRenderer";

export class ReactRenderer<T> implements IReactRenderer<T> {
  async render(element: React.ReactElement) {
    return new Promise<T>(resolve => {
      const onChange = debounce((value: Property[]) => {
        resolve(toObject(value));
      });

      Renderer.create(<Properties onChange={onChange}>{element}</Properties>);
    });
  }
}
