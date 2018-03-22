const App = function(){
  return class App {
    static init(){
      console.log("Dom loaded")
      //get form by id and other form things
      const taskForm = document.getElementById("task-form")
      const taskDescription = document.getElementById("task-description")
      const taskPriority = document.getElementById("task-priority")
      const taskList = document.getElementById("task-list")

      // Display all tas
      App.displayAllTask()
      //fetch get tasks
      taskForm.addEventListener("submit", createTask)
    }

    static displayAllTask(){
      fetch("http://localhost:3000/tasks").then(res => res.json()).then(data => displayAllTask(data))
        if (data.length > 0) {
          //make javascript objects of tasks in loop
          //render task objects on load appended to task list
          for(let i=0; i< data.length; i++){
            let aNewTask = new Task(data[i].id,data[i].description,data[i].priority,data[i].completed)
            let aNewSpot = aNewTask.render()
            taskList.appendChild(aNewSpot)
          }
        }
      }

      //add listener to form


      static createTask(event){
        // Add a task
        //write callback function and prevent default
        event.preventDefault()
          //callback fetch post new task to backend
          fetch("http://localhost:3000/tasks/",{
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              "Accept": "application/json"
            },
            body: JSON.stringify({
              "task": {
                "description": `${taskDescription.value}`,
                "priority": `${taskPriority.value}`
              }
            })
          }).then(res => res.json()).then(jsonData => {
            console.log(jsonData)
            //callback creates new task on frontend and displays it
            let newTask = new Task(jsonData.id,jsonData.description,jsonData.priority, jsonData.completed)
            // let newSpot = document.createElement("li")
            // newSpot.innerHTML = newTask.render() //PROBLEM!! can't find node to append to cause can't append anything to div taskList
            taskList.appendChild(newTask.render())
          })
        }




      // Check a task as complete
      // fetch patch make completed true and show that changed on page



      // Remove a task
      //fetch delete on backend and remove element from front end
    }
  })()
