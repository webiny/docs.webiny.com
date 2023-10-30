import { NavigationPage, NavigationTree } from "../abstractions/INavigationRenderer";

export type NavigationPageModifier = (page: NavigationPage) => NavigationPage;

export class Navigation {
  private navigation: NavigationTree;
  private modifiers = new Map<string, NavigationPageModifier[]>();

  constructor(navigation: NavigationTree) {
    this.navigation = navigation;
  }

  getPaths() {
    return this.navigation.paths;
  }

  getItems() {
    return this.applyPageModifiers(this.navigation.items);
  }

  setLink(path: string, link: string) {
    const modifiers = this.modifiers.get(path) || [];
    modifiers.push(page => ({ ...page, link }));
    this.modifiers.set(path, modifiers);
  }

  setTitle(path: string, title: string) {
    const modifiers = this.modifiers.get(path) || [];
    // `title` set in the `navigation.js` file has precedence over the `frontmatter` title.
    modifiers.push(page => ({ ...page, title: page.protectedTitle ? page.title : title }));
    this.modifiers.set(path, modifiers);
  }

  private applyPageModifiers(groups: NavigationTree["items"]) {
    return groups.map(group => {
      return {
        ...group,
        items: group.items.map(section => {
          return {
            ...section,
            items: section.items.map(page => {
              const modifiers = this.modifiers.get(page.path) || [];
              return modifiers.reduce((page, modifier) => modifier(page), page);
            })
          };
        })
      };
    });
  }
}
