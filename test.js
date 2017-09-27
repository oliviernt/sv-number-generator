#!/usr/bin/env node
const assert = require('assert');

describe('sv-number-generator', () => {
    const generate = require('./index');

    describe('given valid input', () => {
        it('generates valid sv-numbers', () => {

          assert.equal(generate(), '0201011999A508');
          assert.equal(generate('181279', 'M'), '02181279M507');
        });
    });

    // TODO: add more tests
});
