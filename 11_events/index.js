/*
   With this event listener, we are waiting for the content of the
   DOM to be loaded. This is what allows us to write our <script>
   tags anywhere on the page even if logic is dependent on it.
*/
document.addEventListener('DOMContentLoaded', function(){

  // ADDING ONE EVENT HANDLER TO ONE ELEMENT
  // ---
  // All we have to do to add event listeners to an element is to
  // first select the element and then call `addEventListener` on it
  // with the type of the event and the function to be called later.
  // let p = document.querySelector('p')
  // p.addEventListener('click', function(event){ event.target.style.color = "blue" })


  // ADDING ONE EVENT HANDLER TO MULTIPLE ELEMENTS ONE BY ONE
  // ---
  // This technique works well when there aren't dynamic elements
  // being added to the page. For example, when we weren't adding
  // new paragraphs to the page, this is a fine technique to use.
  // However, once our page becomes dynamic, then we need a way
  // to handle events for existing elements as well as newly created
  // elements all at the same time.
  //
  // const pTags = document.querySelectorAll("p")
  // pTags.forEach(function(p) {
  //   p.addEventListener("click", function(event) {
  //     event.target.style.color = 'blue'
  //   })
  // })
  //
  // // addings event handlers to all as on page at this time
  // const aTags = document.querySelectorAll("a")
  // aTags.forEach(function(a) {
  //   // const a = document.querySelector("a")
  //   a.addEventListener("click", (event) => {
  //     event.target.parentNode.remove()
  //   })
  // })


  // ADDING ONE EVENT LISTENER TO MULTIPLE ELEMENTS IN ONE SWOOP
  // ---
  // Here, we want to use a technique called *EVENT DELEGATION*. Event
  // delegation depends on bubbling. That is, when an event is fired
  // on a child element, the parent element also becomes aware of that
  // event. We can use this to add ONE event listener to multiple elements
  // only one time. We have to find the parent element of all elements that
  // we want to attach the event to, and then add the event listener to
  // that. In the callback function, all we need to do is put a conditional
  // which filters actions based on properties of what's interacted with.
  let pokemonContainer = document.getElementById('pokemon-container')
  pokemonContainer.addEventListener('click', function(event){
    if(event.target.tagName === "A"){
      removePokemon(event)
    } else if(event.target.tagName === "P") {
      event.target.style.color = "silver"
    }
  })


  /* Add actions for our form! */
  let form = document.getElementById('add-pokemon')

  form.addEventListener('submit', function(event){
    event.preventDefault()

    let inputText = document.getElementById('pokemon-name')
    addPokemon(inputText.value)
    inputText.value = ""
  })

  // Logic for adding a pokemon
  function addPokemon(name){
    const pokemon = document.createElement('p')
    pokemon.innerText = name + " "

    const link = document.createElement('a')
    link.innerText = 'X'
    link.setAttribute('href', '#')


    pokemon.append(link)
    let pokemonContainer = document.getElementById('pokemon-container')
    pokemonContainer.append(pokemon)
  }

  // Logic for removing a pokemon (look at the event delegation section)
  function removePokemon(event){
    console.log(event.target)
    event.target.parentNode.remove()
  }
})
