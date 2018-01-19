import React, { Component } from 'react';
import './App.css';
import SvNumber from './SvNumber'
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      geburtstag: '',
      ersterBuchstabeGeburtsname: 'A',
      bereichsnummer: '02',
      seriennummer: ''
    };

    this.changeGeburtstag = this.changeGeburtstag.bind(this);
    this.changeErsterBuchstabeGeburtsname = this.changeErsterBuchstabeGeburtsname.bind(this);
    this.changeBereichsnummer = this.changeBereichsnummer.bind(this);
    this.changeSeriennummer = this.changeSeriennummer.bind(this);
  }

  changeGeburtstag(event) {
    this.setState({ geburtstag: event.target.value })
  }
  changeErsterBuchstabeGeburtsname(event) {
    this.setState({ ersterBuchstabeGeburtsname: event.target.value.toUpperCase() })
  }
  changeBereichsnummer(event) {
    this.setState({ bereichsnummer: event.target.value })
  }  
  changeSeriennummer(event) {
    this.setState({ seriennummer: event.target.value })
  }

  render() {
    return (
      <div>
        <AppBar title="SV-Nummer Generator" showMenuIconButton={false} />
        <form className="Canvas">
          <div>
            <TextField 
                floatingLabelText="Geburtstag"
                hintText="Format: TTMMJJ Bsp.: 010199"
                min="6"
                max="6" 
                fullWidth={true}
                value={this.state.geburtstag}
                onChange={this.changeGeburtstag} />
          </div>
          <div>
            <TextField
                floatingLabelText="Erster Buchstabe des Geburtsnamen"
                hintText="Erster Buchstabe des Geburtsnamen"
                min="1"
                max="1" 
                fullWidth={true}
                value={this.state.ersterBuchstabeGeburtsname}
                onChange={this.changeErsterBuchstabeGeburtsname} />
          </div>
          <div>
            <TextField
                floatingLabelText="Bereichsnummer"
                hintText="Bereichsnummer"
                min="2"
                max="2" 
                fullWidth={true}
                value={this.state.bereichsnummer}
                onChange={this.changeBereichsnummer} />
          </div>
          <div>
            <TextField
                floatingLabelText="Seriennummer"
                hintText="Format: ## Männer: 00-49 Frauen: 50-99 Bsp.: 50"
                min="2"
                max="2"
                fullWidth={true}
                value={this.state.seriennummer}
                onChange={this.changeSeriennummer} />
          </div>

          <p>
            SV-Nummer: <SvNumber
              geburtstag={this.state.geburtstag} 
              ersterBuchstabeGeburtsname={this.state.ersterBuchstabeGeburtsname}
              bereichsnummer={this.state.bereichsnummer}
              seriennummer={this.state.seriennummer} />
          </p>
        </form>
      </div>
    );
  }
}

export default App;
