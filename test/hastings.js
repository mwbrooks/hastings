var should = require('should');
var hastings = require('./../lib/hastings');
var basepath = require('path').resolve('.');

describe('hastings', function() {
    it('should exist', function() {
        should.exist('hastings');
    });

    describe('init', function() {
        it('should exist', function() {
            hastings.should.have.property('init');
        });

        describe('path', function() {
            it('should be optional', function() {
                var path = hastings.init();
                path.should.equal(basepath + '/doc');
            });

            it('should be used when provided', function() {
                var path = hastings.init('docs');
                path.should.equal(basepath + '/docs');
            });

            it('should handle ./ as ./doc', function() {
                var path = hastings.init('.');
                path.should.equal(basepath + '/doc')
            });
        });

        describe('output', function() {
            it('should output ./doc/index.md');
        });
    });
});
