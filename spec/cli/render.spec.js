/*
 * Module dependencies.
 */

var CLI = require('../../lib/cli'),
    cli;

/*
 * Build command specification.
 */

describe('$ hastings build <path>', function() {
    beforeEach(function() {
        cli = new CLI();
        spyOn(process.stdout, 'write');
        spyOn(cli.hastings, 'build');
    });

    describe('$ hastings help', function() {
        it('outputs info on build command', function() {
            cli.argv({ _: ['help'] });
            expect(process.stdout.write.mostRecentCall.args[0])
                .toMatch(/Commands:[\w\W]*\s+build \[path\]/i);
        });
    });

    describe('$ hastings build path/to/file.md', function() {
        it('should try to build the path', function() {
            cli.argv({ _: ['build', 'path/to/file.md'] });
            expect(cli.hastings.build).toHaveBeenCalledWith(
                { input: 'path/to/file.md' },
                jasmine.any(Function)
            );
        });

        describe('successful build', function() {
            beforeEach(function() {
                cli.hastings.build.andCallFake(function(options, callback) {
                    callback(null, { some: 'response' });
                });
            });

            it('should not return an error', function(done) {
                cli.argv({ _: ['build', 'path/to/file.md'] }, function(e, result) {
                    expect(e).toBeNull();
                    done();
                });
            });

            it('should return a result object', function(done) {
                cli.argv({ _: ['build', 'path/to/file.md'] }, function(e, result) {
                    expect(result).toEqual({ some: 'response' });
                    done();
                });
            });
        });

        describe('failed render', function() {
            beforeEach(function() {
                cli.hastings.build.andCallFake(function(options, callback) {
                    callback(new Error('No write access'));
                });
            });

            it('should not return an error', function(done) {
                cli.argv({ _: ['build', 'path/to/file.md'] }, function(e, result) {
                    expect(e).toEqual(jasmine.any(Error));
                    done();
                });
            });

            it('should not return a result object', function(done) {
                cli.argv({ _: ['build', 'path/to/file.md'] }, function(e, result) {
                    expect(result).not.toBeDefined();
                    done();
                });
            });
        });
    });
});
