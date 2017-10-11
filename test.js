#!/usr/bin/env node
const assert = require('assert');

describe('sv-number-generator', () => {
    const generate = require('./src/sv-number-generator');

    describe('given valid input', () => {
        it('generates valid sv-numbers', () => {

          assert.equal(generate(), '0201011999A508');
          assert.equal(generate('181279', 'M'), '02181279M507');
          assert.equal(generate('111166', 'A', '02', '00'), '02111166A007');
        });
    });

    // TODO: add more tests
});
