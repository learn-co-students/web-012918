import React from 'react'
import Painting from './painting'
import data from '../data.js'


export default class PaintingList extends React.Component {


  constructor(){
    super()
    this.state = { data };
  }


  clickHandler = () => {

    console.log("hello from click handler")


    this.setState({
      
    })

    // this.setState({
    //   votes: this.state.votes + 1
    // }, ()=> {
    //   console.log("line 19", this.state);
    // })

  }


  render() {
    const paintings = this.state.data.map((painting) => <Painting key={painting.id} painting={ painting } clickHandler={ this.clickHandler } />);
    return (<div>
      <button>Upvote All</button>
      <ol>
        { paintings }
      </ol>
    </div>);
  } 
}