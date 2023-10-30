import { Navigation } from "../app/Navigation";

export interface NavigationPage {
  type: "page";
  title: string | null;
  protectedTitle: boolean;
  path: string;
  link: string | undefined;
}

export interface NavigationSection {
  type: "section";
  title: string;
  items: NavigationPage[];
}

export interface NavigationCollapsable {
  type: "collapsable";
  title: string;
  items: NavigationSection[];
}

export type NavigationTree = {
  items: NavigationCollapsable[];
  paths: string[];
};

export interface INavigationRenderer {
  render(element: JSX.Element): Promise<Navigation>;
}
