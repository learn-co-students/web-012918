import React, { Component } from 'react';

class Child extends Component {


  componentWillMount(){
    console.log("child will mount")
  }

  componentDidMount(){
    console.log("child did mount")
  }

  componentWillUnmount(){
    console.log("child will unmount")
  }

  render() {
    console.log("render child");
    return (
      <div className="child">
      
      </div>
    );
  }
}

export default Child;
