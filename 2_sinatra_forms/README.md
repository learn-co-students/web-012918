# Goals
- mapping routes to CRUD actions
- separating resources
- nesting form params
- getting comfortable with Postman
<!-- - How and why we use the MVC pattern
  - separation of concerns
  - model: interacts with our database, how we create instances
  - controller: go-between
  - view: html that renders a webpage
- How Sinatra serves data in response to web requests
- How CRUD actions map to RESTful routes
  - REpresentational State Transfer
- How to make an HTML form -->

## Deliverables
- For each deliverable, what routes are necessary?

- view info on an individual book
get /books/:id

- view all the books
get /books

- create a new book
get /books/new
post /books
Book.create

- edit an existing book
get /books/:id/edit
patch /books/:id

- deleting an existing book
delete /books/:id
