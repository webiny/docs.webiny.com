import { NavigationPageProvider } from "../components/navigation";

export type Navigation = Record<string, any>;

export interface INavigationRenderer {
  render(element: JSX.Element, pageProvider: NavigationPageProvider): Promise<Navigation>;
}
