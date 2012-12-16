/*
 * Module dependencies.
 */

var Hastings = require('./hastings');


/**
 * Command line interface object.
 */

function CLI() {
    this.hastings = new Hastings();
}

/**
 * Command line commands.
 */

CLI.prototype.argv = require('./cli/argv');
CLI.prototype.unknown = require('./cli/unknown');
CLI.prototype.version = require('./cli/version');
CLI.prototype.help = require('./cli/help');
CLI.prototype.build = require('./cli/build');

/*
 * Expose the CLI object.
 */

module.exports = CLI;
