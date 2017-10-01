'use strict';

/**
 * generate a new sv-number with given values.
 */

function generate() {
    var geburtsdatum = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '01011999';
    var ersterBuchstabeGeburtsname = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'A';
    var bereichsnummer = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '02';
    var seriennummer = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : '50';


    if (seriennummer < 0 || seriennummer > 99) {
        throw Error('Seriennummer must be equal to or between 0 and 99');
    }

    // TODO: validate all parameters

    var svNummer = bereichsnummer + geburtsdatum + ersterBuchstabeGeburtsname + seriennummer;

    return svNummer + pruefsummeBerechnen(ersterBuchstabeGeburtsname, bereichsnummer + geburtsdatum, seriennummer);
}

function pruefsummeBerechnen(ersterBuchstabeGeburtsname, bereichsnummerUndGeburtsdatum, seriennummer) {

    var middleCharacterOrdinal = ersterBuchstabeGeburtsname.charCodeAt(0) - 65 + 1;
    var middleCharacterAsNumber = middleCharacterOrdinal < 10 ? '0' + middleCharacterOrdinal : '' + middleCharacterOrdinal;
    var factors = [2, 1, 2, 5, 7, 1, 2, 1, 2, 1, 2, 1];
    var mappedValues = (bereichsnummerUndGeburtsdatum + middleCharacterAsNumber + seriennummer).split('').map(function (x) {
        return x.charCodeAt(0) - 48;
    });

    var sum = factors.map(function (factor, index) {
        return mappedValues[index] * factor;
    }).reduce(function (agregator, product) {
        return agregator + Math.floor(product / 10) + Math.floor(product % 10);
    }, 0);

    return Math.floor(sum % 10);
}

module.exports = generate;