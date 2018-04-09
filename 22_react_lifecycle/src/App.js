import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Grandma from './components/Grandma'

class App extends Component {

  state = {
    grandma: true
  }



  componentWillUnmount(){

  }

  headerClick = () => {
    this.setState({
      grandma: false
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header" onClick={ this.headerClick }>
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        { this.state.grandma ? <Grandma cookies="feminism, yep" /> : "nope" }
      </div>
    );
  }
}

export default App;
