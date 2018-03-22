const Task = (() => {
  //id = 1
  return class Task {
    constructor(id, description, priority, status){
      this.id = id
      this.description = description
      this.priority = priority
      this.completed = status
    }
    render(){
      //make element
      let taskSpot = document.createElement("li")
      let checkbox = document.createElement("input")
      checkbox.setAttribute("type","checkbox")
      this.completed = checkbox.checked

      taskSpot.innerText = `${this.description} & ${this.priority}`

      // Whenever checkbox is clicked, fire off edit
      checkbox.addEventListener('click', (e) => {
        fetch(`http://localhost:3000/tasks/${this.id}`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
          },
          body: JSON.stringify({
            task: {
              completed: e.target.checked
            }
          })
        }).then(res => res.json()).then(json => { console.log(json) })
      })

      taskSpot.append(checkbox)
      //return html
      return taskSpot
    }
  }
})()
