var chai = require('chai');

import {ShapeFactory} from '../../src/lib/shape-factory.js';
import {Triangle} from '../../src/lib/triangle.js';

chai.should();

describe('ShapeFactory', function () {
    describe('builds', function () {
        it('expects to build a triangle', function () {
            var shapeFactory = new ShapeFactory([1,1,1]);
            shapeFactory.build().should.be.instanceof(Triangle);
        });

        it('expects to build nothing (unsupported shape)', function () {
            var shapeFactory = new ShapeFactory([]);
            chai.expect(shapeFactory.build()).to.be.undefined;
        });

    });
});
