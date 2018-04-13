import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import gat from '../modules/gat';

export default class Snacks extends Component {

  state =  {
    snacks: []
  }

  tryToGetSnacks = (propsToLookAt) => {
    if (propsToLookAt.auth) {
      console.log(propsToLookAt)
      gat.snacks(propsToLookAt.auth.user_id, propsToLookAt.auth.token)
      .then((req) => req.json())
      .then((data) => this.setState({
        snacks: data
      }))
    }
  }

  componentDidMount() { 
    this.tryToGetSnacks(this.props)
  }

  componentWillReceiveProps(nextProps){
    this.tryToGetSnacks(nextProps)
  }

  loginLink() {
    return this.props.auth ? "" : <Link to="/login">Not logged in!!!!!</Link> 
  }

  snacks = () => {
    return this.state.snacks.map((snack) => <li key={ snack.id }><h2>{ snack.name }</h2></li>)
  }

  render() {
    return (
      <div>
        <h1>Snacks</h1>
        { 
          this.loginLink() 
        }
        <ul>
        {
          this.snacks()
        }
        </ul>
      </div>
    );
  }
}
