var should = require('should');
var hastings = require('./../lib/hastings');

describe('hastings', function() {
    it('should exist', function() {
        should.exist('hastings');
    });

    describe('init', function() {
        it('should exist', function() {
            hastings.should.have.property('init');
        });
    });
});
