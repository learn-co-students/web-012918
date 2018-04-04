import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import List from './components/List';
import ListAdder from './components/ListAdder';


class App extends Component {

  state = {
    items: [
      {
        done: true,
        name: "Walk the cat",
        key: "walk-cat"
      },
      {
        done: false,
        name: "Do my taxes",
        key: "do-taxes"
      }
    ]
  }

  flipItem(listItem) {
    return {
      ...listItem,
      done: !listItem.done,
    }
  }



  itemChecked = (e) => { 

    console.log(e.target.id)

    let keyOfTheOne = e.target.id;

    let indexOfTheOne = this.state.items.findIndex((item) => item.key == keyOfTheOne)

    let checkedItem = this.flipItem(this.state.items[indexOfTheOne])

    let onesBefore = this.state.items.slice(0, indexOfTheOne)
    let onesAfter = this.state.items.slice(indexOfTheOne + 1)

    const newItems = [...onesBefore, checkedItem, ...onesAfter]

    this.setState({
      items: newItems
    })
  }

  newListItem = (listItem) => {
    this.setState({
      items: [...this.state.items, listItem]
    })
  }

  render() {
    console.log(this.state);
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <ListAdder newListItem={ this.newListItem } />
        <List items={ this.state.items } itemChecked={ this.itemChecked } />
      </div>
    );
  }
}

export default App;
