// This will represent the Trainer objects we want to create
// It will take in information that we want (need) for any trainer
// It will have a render method that will show what happens for the trainer
// (We could take our the event listener and put this on the index.js as well)
class Trainer {
  constructor(name, email, eyeColor, gender, pokemons){
    this.name = name
    this.email = email
    this.eyeColor = eyeColor
    this.gender = gender
    this.pokemons = pokemons.map(
      pokemonData => new Pokemon(pokemonData.name, pokemonData.species)
    )
  }

  render() {
    let trainerDiv = document.createElement('div')
    trainerDiv.innerText = this.name

    trainerDiv.addEventListener('click', (event) => {
      let pokemonContainer = document.getElementById('pokemon-container')
      pokemonContainer.innerHTML = ""
      this.pokemons.forEach(pokemon => {
        pokemonContainer.append(pokemon.render())
      })
    })

    return trainerDiv
  }
}
