import React from "react";

export interface NavigationPage {
  type: "page";
  title: string | null;
  hidden: boolean;
  directory: string;
  linkPrefix?: string;
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

export interface NavigationSeparator {
  type: "separator";
}

export type NavigationTree<TPage = NavigationPage> = {
  items: Array<
    | NavigationCollapsable<
        | NavigationCollapsable<TPage>
        | NavigationSection<NavigationCollapsable<TPage> | TPage>
        | TPage
      >
    | NavigationSection<NavigationCollapsable<TPage> | TPage>
    | NavigationSeparator
    | TPage
  >;
};

export interface IReactRenderer<T> {
  render(element: React.ReactElement): Promise<T>;
}

export type NavigationOutputData = Array<
  | NavigationCollapsable<
      | NavigationCollapsable<NavigationOutputPage>
      | NavigationSection<NavigationCollapsable<NavigationOutputPage> | NavigationOutputPage>
      | NavigationOutputPage
    >
  | NavigationSection<NavigationCollapsable<NavigationOutputPage> | NavigationOutputPage>
  | NavigationOutputPage
  | NavigationSeparator
>;
