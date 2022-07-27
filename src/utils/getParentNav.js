import { useRouter } from "next/router";

export function getParentNav(nav) {
    let router = useRouter();

    // extract the parent group
    let parents = null;
    nav.forEach((element, index, array) => {
        if (element.hasOwnProperty("links")) {
            element.links.forEach((innerSection) => {
                if (innerSection.hasOwnProperty("links")) {
                    innerSection.links.forEach((innerLink) => {
                        if (innerLink.link === router.pathname) {
                            parents = [innerSection, element];
                        }
                    });
                } else {
                    if (innerSection.link === router.pathname) {
                        parents = [null, element];
                    }
                }
            });
        }
    });

    return parents;
}
