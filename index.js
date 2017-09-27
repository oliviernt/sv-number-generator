'use strict';

/**
 * generate a new sv-number with given values.
 */
function generate(geburtsdatum = '01011999', ersterBuchstabeGeburtsname = 'A', bereichsnummer = '02', seriennummer = '50') {

    if (seriennummer < 0 || seriennummer > 99) {
        throw Error('Seriennummer must be equal to or between 0 and 99');
    }

    // TODO: validate all parameters

    let svNummer = bereichsnummer + geburtsdatum + ersterBuchstabeGeburtsname + seriennummer;

    return svNummer + pruefsummeBerechnen(ersterBuchstabeGeburtsname, bereichsnummer + geburtsdatum, seriennummer);
}


function pruefsummeBerechnen(ersterBuchstabeGeburtsname, bereichsnummerUndGeburtsdatum, seriennummer) {

    let middleCharacterOrdinal = ersterBuchstabeGeburtsname.charCodeAt(0) - 65 + 1;
    let middleCharacterAsNumber = middleCharacterOrdinal < 10 ? '0' + middleCharacterOrdinal : '' + middleCharacterOrdinal;
    let factors = [ 2, 1, 2, 5, 7, 1, 2, 1, 2, 1, 2, 1 ];
    let mappedValues = (bereichsnummerUndGeburtsdatum + middleCharacterAsNumber + seriennummer)
        .split('')
        .map((x) => x.charCodeAt(0) - 48);

    let sum = factors
        .map((factor, index) => mappedValues[index] * factor)
        .reduce((agregator, product) => agregator + Math.floor(product / 10) + Math.floor(product % 10));

    return Math.floor(sum % 10);
}

module.exports = generate;
