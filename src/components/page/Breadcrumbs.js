export class Breadcrumbs {
    constructor(navigation) {
        this.navigation = navigation;
    }

    find(pathname) {
        const pageItem = this.__traverse(this.navigation, pathname);
        return pageItem ? pageItem.breadcrumbs : [];
    }

    __traverse(items, pathname) {
        for (const item of items) {
            if (item.hasOwnProperty("items")) {
                const maybe = this.__traverse(item.items, pathname);
                if (maybe) {
                    return maybe;
                }

                continue;
            }

            if (item.link === pathname) {
                return item;
            }
        }

        return undefined;
    }
}
