document.addEventListener('DOMContentLoaded', function(event){
  console.log('THE DOM CONTENT HAS LOADED')

  const BASE_URL = "http://localhost:3000/api/v1"
  const USER_ID = 3

  let notesContainer = document.getElementById('notes-container')

  let getAllNotes = (userId) => {
    return fetch(`${BASE_URL}/users/${userId}`)
            .then( res => res.json())
  }

  let getNote = (noteId) => {
    return fetch(`${BASE_URL}/notes/${noteId}`)
            .then( res => res.json())
  }

  let deleteNote = (noteId) => {
    return fetch(`${BASE_URL}/notes/${noteId}`, {
      method: 'DELETE'
    })
      .then(res => res.json())
  }

  getAllNotes(USER_ID)
  .then( json => {
    // displayNotes(/* notes */)
    // displayNotes(json.notes)
    displayNotes(json.notes)
  })

  let displayNotes = (notes) => {
    console.log(notes)

    notes.forEach(noteData => {
      let noteLi = document.createElement('div')
      noteLi.innerHTML = `<h3 data-id=${noteData.id}>${noteData.title}</h3><p>${noteData.body.substring(0, 50) + '...'}</p>`

      notesContainer.append(noteLi)
    })
  }

  notesContainer.addEventListener('click', function(event){
    if(event.target.tagName === "H3"){
      let noteId = parseInt(event.target.dataset.id)

      // Fetch Request happenings here
      getNote(noteId)
      .then(json => {
        let noteDetail = document.getElementById("note-detail")
        noteDetail.innerHTML = `<h3>${json.title}</h3><p>${json.body}</p>`

        let noteDelete = document.createElement('button')
        noteDelete.innerText = "DELETE"
        noteDelete.setAttribute('data-id', json.id)

        noteDelete.addEventListener('click', function(event){
          let noteId = parseInt(event.target.dataset.id)
          // debugger
          event.target.parentNode.innerHTML = ""
          deleteNote(noteId)
          .then(json => {
            console.log("WE HAVE DELETED THE NOTE")

          })
        })

        noteDetail.append(noteDelete)

        // How to delete things
        // Clear out the details, THEN go and delete the sidebar
      })
    }
  })


  let revealNote = (note) => {

  }
  // let displayNotes = ({notes}) => {
  //   console.log(notes)
  // }
  // let getAllNotes = function (){
  //
  // }
})
