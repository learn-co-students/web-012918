/***
  index.js

  This is the main running file, this is where we want to put all actions
  that will be reflected to our application and on the `index.html` file.
  Notice how we add event listeners here and it logically follows that this
  happens on the `index.html`.
***/


document.addEventListener("DOMContentLoaded", function() {

  let pokemonContainer = document.getElementById('pokemon-container')
  let pokemonSearchBar = document.getElementById('pokemon-search-input')

  // Add the event listener so that every time we put an input
  // we will re-render the page
  pokemonSearchBar.addEventListener('input', function(event){
    pokemonContainer.innerHTML = ""
    let pokemonFilter = pokemon.pokemons            // Represents our dabatase from `db.json`

    // Conditional to make sure we start with an empty page if the search bar is empty
    if(pokemonSearchBar.value !== ""){

      // Here we want to filter everything out that doesn't include what we have in our search value
      pokemonFilter.filter(function(element){
        return element.name.includes(pokemonSearchBar.value)
      })
      .forEach(function(pokeData){
        // Run through the results of our filter and render it onto the page
        let poke = new Pokemon(pokeData.name, pokeData.sprites).render()
        pokemonContainer.append(poke)
      })
    }
  })
})
