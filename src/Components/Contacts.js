//rfce + tab ==> function component
//rcc + tab ==> class Component

import React, { Component } from 'react';
import allContacts from '../contacts.json';
import Card from './Card';
import _ from 'lodash';

export default class Contacts extends Component {
  constructor() {
    super();
    this.state = {
      contactsArr: allContacts.slice(0, 5),
    };
  }

  addRandomHandler = () => {
    // Either we create a copy of the array and then push to (mutate) the original array.
    // let contactsArrCopy = [...this.state.contactsArr]
    // contactsArrCopy.push(randomCelebrity)
    let randomCelebrity = _.sample(allContacts);
    if (!_.find(this.state.contactsArr, { id: randomCelebrity.id })) {
      this.setState({
        contactsArr: this.state.contactsArr.concat(randomCelebrity),
      });
    }
  };

  sortByNameHandler = () => {
    this.setState({
      contactsArr: _.sortBy(this.state.contactsArr, 'name'),
    });
  };

  sortByPopularityHandler = () => {
    this.setState({
      contactsArr: _.sortBy(this.state.contactsArr, 'popularity').reverse()
    });
  };

  deleteMovieHandler = (id) => {
    const contactsCopy = [...this.state.contactsArr];
    const contactsIndex = contactsCopy.findIndex((c) => c.id === id);
    contactsCopy.splice(contactsIndex, 1);
    this.setState({
      contactsArr: contactsCopy,
    });
  };

  render() {
    console.log(this.state.contactsArr);

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
        {this.state.contactsArr.map((c) => {
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
