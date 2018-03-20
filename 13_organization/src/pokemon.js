/***
  pokemon.js

  Here we knew we wanted to think about this as a reusable piece of information.
  Rather than writing everything out about rendering a Pokemon by hand, we store
  it onto our class and just let every instance of this class handle that action.
***/

class Pokemon {
  constructor(name, sprites){
    this.name = name
    this.front_url = sprites.front
    this.back_url = sprites.back
  }

  // We use this method as a helper for an event listener
  // We need to pass in event because we need to know which
  // card is getting hit and go find the img it contains and change its
  // source.
  flipImage(event) {
    let img = event.target.parentNode.querySelector('img')
    if( img.src === this.front_url ){
      img.src = this.back_url
    } else if( img.src === this.back_url ) {
      img.src = this.front_url
    }
  }

  render() {
    // The div that we will use for our pokemon card
    let div = document.createElement('div')
    div.dataset.name = this.name
    div.innerHTML = `<div style="width:230px;margin:10px;background:#fecd2f;color:#2d72fc" class="pokemon-frame">
            <h1 class="center-text">${this.name}</h1>
            <div style="width:239px;margin:auto">
              <div style="width:96px;margin:auto">
                <img src=${this.front_url}>
              </div>
            </div>
            <p style="padding:10px;" class="center-text flip-image" data-pokename="${this.name}" data-action="flip-image">flip card</p>
            </div>`

    // We want to add an event listener to our <p> inside of every card
    let p = div.querySelector('p')

    // We need to BIND `this` to be referencing the instance of our Pokemon object.
    // Otherwise `this` inside of an event listener is going to be the element that
    // we hit within our eventlistener, (a.k.a. event.target)
    p.addEventListener('click', (event) => { this.flipImage(event) })

    return div
  }
}
