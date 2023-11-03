import { Navigation } from "../app/Navigation";

export interface INavigationLoader {
  load(): Promise<Navigation>;
}
