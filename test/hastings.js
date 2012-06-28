var should = require('should');
var hastings = require('./../lib/hastings');
var basepath = require('path').resolve('.');
var fs = require('fs');
var p = require('path');
var wrench = require('wrench');

describe('hastings', function() {
    it('should exist', function() {
        should.exist('hastings');
    });

    describe('path', function() {
        it('should be optional', function() {
            hastings.init(null, function(e, path) {
                path.should.equal(basepath + '/doc');
                fs.statSync(path).isDirectory().should.equal(true);
            });
        });

        it('should be used when provided', function() {
            hastings.init('custom/docs', function(e, path) {
                path.should.equal(basepath + '/custom/docs');
                fs.statSync(path).isDirectory().should.equal(true);
            });
        });

        it('should handle ./ as ./doc', function() {
            hastings.init('.', function(e, path) {
                path.should.equal(basepath + '/doc');
                fs.statSync(path).isDirectory().should.equal(true);
            });
        });

        it('should be absolute path', function() {
            hastings.init('.', function(e, path) {
                path.should.equal(basepath + '/doc');
            });
        });
    });

    describe('init', function() {
        var tmpPath = p.join(basepath, 'doc');
        var indexPath = p.join(tmpPath, 'index.md');
        beforeEach(function() {
            if (p.existsSync(tmpPath))
                wrench.rmdirSyncRecursive(tmpPath);
        });
        afterEach(function() {
            if (p.existsSync(tmpPath))
                wrench.rmdirSyncRecursive(tmpPath);
        });

        it('should exist', function() {
            hastings.should.have.property('init');
        });

        it('should use an existing directory', function() {
            // pre-create doc/ directory
            fs.mkdirSync(tmpPath);
            p.existsSync(tmpPath).should.equal(true);
            // now feed it to hastings
            hastings.init('doc', function(e, path) {
                fs.statSync(path).isDirectory().should.equal(true);
                fs.statSync(indexPath).isFile().should.equal(true);
            });
        });

        it('should create missing directories', function() {
            // no pre-created doc/ directory
            p.existsSync(tmpPath).should.equal(false);
            // now create it
            hastings.init('doc', function(e, path) {
                fs.statSync(path).isDirectory().should.equal(true);
                fs.statSync(indexPath).isFile().should.equal(true);
            });
        });

        it('should not replace an existing index.md', function() {
            wrench.copyDirSyncRecursive('test/res/doc', 'doc');
            hastings.init('doc', function(e, path) {
                fs.statSync(path).isDirectory().should.equal(true);
                fs.statSync(indexPath).isFile().should.equal(true);

                var expectedContent = fs.readFileSync('test/res/doc/index.md', 'utf-8');
                var actualContent = fs.readFileSync('doc/index.md', 'utf-8');
                actualContent.should.equal(expectedContent);
            });
        });
    });
});
