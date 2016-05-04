export class Shape {

    constructor(lengths) {
        this.lengths = [];
        for (let value of lengths) {
            if (Number.isInteger(Number(value)) && Math.sign(value) == 1) {
                this.lengths.push(Number(value));
            }
        }
    }

    toString() {

        return '* ' + this.getTypes().join('\n* ');
    }

    getTypes() {

        return ['Error'];
    }

    isValid() {

        if (!this.lengths instanceof Array) {

            return false;
        }

        return true;
    }

}


