/**
 * Build command.
 *
 * Renders the input markdown as HTML to the output path.
 *
 * Options:
 *
 *   - `argv` {Object} is an optimist object.
 *   - `callback` {Function} is a completion callback.
 */

module.exports = function(argv, callback) {
    // require parameters
    if (!argv) throw new Error('missing parameter argv');
    if (!callback) throw new Error('missing parameter callback');

    // build the docs
    this.hastings.build({ input: argv._[1] }, function(e, result) {
        callback(e, result);
    });
};
