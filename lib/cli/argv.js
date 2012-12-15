/**
 * Parse command-line arguments.
 *
 * Inspects the arguments and calls the appropriate action.
 *
 * Options:
 *
 *   - `argv` {Object} is an optimist.argv object.
 *   - [`callback`] {Function} is triggered on completion.
 */

module.exports = function(argv, callback) {
    // require argv
    if (!argv) throw new Error('missing parameter argv');

    // optional callback
    callback = callback || function() {};

    // --version or -v
    if (argv.version || argv.v) {
        argv._.unshift('version');
    }

    // --help or -h
    if (argv.help || argv.h) {
        argv._.unshift('help');
    }

    // help when no command
    if (!argv._.length) {
        argv._.unshift('help');
    }

    // execute command
    if (typeof this[argv._[0]] === 'function') {
        this[argv._[0]](argv, callback);
    }
    else {
        this.unknown(argv, callback);
    }
};
