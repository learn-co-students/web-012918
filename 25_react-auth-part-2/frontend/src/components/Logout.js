import { Component } from 'react';

export default class Logout extends Component {

  componentDidMount(){
    this.props.logout(this.props.history)
  }

  render(){
    return null;
  }
}
