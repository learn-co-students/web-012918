// let arr = [1,2,3,4,5]
//
// console.log(arr.filter((element) => {
//   console.log(this)
//   return element % 2 === 0
// }))
// let beef = (function(){
//   let body = document.addEventListener('click', (event) => {
//     console.log(this)
//   })
// })()
//

// class Teacher {
//   constructor(name) {
//     this.name = name
//   }
//
//   dummyFunc() {
//     console.log(this)
//   }
// }
//
// let prince = new Teacher("Prince")
// prince.dummyFunc()

// let saysGreeting = (greeting) => {
//   console.log(`${this.name} says, '${greeting}'`)
// }

// let camille = {
//   name: "Camille",
//   greeting: (greeting) => {
//     console.log(`${this.name} says, '${greeting}'`)
//   }
// }

// function saysGreeting(greeting){
//   console.log(`${this.name} says, '${greeting}'`)
// }

// let camilleGreet = saysGreeting.bind({name: "Camille"})
// let abeGreet = saysGreeting.apply({name: "Abe"})
// let bryanGreet = saysGreeting.call({name: "Bryan"})



// let beef = (function(){
//   let id = 0
//   let all = []
//
//   return class Teacher {
//     constructor(name){
//       this.name = name
//       this.id = ++id
//
//       all.push(this)
//     }
//
//     static all() {
//       return [...all]
//     }
//   }
// })()
//
//
// laura = new beef("Laura")
// matt = new beef("Matt")
// prince = new beef("Prince")
// graham = new beef("Graham")

// let incCounter = (function(){
//   let counter = 0
//
//   return function() { return counter++ }
// })()

// let name = "Prince Wilson"
//
// function saysHello(){
//   name = "Matt Lawford"
//   return `${name} says, "Hello, World!"`
// }
//
// console.log(saysHello())
// console.log(name)
