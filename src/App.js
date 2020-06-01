import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import contactsFromJson from './contacts.json';
import Contacts from './Components/Contacts';
import _ from 'lodash';

class App extends Component {
  // state = {
  //   contacts: contactsFromJson.slice(0, 5),
  // };





  // };

  render() {
    
    return (
      <div className="App">
        <h1>ironContacts</h1>
       <Contacts />
        {/* <table className="contactTable">
          <thead>
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
            </tr>
          </thead>
          {this.state.contacts.map((c) => (
            <Contacts
              key={c.id}
              contactId={c.id}
              pictureUrl={c.pictureUrl}
              popularity={c.popularity}
              name={c.name}
            />
          ))}
        </table> */}

      </div>
    );
  }
}

export default App;
