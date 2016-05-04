# GS-shapes - A node.js command-line tool for classifying types of shapes.

## CLI

The CLI-tool receives N integers inputs for the lengths of the sides of a shape and try to determine the type of the shape.

Triangle is the only shape supported. The values passed as arguments are processed to find the triangle type:
* Scalene
* Isosceles
* Equilateral
* Error

## Pre-requisites

The project has dependencies that require Node 4 or greater versions.

You can use either:

* a Docker image with Node.js 4 pre-installed (recommended):

```
docker run --interactive --tty --rm --name gs-shapes --volume "$PWD":/nodejs/src/app node:4-onbuild /bin/bash
```

* NVM (not recommended, local installation):
 * `curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.31.0/install.sh | bash`
 * nvm install 4.0
 * nvm use 4.0
 
## Libraries/languages in use:

* Javascript [ES2015](http://www.ecma-international.org/ecma-262/6.0/index.html) (ES6)
* [Node.js](https://nodejs.org)
* Unit testing with [Mocha](https://mochajs.org/) in combination with BDD styles via [Chai](http://chaijs.com/)

## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [Running Unit Tests](#running-unit-tests)
* [Linting code](#linting-code)

## Installation

**BEFORE YOU INSTALL:** please read the [prerequisites](#prerequisites)

Npm installation:

```
$ make install
```

ES6 transpilation:

```
$ make build
```

## Usage

```bash
$ ./build/cli/gs-shapes.js -h
```

Or:

```bash
$ gs-shapes.js <length1> <length2> <length3> <...>
```

If needed, please check the exit status code of the command with `echo $?`

### Examples

#### Invalid input data

```
$ ./build/cli/gs-shapes.js 2 2 4.5
ERROR
==> Details: Failed to validate input data
----> Please ensure that each length is a valid *integer* >0 (float unauthorized)
ERROR. See usage with --help.
```

#### Invalid triangle lengths

```
$ ./build/cli/gs-shapes.js 1 7 5
ERROR
==> Details: Unexpected lengths with respect to the triangle inequality theorem.
----> The sum of two side lengths of a triangle is always greater than the third side)
ERROR. See usage with --help.
```

#### Scalene triangle

```
$ ./build/cli/gs-shapes.js 2 9 8
* SCALENE TRIANGLE (A triangle with no congruent sides)
```

#### Equilateral triangle

An equilateral triangle is isoscele by extension.

```
$ ./build/cli/gs-shapes.js 10000 10000 10000
* EQUILATERAL TRIANGLE (A triangle with three congruent sides)
* ISOSCELE TRIANGLE (A triangle with at least two congruent sides)
```

#### Isoscele triangle

```
$ ./build/cli/gs-shapes.js 10000 10000 1000
* ISOSCELE TRIANGLE (A triangle with at least two congruent sides)
```

## Running unit tests

Tests are located in the `test` directory

```bash
make test
```

Output:

```
NODE_ENV=test ./node_modules/.bin/mocha --require babel-core/register --reporter spec test/**/*.spec.js


  ShapeFactory
    builds
      ✓ expects to build a triangle
      ✓ expects to build nothing (unsupported shape)

  Shape
    is valid
      ✓ expects an array of lengths
      ✓ expects each length to be an integer >0

  Triangle
    is valid
      ✓ expects 3 lengths for the triangle sides
      ✓ respects the triangle inequality theorem
    get known types
      ✓ defines 3 known types
    get types
      ✓ expects to be a SCALENE triangle
      ✓ expects to be a ISOSCELE triangle
      ✓ expects to be an EQUILATERAL & ISOSCELE triangle


  10 passing (32ms)
  ```
  

## Linting code

This command uses an ESLinter:

```bash
make lint
```
