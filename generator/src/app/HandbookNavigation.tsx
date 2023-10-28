import React from "react";
import path from "path";
import { Navigation } from "../abstractions/IReactRenderer";
import { NavigationRenderer } from "./NavigationRenderer";
import { NavigationPageProvider } from "../components/navigation";

export class HandbookNavigation {
  private readonly renderer: NavigationRenderer;
  private readonly basePath: string;

  constructor(basePath: string) {
    this.basePath = path.resolve(basePath);
    this.renderer = new NavigationRenderer();
  }

  async render(pageProvider: NavigationPageProvider): Promise<Navigation> {
    const { Navigation } = await import(`${this.basePath}/navigation.js`);

    return this.renderer.render(<Navigation />, pageProvider);
  }
}
