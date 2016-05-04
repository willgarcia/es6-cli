#!/usr/bin/env node

import {ShapeFactory} from '../lib/shape-factory.js';

var program = require('commander');
var version;

try {
    version = require('../../package.json').version;
} catch (e) {
    console.error('Error parsing "package.json".  Installation is corrupted: ', e.stack);
    version = 'unknown';
}

program
    .version(version)
;

program.on('--help', function(){
    console.log('>$ gs-shapes.js <length1> <length2> <length3> <...>');
    console.log('  Examples:');
    console.log('');
    console.log('    $ gs-shapes.js 1 1 1');
    console.log('    $ gs-shapes.js 1 1 1 1');
    console.log('');
});

function main() {
    var argv = process.argv;
    program.parse(argv);

    var shapeFactory = new ShapeFactory(program.args);

    var shape = shapeFactory.build();
    if (shape && shape.isValid()) {
        console.log(shape.toString());
    } else {
        console.log('ERROR. See usage with --help.');
        console.error.apply(console.error, arguments);
        process.exit(1);
    }
    program.parse(argv);
}

module.exports = program;

if (module.parent === null) {
    main();
}
