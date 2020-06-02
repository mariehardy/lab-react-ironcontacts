import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import contactsFromJson from './contacts.json';
import Contacts from './Components/Contacts';
import _ from 'lodash';

class App extends Component {

  render() {
    
    return (
      <div className="App">
        <h1>ironContacts</h1>
       <Contacts />
      </div>
    );
  }
}

export default App;
