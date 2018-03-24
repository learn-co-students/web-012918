/*
  This just acts as a file that runs our code. When we use the document.addEventListener
  this says, " **ON THIS EVENT**, do everything in it". If we do this, that means,
  everything is captured inside of the event listener. But know we can **DEFINE**
  behaviors all outside of this. That's why we can separate our code into separate
  files.
*/


/****
  // Example of working code not contained within the even listener but ****EXECUTED
  // IN THE EVENT LISTENER.****


function printStuff(text){
  console.log(text)
}

document.addEventListener('DOMContentLoaded', function(event){
  printStuff("THIS WILL PRINT BECAUSE WE HAVE DEFINED IT **BEFORE** THE EVENT LISTENER")
})

  // Now imagine printStuff living in a separate file, this would need to be **DEFINED** first
  // because how else would the event listener what printStuff was?
****/

// We just extrapolate our application logic somewhere else
// _Hint_ we should look at our app.js. Remember also the eventListener takes a callback
document.addEventListener('DOMContentLoaded', App.init)
