[![Build Status](https://travis-ci.org/oliviernt/sv-number-generator.svg?branch=master)](https://travis-ci.org/oliviernt/sv-number-generator)

# SV-Number Generator

This is a little util that allows to generate German SV-Numbers (also Rentenversicherungsnummer) for testing purposes.

## Installation

Run `npm install` or `yarn`

## Usage

```javascript
const generateSV = require('sv-number-generator');

const birthday = '190585'; // 19.05.1985

const svNumber = generateSV(birthday);

// svNumber -> 02190585A502
```

## Tests

Run `npm test` or `yarn test`
