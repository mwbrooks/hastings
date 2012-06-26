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
 * @param {String} p is path to generate doc directory. Default is './doc'
 * @return {String} absolute path to doc directory.
 */
exports.init = function(p) {
    var path = require('path');

    p = p || './doc';    // default path is ./doc
    p = path.resolve(p); // resolve absolute path

    // edge case: handle ./ as ./doc
    var c = path.resolve('.');
    if (path.relative(p, c) == '')
        p = path.join(p, 'doc');

    console.log('hastings init %s', p);
    return p;
};
