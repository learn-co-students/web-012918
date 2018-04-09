import React, { Component } from 'react';
import Parent from './Parent'




class Grandma extends Component {


  state = {
    rand: 0
  }

  componentDidMount() {
    fetch("https://random.dog/woof.json").then((dataString) =>  
      dataString.json()).then((dataJson) => this.setState({
        cat: dataJson.url
      }));
  }

  // shouldComponentUpdate(nextProps, nextState){
  //   console.log(nextProps)
  //   console.log(nextState)
  // }

  componentWillMount(){
    console.log("grandma will mount")
  }


  // componentDidMount(){
  //   console.log("grandma did mount")
  // }

  componentWillUnmount(){
    clearInterval(this.interval)

    console.log("grandma will unmount")
  }


  render() {
    console.log("render grandma");
    return (
      <div className="grandma">
        <img src={ this.state.cat } />
        <Parent />
      </div>
    );
  }
}

export default Grandma;
