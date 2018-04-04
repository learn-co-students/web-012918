import React, { Component } from 'react';

class ListItem extends Component {

  render() {
    const item = this.props.item;
    return (
      <li>
        <input onChange={ this.props.itemChecked } type="checkbox" id={ item.key } checked={ item.done } />
        <label htmlFor={ item.key }>{ item.name }</label>
      </li>
    );
  }
}

export default ListItem;
