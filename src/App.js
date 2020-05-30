import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import contacts from './contacts.json';
import Contacts from './Components/Contacts'

// let contactArray = [...contacts.slice(0,4)]
// console.log("contactArray" + contactArray)

class App extends Component {





//   for adding a random contact you probably want to 
//   (1) create a copy of the current array 
//   (2) push to that copy 
//   (3) set that copy as the new contacts array in the state
// (or you find a method that does not mutate the original array but 
// returns a new array with one element added )

//concat    <===== use this instead of MATH.RANDOM

// _.sample(contacts) is great to get one random one
// but then you still need to add it to the existing ones 
// and then set that as the new state

  addRandomHandler = () => {

    this.setState({
      contacts: contacts.concat('randomCelebirty!!!') 
    })
  }

render() {
  return (
    <div className="App">
    <h1>ironContacts</h1>
    <button onClick={this.addRandomHandler}>Add Random Contact</button>
    <Contacts key={contacts.id}></Contacts>
    </div>
  );
  
}
}

export default App;
