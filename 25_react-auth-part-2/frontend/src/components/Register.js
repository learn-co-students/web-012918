import React, { Component } from 'react';
import gat from '../modules/gat';

export default class Register extends Component {
  
  state = {
    username: "",
    password: "",
    errors: []
  }

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    gat.register(this.state.username, this.state.password)
      .then((req) => req.json())
      .then((data) => {
        if (data.errors) {
          this.setState({
            errors: data.errors
          });
        } else {
          this.setState({ errors: [] }) //clear any errors in state
          this.props.registeredCallback(data) //set snacks to parent state
          this.props.history.push("/snacks"); //go to snacks
        }
      });
  }

  render() {
    return (
      <div>
        <h1>Register</h1>
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
