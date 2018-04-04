import React, { Component } from 'react';
import ListItem from './ListItem';

class List extends Component {

  

  

  render() {
    const listItems = this.props.items.map((item) =>  {
      return <ListItem key={ item.key } item={ item } itemChecked={ this.props.itemChecked } />
    });
    return (
      <ul>
        { listItems }
      </ul>
    );
  }
}

export default List;
