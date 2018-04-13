import React, { Component } from 'react';
import Register from './components/Register';
import Login from './components/Login';
import Logout from './components/Logout';
import Snacks from './components/Snacks';
import { Route, Switch, Link } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  state = {
    auth: null
  }

  componentDidMount(){
    if (localStorage.user) {
      this.setState({
        auth: JSON.parse(localStorage.user)
      }, ()=> {
        console.log(this.state)
      })
    }
  }

  gotAuthToken = (user) => {
    this.setState({
      auth: user
    })
    localStorage.user = JSON.stringify(user)
  }

  logout = (history) => {
    localStorage.user = ""
    this.setState({
      auth: null
    }, () => history.push("/"))
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
          <Link to="/register">Register</Link>
          <Link to="/login">Login</Link>
          <Link to="/logout">Logout</Link>
          <Link to="/snacks">Snacks</Link>
        </header>
        <Switch>
          <Route path="/register" render={ (renderProps) => {
            return <Register registeredCallback={ this.gotAuthToken } history={ renderProps.history } />;
          } } />
          <Route path="/login" render={ (renderProps) => {
            return <Login loggedInCallback={ this.gotAuthToken } history={ renderProps.history } />;
          } } />
          <Route path="/snacks">
            <Snacks auth={ this.state.auth }/>
          </Route>
          <Route path="/logout" render={ (renderProps) => {
            return <Logout logout={ this.logout } history={ renderProps.history } />;
          } } />
        </Switch>
      </div>
    );
  }
}

export default App;
