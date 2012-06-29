var fs = require('fs');
var path = require('path');
var wrench = require('wrench');

/*
 * Test environment directory paths.
 */
var basePath = path.resolve('.');
var testPath = path.join(basePath, 'doc');

/*
 * setup the test environment.
 *
 * Create a doc/ directory and simple doc/index.md
 */
exports.setup = function() {
    wrench.copyDirSyncRecursive('test/res/doc', testPath);
};

/*
 * cleanup the test environment.
 *
 * Remove the test directory and it's content.
 */
exports.cleanup = function() {
    if (path.existsSync(testPath))
        wrench.rmdirSyncRecursive(testPath);
};

/*
 * exist
 *
 * check the existence of a directory or file.
 *
 * @param {String} p path to the directory or file.
 * @return {Boolean} true if a directory or file exists.
 */
exports.exists = function(p) {
    return path.existsSync(p);
};

/*
 * mkdir
 *
 * Make a directory.
 *
 * @param {String} p path to directory to make.
 */
exports.mkdir = function(p) {
    fs.mkdirSync(p);
};

/*
 * content
 *
 * Get the file content as a utf-8 string.
 *
 * @param {String} file path to read.
 * @return {String} UTF-8 encoded string of file content.
 */
exports.content = function(file) {
    return fs.readFileSync(file, 'utf-8');
};
