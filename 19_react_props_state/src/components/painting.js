import React from 'react'

export default class Painting extends React.Component {




  render() {

    return <li style={ { padding: "10px" } }>
      <div>{ this.props.painting.title }</div>
      <div>
        Votes: { this.props.votes }
        <button onClick={ this.props.clickHandler }>^</button>
      </div>
      <div>{ this.props.painting.date }</div>
    </li> 
  }
}