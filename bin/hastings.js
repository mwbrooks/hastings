#!/usr/bin/env node

/*
 * Module dependencies.
 */

var program = require('commander');
var hastings = require('./../lib/hastings');

/*
 * CLI version.
 */

program.version('0.0.1');

/*
 * Command: hastings init [path]
 */

program
    .command('init [path]')
    .description('setup docs in your project')
    .action(function(path) {
        hastings.init(path, function(e, path) {
            console.log('hastings init %s', path);
        });
    });

/*
 * Command: hastings create <tempate> <file>
 */

program
    .command('create <template> <file>')
    .description('create a doc file from a template')
    .action(function(template, file) {
        console.log('hastings create %s %s', template, file);
    });

/*
 * Command: hastings watch [path]
 */

program
    .command('watch [path]')
    .description('build docs and watch for changes')
    .action(function(path) {
        path = path || '.';
        console.log('hastings watch %s', path);
    });

/*
 * Command: hastings [path]
 */

program
    .command('*')
    .description('build docs to /build/doc/')
    .action(function(path) {
        path = path || '.';
        console.log('hastings %s', path);
    });

// when no argument is provided, use a default path.
if (process.argv.length < 3) {
    process.argv.push('.');
}

/*
 * Command: hastings help
 */

program
    .command('help')
    .description('display usage information')
    .action(function() {
        console.log('');
        console.log('  Usage: hastings [options] [command]');
        console.log('');
        console.log('  Commands:');
        console.log('');
        console.log('    hastings [path] ..................... build docs');
        console.log('    hastings watch [path] ............... build and live preview docs');
        console.log('    hastings init [path] ................ setup docs in your project');
        console.log('    hastings create <template> <file> ... create a file using a template');
        console.log('    hastings help ....................... display usage information');
        console.log(''); 
        console.log('  Options:');
        console.log('');
        console.log('    -h, --help .......................... display usage information');
        console.log('    -V, --version ....................... display version number');
        console.log('');
    });

program.parse(process.argv);
