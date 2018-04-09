import React, { Component } from 'react';
import Child from './Child'


class Parent extends Component {


  componentWillMount(){
    console.log("parent will mount")
  }

  componentDidMount(){
    console.log("parent did mount")
  }

  componentWillUnmount(){
    console.log("parent will unmount")
  }


  render() {
    console.log("render parent")
    return (
      <div className="parent">
        <Child />
        <Child />
        <Child />
        <Child />
      </div>
    );
  }
}

export default Parent;
