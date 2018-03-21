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
    json.forEach(trainerData => {
      let trainer = new Trainer(trainerData.name, trainerData.email, trainerData.eye_color, trainerData.gender, trainerData.pokemons)
      trainersContainer.append(trainer.render())
    })
  })
})
