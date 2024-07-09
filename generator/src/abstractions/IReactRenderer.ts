import React from "react";

export interface NavigationPage {
  type: "page";
  breadcrumbs: string[];
  title: string | null;
  hidden: boolean;
  directory: string;
  linkPrefix?: string;
  link?: string;
  file?: string;
}

export interface NavigationOutputPage {
  type: "page";
  breadcrumbs: string[];
  title: string;
  link: string;
}

export interface NavigationGroup<TChild> {
  type: "group";
  title: string;
  icon?: string;
  link?: string;
  items: TChild[];
}

export interface NavigationSeparator {
  type: "separator";
}

export type NavigationTree<TPage = NavigationPage> = {
  items: Array<NavigationGroup<NavigationGroup<TPage> | TPage> | NavigationSeparator | TPage>;
};

export interface IReactRenderer<T> {
  render(element: React.ReactElement): Promise<T>;
}

export type NavigationOutputData = Array<
  | NavigationGroup<NavigationGroup<NavigationOutputPage> | NavigationOutputPage>
  | NavigationOutputPage
  | NavigationSeparator
>;
