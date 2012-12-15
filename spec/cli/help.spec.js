/*
 * Module dependencies.
 */

var CLI = require('../../lib/cli'),
    cli;

/*
 * Help command specification.
 */

describe('$ hastings help', function() {
    beforeEach(function() {
        cli = new CLI();
        spyOn(process.stdout, 'write');
    });

    describe('$ hastings', function() {
        it('should output the usage information', function() {
            cli.argv({ _: [] });
            expect(process.stdout.write.mostRecentCall.args[0]).toMatch(/usage:/i);
        });
    });

    describe('$ hastings help', function() {
        it('should output the usage information', function() {
            cli.argv({ _: [ 'help' ] });
            expect(process.stdout.write.mostRecentCall.args[0]).toMatch(/usage:/i);
        });
    });

    describe('$ hastings --help', function() {
        it('should output the usage information', function() {
            cli.argv({ _: [], help: true });
            expect(process.stdout.write.mostRecentCall.args[0]).toMatch(/usage:/i);
        });
    });

    describe('$ hastings -h', function() {
        it('should output the usage information', function() {
            cli.argv({ _: [], h: true });
            expect(process.stdout.write.mostRecentCall.args[0]).toMatch(/usage:/i);
        });
    });
});
