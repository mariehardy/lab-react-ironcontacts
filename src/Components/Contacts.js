//rfce + tab ==> function component
//rcc + tab ==> class Component

import React, { Component } from 'react';
import contactsFromJson from '../contacts.json';
import Card from './Card';
import _ from 'lodash';

export default class Contacts extends Component {
  constructor() {
    super();
    this.state = {
      contacts: contactsFromJson.slice(0, 5),
    };
  }

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
    let randomCelebrity = _.sample(contactsFromJson);
    if (!_.find(this.state.contacts, { id: randomCelebrity.id })) {
      this.setState({
        contacts: this.state.contacts.concat(randomCelebrity),
      });
    }
  };

  sortByNameHandler = () => {
    this.setState({
      contacts: _.sortBy(this.state.contacts, 'name'),
    });
  };

  sortByPopularityHandler = () => {
    this.setState({
      contacts: _.sortBy(this.state.contacts, 'popularity').reverse()
    });
  };

  deleteMovieHandler = (id) => {
    const contactsCopy = [...this.state.contacts];
    const contactsIndex = contactsCopy.findIndex((c) => c.id === id);
    contactsCopy.splice(contactsIndex, 1);
    this.setState({
      contacts: contactsCopy,
    });
  };

  render() {
    console.log(this.state.contacts);

    return (
      <table className="contactTable">
        <button onClick={this.addRandomHandler}>Add Random Contact</button>
        <button onClick={this.sortByNameHandler}>Sort By Name</button>
        <button onClick={this.sortByPopularityHandler}>
          Sort By Popularity
        </button>

        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
          </tr>
        </thead>
        {this.state.contacts.map((c) => {
          return (
            <Card
              key={c.id}
              {...c}
              clickToDelete={() => this.deleteMovieHandler(c.id)}
            />
          );
        })}
      </table>
    );
  }
}
