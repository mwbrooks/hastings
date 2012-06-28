/*
 * @private
 * File system state.
 *
 * Keeps track of the existing directories and files
 * on the mock file system.
 */
var fs = {};

/*
 * Make Directory Synchronously
 *
 * Synchronous mkdir. Default mode is 0007.
 *
 * @param {String} path to make a directory
 */
exports.mkdirSync = function(path) {
    fs[path] = true;
};
