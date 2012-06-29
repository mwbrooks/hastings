var fs = require('fs');
var p = require('path');
var wrench = require('wrench');

/*
 * path
 *
 * Normalize the input path of the documentation directory:
 *   ''           => /absolute/current/path/doc/
 *   '.'          => /absolute/current/path/doc/
 *   'doc'        => /absolute/current/path/doc/
 *   'custom/dir' => /absolute/current/path/custom/dir
 *
 * @param {String} path to normalize
 * @return {String} absolute path normalized
 */
exports.path = function(path) {
    path = path || './doc';  // default path is ./doc
    path = p.resolve(path);  // normalize to absolute path

    // edge case: handle ./ as ./doc
    var c = p.resolve('.');
    if (p.relative(path, c) === '')
        path = p.join(path, 'doc');

    return path;
};

/*
 * init
 *
 * Initialize a default documentation file structure.
 *
 * Example:
 *
 *     .
 *     |__ doc
 *     |   |__ en
 *     |       |__ index.md
 *
 * @param {String} path to generate doc directory. Default is './doc'
 * @param {Function} callback(e, path) with absolute path to doc directory.
 */
exports.init = function(path, callback) {
    var e;
    var paths = [];
    path = exports.path(path);
    paths.push(path);

    try {
        // create the initial directory structure
        wrench.mkdirSyncRecursive(path);

        // create index.md
        var indexFile = p.join(path, 'index.md');
        var indexExists = p.existsSync(indexFile);
        if (!indexExists)
            fs.writeFileSync(indexFile, '');

        // add to paths
        paths.push(indexFile);
    } catch(err) {
        e = err;
    }

    callback(e, paths);
};
