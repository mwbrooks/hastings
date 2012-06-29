var should = require('should');
var hastings = require('./../lib/hastings');
var basepath = require('path').resolve('.');
var fs = require('fs');
var p = require('path');
var wrench = require('wrench');
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
        var tmpPath = p.join(basepath, 'doc');
        var indexPath = p.join(tmpPath, 'index.md');
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
            p.existsSync('doc').should.equal(false);
            hastings.init('doc', function(e, path) {
                p.existsSync('doc/index.md').should.equal(true);
            });
        });

        it('should use an existing directory', function() {
            fs.mkdirSync(tmpPath);
            hastings.init('doc', function(e, path) {
                p.existsSync('doc/index.md').should.equal(true);
            });
        });

        it('should not replace an existing index.md', function() {
            wrench.copyDirSyncRecursive('test/res/doc', 'doc');
            hastings.init('doc', function(e, path) {
                var expectedContent = fs.readFileSync('test/res/doc/index.md', 'utf-8');
                var actualContent = fs.readFileSync('doc/index.md', 'utf-8');
                actualContent.should.equal(expectedContent);
            });
        });
    });
});
