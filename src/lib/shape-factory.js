import {Triangle} from '../lib/triangle.js';

export class ShapeFactory {

    constructor(lengths) {
        this.lengths = lengths;
    }

    build(){
        if (this.lengths instanceof Array
            && this.lengths.length == 3) { // const/static variables does not exist in ES2016 (ES6)

            return new Triangle(this.lengths);
        }
    }
}


