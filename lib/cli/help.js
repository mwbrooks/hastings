/**
 * Help command.
 *
 * Outputs the usage information for the command-line.
 *
 * Options:
 *
 *   - `argv` {Object} is an optimist object.
 *   - `callback` {Function} is null unless there is an error.
 */

module.exports = function(argv, callback) {
    // execute help command
    if (typeof this[argv._[0]][argv._[1]] === 'function') {
        this[argv._[0]][argv._[1]](argv, callback);
    }
    else {
        var help = [
            '',
            '  Usage: ' + argv.$0 + ' [options] [commands]',
            '',
            '  Commands:',
            '',
            '    build [path]         build docs to /build/doc/',
            '    help [commands]      output usage information',
            '',
            '  Options:',
            '',
            '    -v, --version        output version number',
            '    -h, --help           output usage information',
            ''
        ];

        console.log(help.join('\n'));

        callback(null);
    }
};
