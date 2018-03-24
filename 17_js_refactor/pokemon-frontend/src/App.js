const App = (function(){

  const BASE_URL = "http://localhost:3000"

  // Fetch request to get all trainers
  let getAllTrainers = () => {
    return fetch(`${BASE_URL}/trainers`)
    .then(res => res.json())
  }

  let deletePokemon = (pokemonId) => {
    return fetch(`${BASE_URL}/pokemons/${pokemonId}`, {
      method: "DELETE"
    })
    .then(res => res.json())
  }

  return class App {
    static init() {

      console.log("App has been called.")
      console.log("It will run all of our app's logic")
      console.log("-----------------------------------------")

      // Inside of our static methods, we can have access to adding variables
      // onto our class that may be reused elsewhere
      App.trainerContainer = document.getElementById("trainer-container")
      App.trainerPanel = document.getElementById("trainer-panel")

      App.displayTrainers()
    }

    // Will make sure to display all of our trainers onto the page. Also will
    // make sure to add the event listener for clicking onto a trainer
    static displayTrainers(){
      getAllTrainers()
      .then(trainersJsonArray => {
        let trainers = trainersJsonArray.map(trainerJSON => new Trainer(trainerJSON))

        trainers.forEach(trainer => {
          let trainerLi = trainer.render()
          trainerLi.addEventListener('click', App.handleTrainerPanelReveal)
          App.trainerContainer.append(trainerLi)
        })
      })
    }

    // This gets called whenever we click onto our particular trainerLi
    // It will handle the logic of what to render next
    static handleTrainerPanelReveal(event){
      App.trainerPanel.innerHTML = ""

      let trainerId = parseInt(event.target.dataset.id)

      // This is just one way to avoid making a fetch request, this however,
      // works simply because our data is small. As we store more and more onto
      // the page, it may make more sense to simply make a request to get
      // the data we need rather than keeping all of it within local storage
      let trainer = Trainer.all().find(trainer => trainer.id === trainerId)

      let trainerName = document.createElement('h3')
      trainerName.innerText = trainer.name

      let pokemonContainer = document.createElement('ul')

      trainer.pokemon.forEach(pokemon => {
        let pokemonLi = pokemon.render()
        pokemonContainer.append(pokemonLi)
      })

      pokemonContainer.addEventListener('click', App.handleRelease)

      App.trainerPanel.append(trainerName)
      App.trainerPanel.append(pokemonContainer)
    }

    // Handles the release of a pokemon. It makes sure to check if what
    // we are clicking is a button tag since we added it to our pokemonContainer
    static handleRelease(event){
      if(event.target.tagName === "BUTTON"){
        let pokemonId = parseInt(event.target.parentNode.dataset.id)
        event.target.parentNode.remove()

        deletePokemon(pokemonId)
      }
    }
  }
})()
