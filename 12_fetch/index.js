document.addEventListener('DOMContentLoaded', function(){
  const POKEAPI_URL = "https://prince-pokedex.herokuapp.com/"


  const getAllPokemon = () => {
    return fetch(`${POKEAPI_URL}/pokemons`)
            .then( res => { return res.json() })
  }

  const getPokemon = (id) => {
    return fetch(`${POKEAPI_URL}/pokemons/${id}`)
            .then( res => { return res.json() })
  }

  const renderPokemon = () => {
    const pokeNav = document.getElementById("pokemon-nav")
    getAllPokemon()
    .then(json => {
      console.log(json)
      json.map(pokemon => {
        const pokeItem = document.createElement('div')
        pokeItem.setAttribute('class', 'poke-item')
        pokeItem.innerText = `${pokemon.name} (#${pokemon.pokemon_id})`

        pokeItem.addEventListener('click', function(event){
          let prev = document.querySelector(".selected")
          if(prev) {
              prev.classList.remove('selected');
          }
          pokeItem.classList += " selected"
          getPokemon(pokemon.pokemon_id)
            .then(json => {
              detailPokemon(json)
            })
        })
        pokeNav.append(pokeItem)
      })
    })
  }

  const detailPokemon = (pokemon) => {
    const pokeDetail = document.getElementById('pokemon-detail')
    pokeDetail.innerHTML = ""

    pokeDetail.innerHTML = `<h2>${pokemon.name} (#${pokemon.pokemon_id})</h2>
    <p>Type 1: ${pokemon.type1}</p>`
    if(pokemon.type2){
      pokeDetail.innerHTML += `Type 2: ${pokemon.type2}`
    }

    pokeDetail.innerHTML += `<ul>
    <li>HP: ${pokemon.hp}</li>
    <li>Attack: ${pokemon.attack}</li>
    <li>Defense: ${pokemon.defense}</li>
    </ul>`
  }

  // getAllPokemon()
  // .then(console.log)
  renderPokemon()
})
