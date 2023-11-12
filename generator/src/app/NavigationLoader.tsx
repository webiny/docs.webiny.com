import React from "react";
import { INavigationLoader } from "../abstractions/INavigationLoader";
import { NavigationTree } from "../abstractions/IReactRenderer";
import { IMdxFileLoader } from "../abstractions/IMdxFileLoader";
import { Navigation } from "./Navigation";
import { ReactRenderer } from "./ReactRenderer";

export class NavigationLoader implements INavigationLoader {
  private readonly navigationPath: string;
  private readonly linkPrefix: string;
  private readonly mdxFileLoader: IMdxFileLoader;
  private reactRenderer: ReactRenderer<NavigationTree>;

  constructor(navigationPath: string, linkPrefix: string, mdxFileLoader: IMdxFileLoader) {
    this.navigationPath = navigationPath;
    this.linkPrefix = linkPrefix;
    this.mdxFileLoader = mdxFileLoader;
    this.reactRenderer = new ReactRenderer();
  }

  async load(): Promise<Navigation> {
    this.flushRequireCache();
    const { Navigation: Component } = await import(this.navigationPath);
    const navigationTree = await this.reactRenderer.render(<Component />);
    return Navigation.create(this.mdxFileLoader, navigationTree, this.linkPrefix);
  }

  private flushRequireCache() {
    Object.keys(require.cache)
      .filter(file => file.endsWith(this.navigationPath))
      .forEach(key => delete require.cache[key]);
  }
}
