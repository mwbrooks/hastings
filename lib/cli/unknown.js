/**
 * Unknown command.
 *
 * Outputs that the command-line command is unsupported.
 *
 * Options:
 *
 *   - `argv` {Object} is an optimist object.
 *   - `callback` {Function} is a completion callback.
 */

module.exports = function(argv, callback) {
    console.log('Unknown command:', argv._[0]);
    callback();
};
