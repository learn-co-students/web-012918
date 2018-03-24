console.log("================================")
console.log("Inside the of Pokemon.js")
console.log("================================")

class Pokemon {
  constructor({id, nickname, species}){
    this.id = id
    this.nickname = nickname
    this.species = species
  }

  render() {
    let pokemonLi = document.createElement('li')
    pokemonLi.innerText = `${this.nickname} (${this.species})`
    pokemonLi.dataset.id = this.id
    
    let releaseButton = document.createElement('button')
    releaseButton.innerText = "RELEASE"

    pokemonLi.append(releaseButton)

    return pokemonLi
  }
}
