// This will represent the Pokemon objects we want
// Notice that the render method will render out Pokemon
class Pokemon {
  constructor(name, species){
    this.name = name
    this.species = species
  }

  render() {
    let pokemonLi = document.createElement('li')
    pokemonLi.innerText = `${this.name} (${this.species})`

    return pokemonLi
  }
}
