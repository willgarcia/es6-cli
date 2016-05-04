import {Shape} from '../lib/shape.js';

export class Triangle extends Shape {

    getKnownTypes() {
        
        return {
            EQUILATERAL: 'EQUILATERAL TRIANGLE (A triangle with three congruent sides)',
            SCALENE: 'SCALENE TRIANGLE (A triangle with no congruent sides)',
            ISOSCELE: 'ISOSCELE TRIANGLE (A triangle with at least two congruent sides)'
        };
    }

    constructor(lengths) {
        super(lengths);
    }


    isValid() {
        if (!(super.isValid() && this.lengths.length == 3)) {
            if (process.env.NODE_ENV !== 'test') {
                console.error('ERROR\n==> Details: Failed to validate input data\n----> Please ensure that each length is a valid *integer* >0 (float unauthorized)');
            }

            return false;
        }

        if (false == ((this.lengths[0] + this.lengths[1] > this.lengths[2])
        && (this.lengths[0] + this.lengths[2] > this.lengths[1])
        && (this.lengths[1] + this.lengths[2] > this.lengths[0])
        )) {
            if (process.env.NODE_ENV !== 'test') {
                console.error('ERROR\n==> Details: Unexpected lengths with respect to the triangle inequality theorem.\n----> The sum of two side lengths of a triangle is always greater than the third side)');
            }

            return false;
        }

        return true;
    }

    getTypes() {

        let defaultTypes = [ this.getKnownTypes().SCALENE ];
        let types = [];

        if((this.lengths[0] == this.lengths[1]) && (this.lengths[0] == this.lengths[2])) {
            types.push(this.getKnownTypes().EQUILATERAL);
        }

        if((this.lengths[0] == this.lengths[1]) || (this.lengths[0] == this.lengths[2]) || (this.lengths[2] == this.lengths[1])) {
            types.push(this.getKnownTypes().ISOSCELE);
        }

        if (types.length > 0 ) {

            return types;
        }

        return defaultTypes;

    }
}
