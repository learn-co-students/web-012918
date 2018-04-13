import React, { Component } from 'react';
import gat from '../modules/gat';

export default class Login extends Component {

  state = {
    username: "",
    password: "",
    errors: []
  }


  handleSubmit = (e) => {
    e.preventDefault()
    gat.login(this.state.username, this.state.password)
      .then((req) => req.json())
      .then((data) => {
        if (data.errors) {
          this.setState({
            errors: data.errors
          })
        } else {
          this.setState({ errors: [] }) //clear any errors in state
          this.props.loggedInCallback(data) //set snacks to parent state
          this.props.history.push("/snacks"); //go to snacks
        }
      })
  }

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {
    return (
      <div>
        <h1>Login</h1>
        <ul>{
          this.state.errors.map((error) => <li>{error}</li>)
        }</ul>
        <form onSubmit={ this.handleSubmit }>
          <label htmlFor="username">Username</label>
          <input onChange={ this.onChange } value={ this.state.username } type="text" name="username" id="username" />
          <label htmlFor="password">Password</label>
          <input onChange={ this.onChange } value={ this.state.password } type="password" name="password" id="password" />
          <input type="submit" />
        </form>
      </div>
    );
  }
}
