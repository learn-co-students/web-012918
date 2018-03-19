document.addEventListener('DOMContentLoaded', function(){
  console.log("THE DOM CONTENT HAS LOADED")

  const BASE_URL = "https://api.github.com"
  const API_TOKEN = "YOUR API TOKEN HERE"
  /***** DIFFERENT FROM LECTURE
  - Let's grab a user name's profile first
  - We are just going to use an input and button for this

  - To update our profile, we will separate it into a *form*
  ****/
  let button = document.querySelector('button')
  let name = document.getElementById('name')
  let bio = document.getElementById('bio')


  // Adding an Event Listener for our button being clicked
  // - We will grab the username from the input field and then
  // call our getProfile method which just takes it as a parameter
  // for our fetch
  button.addEventListener('click', function(event){
    let username = document.getElementById('username').value
    getProfile(username)
  })

  // Adding an Event Listener for our form being submitted
  // - We already have the information, but we need to
  // submit information about ourselves to be updated
  // Notice in patchProfile, we give the optional parameter
  // Headers, Body, and Method
  let form = document.getElementById('github')
  form.addEventListener('submit', (event) => {
    event.preventDefault()
    patchProfile()
  })

  // Fetches are "then-able". You cannot access the data right after
  // you call it, this is due to the fact it is a Promise
  // you can only access it after a then. From there, we need to convert
  // our response Promise to a JSON promise (res.json() does this for us)
  // Finally can access it after the last then
  function getProfile(username) {
    fetch(BASE_URL + '/users/' + username)
    .then(res => res.json())
    .then((json) => {

      // ANY OPERATIONS SHOULD HAPPEN IN HERE IF IT IS DEPENDENT
      // ON THE RESULT OF OUR JSON
      name.value = json.name
      bio.value = json.bio
    })
  }

  // Whenever a request requires more information than simply a GET request
  // You will need to give the optional parameter object.
  // In it, you can set headers, methods, and body. If you are passing in a
  // body you need to be sure to JSON.stringify it.
  function patchProfile() {
    fetch(BASE_URL + '/user', {
      method: 'PATCH',
      headers: {
        Authorization: `token ${API_TOKEN}`
      },
      body: JSON.stringify({
        name: name.value,
        bio: bio.value
      })
    })
    .then((res) => { return res.json() })
    .then(json => { console.log('Updated JSON:' + JSON.stringify(json))})
  }
})
