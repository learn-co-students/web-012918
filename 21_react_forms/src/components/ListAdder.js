import React, { Component } from 'react';
import UUID from 'uuid';


class ListAdder extends Component {

  DEFAULT_STATE = {
    name: "",
    description: "",
    mood: "sass",
    done: false
  }

  constructor(){
    super()
    this.state = Object.assign({}, this.DEFAULT_STATE);
  }


  handleChange = (e) => {
    var foo = "bar";
    this.setState({
      [e.target.name]: e.target.value
    })
  } 

  handleSubmit = (e) => {
    console.log(UUID());
    e.preventDefault();
    this.props.newListItem(
      {
        ...this.state,
        key: UUID()
      });
    this.setState({ ...this.DEFAULT_STATE })
  }   

  render() {
    return (
      <form onSubmit={ this.handleSubmit }>
        <label htmlFor="input-name">Name</label>
        <input onChange={ this.handleChange } type="text" name="name" id="input-name" value={ this.state.name } />
        <label htmlFor="input-description">Description</label>
        <input onChange={ this.handleChange } type="text" name="description" id="input-description" value={ this.state.description }  />
        <label htmlFor="input-mood">Mood</label>
        <select onChange={ this.handleChange } name="mood" id="input-mood" value={ this.state.mood }>
          <option value="happy">😃</option>
          <option value="sob">😭</option>
          <option value="stress">😰</option>
          <option value="nuked">🤯</option>
          <option value="shock">😳</option>
          <option value="sass">💁‍</option>
        </select>
        <input type="submit" />
      </form>
    );
  }
}

export default ListAdder;
