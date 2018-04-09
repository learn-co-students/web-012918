import React, { Component } from 'react';

export default class SpiceGirl extends Component {

    render(){
        // console.log(this.props)
        return (
           <article>
            <h2>{ this.props.adjective || this.adjective() } Spice</h2>
            <img src={ this.props.gif || (this.gif ? this.gif() : "") } alt="Spice" />
           </article> 
        );
    }
}

