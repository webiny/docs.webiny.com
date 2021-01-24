// For some reason, if images are not stored somewhere, the preloading doesn't work.
// Hence `cache` object. ¯\_(ツ)_/¯
const cache = {};

export default (...paths) => {
    for (let i = 0; i < paths.length; i++) {
        const current = paths[i];
        if (cache[current]) {
            continue;
        }

        const image = new Image();
        image.src = paths[i];
        cache[current] = image;
    }
};
