import React from "react";

export interface NavigationPage {
  type: "page";
  title: string | null;
  hidden: boolean;
  link?: string;
  file?: string;
}

export interface NavigationOutputPage {
  type: "page";
  title: string;
  link: string;
}

export interface NavigationSection<TChild> {
  type: "section";
  title: string;
  items: TChild[];
}

export interface NavigationCollapsable<TChild> {
  type: "collapsable";
  title: string;
  items: TChild[];
}

export type NavigationTree<TPage = NavigationPage> = {
  items: NavigationCollapsable<NavigationSection<TPage>>[];
};

export interface IReactRenderer<T> {
  render(element: React.ReactElement): Promise<T>;
}

export type NavigationOutputData = Array<
  NavigationCollapsable<NavigationSection<NavigationOutputPage>>
>;
