/*** Object Literals ***/
// let dog1 = {
//   "breed": "corgi",
//   name: "Ben",
//   owner: "Prince"
// }
//
// let dog2 = {
//   breed: "Rottweiler",
//   name: "Ryan",
//   owner: "Ben"
// }

/* Adding functions to Dog objects (wastes memory) */
// barks = function(){
//   return `${this.name} goes and barks`
// }
//
// dog1.barks = barks
//
// dog2.barks = barks

/*** Constructor Function ***/
// function Dog(breed, name, owner){
//   this.breed = breed
//   this.name = name
//   this.owner = owner
// }

/* Adding functions to our Dog prototype (not to waste memory) */

// Dog.prototype.barks = function (){
//   return `${this.name} goes and barks.`
// }
//
// Dog.prototype.walks = function(){
//   return `${this.owner} goes and walks ${this.name}`
// }
//
// let dog1 = new Dog("corgi", "Ben", "Prince")
// let dog2 = new Dog("rottweiler", "Ryan", "Ben")


/*** Class Syntax ***/
// class Dog {
//  constructor(breed, name, owner){
//    this.breed = breed
//    this.name = name
//    this.owner = owner
//  }
//
//  barks() {
//    return `${this.name} goes and barks.`
//  }
//
//  walks() {
//    return `${this.owner} goes and walks ${this.name}`
//  }
// }
//
// let dog1 = new Dog("corgi", "Ben", "Prince")
// let dog2 = new Dog("rottweiler", "Ryan", "Ben")


/*** Another example ***/
// class Artist {
//   constructor(name, song) {
//     this.name = name
//     this.song = song
//   }
//
//   sings(){
//     console.log(`${this.name} sings a beautiful song`)
//   }
//
//   meltdown(){
//     console.log(`${this.name} shaves her head.`)
//   }
//
//   remix(artist){
//     // Remix to take in another artist
//     // Say, "Brittany goes and remixes Rihanna's Umbrella"
//     console.log(`${this.name} goes and remixes ${artist.name}'s ${artist.song}`)
//   }
// }
//
//
// let brittany = new Artist("Brittany Spears", "Toxic")
// let rihanna = new Artist("Rihanna", "Umbrella")
//
// brittany.remix(rihanna)


/*** Closures, IIFEs & Classes ***/
// let Dog = (function () {
//
//   // Can't access all or id outside of this method
//   let all = []
//   let id = 0
//
//   return class {
//     constructor(breed, name, owner){
//       this.breed = breed
//       this.name = name
//       this.owner = owner
//       this.id = ++id
//       all.push(this)
//     }
//
//     barks() {
//       return `${this.name} goes and barks.`
//     }
//
//     walks() {
//       return `${this.owner} goes and walks ${this.name}`
//     }
//
//     static all(){
//       return all
//     }
//   }
// })()
//
//
// let dog1 = new Dog("corgi", "Ben", "Prince")
// let dog2 = new Dog("rottweiler", "Ryan", "Ben")
