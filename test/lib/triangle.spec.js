var chai = require('chai');

import {Triangle} from '../../src/lib/triangle.js';

chai.should();

describe('Triangle', function () {
    describe('is valid', function () {
        it('expects 3 lengths for the triangle sides', function () {
            var triangle = new Triangle([10, 20]);
            triangle.lengths.length.should.equal(2);
            triangle.isValid().should.equal(false);

            triangle = new Triangle([10, 20, 30]);
            triangle.lengths.length.should.equal(3);
        });

        it('respects the triangle inequality theorem', function () {
            var triangle = new Triangle([1, 1, 1]);
            triangle.isValid().should.equal(true);

            triangle = new Triangle([7, 5, 10]);
            triangle.isValid().should.equal(true);

            triangle = new Triangle([5, 8, 3]);
            triangle.isValid().should.equal(false);
        });
    });

    describe('get known types', function () {
        it('defines 3 known types', function() {
            var triangle = new Triangle([]);
            triangle.getKnownTypes().should.deep.equal({
                EQUILATERAL: 'EQUILATERAL TRIANGLE (A triangle with three congruent sides)',
                SCALENE: 'SCALENE TRIANGLE (A triangle with no congruent sides)',
                ISOSCELE: 'ISOSCELE TRIANGLE (A triangle with at least two congruent sides)'
            });
        });
    });

    describe('get types', function () {
        it('expects to be a SCALENE triangle', function() {
            var triangle = new Triangle([7, 5, 10]);
            triangle.getTypes().length.should.equal(1);
            triangle.getTypes().should.deep.equal([ triangle.getKnownTypes().SCALENE ]);
            triangle.getTypes().should.not.contains(triangle.getKnownTypes().EQUILATERAL);
            triangle.getTypes().should.not.contains(triangle.getKnownTypes().ISOSCELE);
        });
        it('expects to be a ISOSCELE triangle', function() {
            var triangle = new Triangle([7, 7, 5]);
            triangle.getTypes().length.should.equal(1);
            triangle.getTypes().should.contains(triangle.getKnownTypes().ISOSCELE);
            triangle.getTypes().should.not.contains(triangle.getKnownTypes().EQUILATERAL);
            triangle.getTypes().should.not.contains(triangle.getKnownTypes().SCALENE);
        });

        it('expects to be an EQUILATERAL & ISOSCELE triangle', function() {
            var triangle = new Triangle([1, 1, 1]);
            triangle.getTypes().length.should.equal(2);
            triangle.getTypes().should.contains(triangle.getKnownTypes().EQUILATERAL);
            triangle.getTypes().should.contains(triangle.getKnownTypes().ISOSCELE);
            triangle.getTypes().should.not.contains(triangle.getKnownTypes().SCALENE);
        });
    });
});
