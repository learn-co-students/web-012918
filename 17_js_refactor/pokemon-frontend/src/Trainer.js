const Trainer = (function(){
  console.log("================================")
  console.log("Inside the closure of Trainer.js")
  console.log("================================")

  const all = []

  return class Trainer {

    // {id, name, pokemons} - this technique is called **destructuring** added in ES6.
    // As a function parameter, you can tell it that it is going to be taking an object
    // and each word represents the variable matching the key of the inputted object.
    // AKA if I call `new Trainer(json)`, it is going to expect json to have **at least**
    // the keys of what I'm pulling out.
    constructor({id, name, pokemon}){
      this.id = id
      this.name = name
      this.pokemon = pokemon.map(pokemonData => new Pokemon(pokemonData))
      all.push(this)
    }

    render(){
      const trainerLi = document.createElement('li')
      trainerLi.dataset.id = this.id
      trainerLi.innerText = this.name

      return trainerLi
    }

    static all(){
      return [...all]
    }
  }
})()
