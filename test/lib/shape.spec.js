var chai = require('chai');

import {Shape} from '../../src/lib/shape.js';

chai.should();

describe('Shape', function () {
    describe('is valid', function () {
        it('expects an array of lengths', function () {
            var shape = new Shape('fake');
            shape.lengths.length.should.equal(0);
            shape.isValid().should.equal(true);

            shape = new Shape([]);
            shape.lengths.length.should.equal(0);
            shape.lengths.should.be.instanceof(Array);
            shape.isValid().should.equal(true);

        });

        it('expects each length to be an integer >0', function () {
            var shape = new Shape(['0']);
            shape.lengths.length.should.equal(0);
            shape.isValid().should.equal(true);

            shape = new Shape([-1]);
            shape.lengths.length.should.equal(0);
            shape.isValid().should.equal(true);

            shape = new Shape([1.2]); // 1.2 -> 1
            shape.lengths.length.should.equal(0);
            shape.isValid().should.equal(true);

            shape = new Shape([1]);
            shape.lengths.length.should.equal(1);
            shape.isValid().should.equal(true);

        });

    });
});
