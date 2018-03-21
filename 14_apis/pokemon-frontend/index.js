/*
  This is a pretty large file right?
  All of this code works but it is a bit hard to understand
  each logical step. You can check out the other files and
  see how we can break apart this logic into more maintainable
  pieces.
*/
document.addEventListener('DOMContentLoaded', function(){
  // From the Discussion Question
  // This syntax stores the result of our promises and we can use it elsewhere
  // var data = fetch("http://randomuser.me/api")
  //             .then(res => res.json())

  // Similar to the syntax below, all it does is wraps our fetch
  // inside of a function and we will return that
  // let getAllUsers = function() {
  //   return fetch("http://localhost:3000/users")
  //           .then(res => res.json())
  // }

  let getAllUsers = () => {
    return fetch("http://localhost:3000/users")
            .then(res => res.json())
  }

  // We can call getAllUsers() and then use our .then
  // to do any manipulations we want
  getAllUsers()
  .then(json => {
     console.log(json.filter((trainer) => {
            return trainer.pokemons.length >= 1
          }))
  })


  // Here we do everything that handles our logic for our loading our trainers
  // and giving them an event listener for what should happen when they get clicked
  getAllUsers()
  .then(json => {
    let trainersContainer = document.getElementById('trainers-container')
    json.forEach(trainer => {
      let trainerDiv = document.createElement('div')
      trainerDiv.innerText = trainer.name

      trainerDiv.addEventListener('click', function(event){
        let pokemonContainer = document.getElementById('pokemon-container')
        pokemonContainer.innerHTML = ""

        trainer.pokemons.forEach(pokemon => {
          let pokemonLi = document.createElement('li')

          pokemonLi.innerText = `${pokemon.name} (${pokemon.species})`

          pokemonContainer.append(pokemonLi)

          // Same as the line above, but concats the innerHTML of both
          // pokemonContainer.innerHTML += pokemonLi.innerHTML
        })
      })

      trainersContainer.append(trainerDiv)
    })
  })
})
