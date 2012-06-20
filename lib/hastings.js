/*
 * init
 *
 * Initialize a default documentation file structure.
 *
 * Example:
 *
 *     .
 *     ├── doc
 *     │   └── en
 *     │       └── index.md
 *
 * @param {String} path to generate the file structure. Default is '.'
 * @return {String} fully qualified path to doc directory.
 */
exports.init = function(path) {
    console.log('hastings init %s', path);
    return path;
};
