var path = require('path');
var wrench = require('wrench');

/*
 * Test environment directory paths.
 */
var basePath = path.resolve('.');
var testPath = path.join(basePath, 'doc');

/*
 * cleanup the test environment.
 *
 * Remove the test directory and it's content.
 */
exports.cleanup = function() {
    if (path.existsSync(testPath))
        wrench.rmdirSyncRecursive(testPath);
};
