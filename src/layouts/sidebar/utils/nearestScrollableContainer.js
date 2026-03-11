/**
 * Find the nearest scrollable ancestor (or self if scrollable).
 *
 * Code adapted and simplified from the smoothscroll polyfill.
 *
 * @param {Element} el
 * @returns {Element}
 */
export function nearestScrollableContainer(el) {
    function isScrollable(el) {
        const style = window.getComputedStyle(el);
        const overflowX = style["overflowX"];
        const overflowY = style["overflowY"];
        const canScrollY = el.clientHeight < el.scrollHeight;
        const canScrollX = el.clientWidth < el.scrollWidth;

        const isScrollableY = canScrollY && (overflowY === "auto" || overflowY === "scroll");
        const isScrollableX = canScrollX && (overflowX === "auto" || overflowX === "scroll");

        return isScrollableY || isScrollableX;
    }

    while (el !== document.body && isScrollable(el) === false) {
        el = el.parentNode || el.host;
    }

    return el;
}
