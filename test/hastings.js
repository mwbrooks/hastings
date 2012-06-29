var should = require('should');
var hastings = require('./../lib/hastings');
var basepath = require('path').resolve('.');
var p = require('path');
var help = require('./lib/test-helper');

describe('hastings', function() {
    it('should exist', function() {
        should.exist('hastings');
    });

    describe('path', function() {
        it('should be optional', function() {
            var expected = p.join(basepath, 'doc');
            hastings.path(null).should.equal(expected);
        });

        it('should be used when provided', function() {
            var expected = p.join(basepath, 'custom', 'docs');
            hastings.path('custom/docs').should.equal(expected);
        });

        it('should handle ./ as ./doc', function() {
            var expected = p.join(basepath, 'doc');
            hastings.path('.').should.equal(expected);
        });

        it('should be absolute path', function() {
            var expected = p.resolve(p.join(basepath, 'doc'));
            hastings.path('.').should.equal(expected);
        });
    });

    describe('init', function() {
        beforeEach(function() {
            help.cleanup();
        });
        afterEach(function() {
            help.cleanup();
        });

        it('should exist', function() {
            hastings.should.have.property('init');
        });

        it('should create missing directories and files', function() {
            help.exists('doc').should.equal(false);
            hastings.init('doc', function(e, path) {
                help.exists('doc/index.md').should.equal(true);
            });
        });

        it('should use an existing directory', function() {
            help.mkdir('doc');
            hastings.init('doc', function(e, path) {
                help.exists('doc/index.md').should.equal(true);
            });
        });

        it('should not replace an existing index.md', function() {
            help.setup(); // create a sample doc/ directory and content
            hastings.init('doc', function(e, path) {
                var expect = help.content('test/res/doc/index.md');
                var actual = help.content('doc/index.md');
                actual.should.equal(expect);
            });
        });
    });
});
