import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import contactsFromJson from './contacts.json';
import Contacts from './Components/Contacts'
import _ from 'lodash'


class App extends Component {

  state = {
    contacts: contactsFromJson.slice(0, 5),
  };

//   To add a random contact you probably want to:
//   (1) create a copy of the current array 
//   (2) push to that copy 
//   (3) set that copy as the new contacts array in the state
// (or you find a method that does not mutate the original array but 
// returns a new array with one element added )

//concat    <===== use this instead of PUSH

// _.sample(contacts) is great to get one random one
// but then you still need to add it to the existing ones 
// and then set that as the new state

  addRandomHandler = () => {
    let randomCelebrity = _.sample(contactsFromJson)
    console.log(randomCelebrity)
    this.setState({
      contacts: this.state.contacts.concat(randomCelebrity) 
    })
  }

render() {
  // let contactsState = this.state.contacts
  // console.log(this.state.contacts[0].id)
  return (
    <div className="App">
    <h1>ironContacts</h1>
    <button onClick={this.addRandomHandler}>Add Random Contact</button>
    <Contacts />    
    {/* {contactsState.map((c) => <Contacts key={c.id} contactId={c.id} />)} */}
    </div>

  );

}
}

export default App;
