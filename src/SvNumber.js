import generateSV from 'sv-number-generator'

function SvNumber(props) {
    return generateSV(
        props.geburtstag || '010199',
        props.ersterBuchstabeGeburtsname || 'A',
        props.bereichsnummer || '02',
        props.seriennummer || '50'
    )
}

export default SvNumber;
