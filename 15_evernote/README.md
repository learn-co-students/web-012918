# Evernote Breakdown

Whenever tackling a problem in Flatiron School, think about what it means for
it to be "solved". In the case of JavaScript and building out applications,
we are looking for you to hit certain deliverables. These are represented by actions
that a user can take and the appropriate responses. This is known as **Behavior
Driven Development**. We build out functionality to whatever our behavior is.

- When a user comes to our page, we want them to load all the notes.
  - The note list should only contain the note's title and a shortened body
- When the user hits the `Reveal` button on a note, we want display that particular note's title and the full body to be displayed.
- Whenever the user hits the `Delete` button on a note, we want to delete that
particular note and remove it from our list.

If we do a `rake routes`, we see a list routes to hit, these are our **endpoints**.
Our frontend will make requests to our `BASE_URL + <endpoint>`. These requests
make a connection to the Rails app and then Rails send a response back to our frontend.

```
| Prefix      |  Verb   |         URI Pattern         |   Controller#Action  |
|-------------|---------|-----------------------------|----------------------|
| api_v1_notes|  GET    | /api/v1/notes(.:format)     | api/v1/notes#index   |
|             |  POST   | /api/v1/notes(.:format)     | api/v1/notes#create  |
| api_v1_note |  GET    | /api/v1/notes/:id(.:format) | api/v1/notes#show    |
|             |  PATCH  | /api/v1/notes/:id(.:format) | api/v1/notes#update  |
|             |  PUT    | /api/v1/notes/:id(.:format) | api/v1/notes#update  |
|             |  DELETE | /api/v1/notes/:id(.:format) | api/v1/notes#destroy |
|api_v1_users |  GET    | /api/v1/users(.:format)     | api/v1/users#index   |
|             |  POST   | /api/v1/users(.:format)     | api/v1/users#create  |
| api_v1_user |  GET    | /api/v1/users/:id(.:format) | api/v1/users#show    |
|             |  PATCH  | /api/v1/users/:id(.:format) | api/v1/users#update  |
|             |  PUT    | /api/v1/users/:id(.:format) | api/v1/users#update  |
|             |  DELETE | /api/v1/users/:id(.:format) | api/v1/users#destroy |
```

So with this chart, think about how these routes will match our behaviors
- To list all of our notes, we could make a request to a particular user (`GET /api/v1/users/:id`) and it will display their name and their notes
- To get a particular note, we may want to fetch a note by its id (`GET /api/v1/notes/:id` remember this is the note's id)
- To delete a particular note, we may want to delete based upon its id (`DELETE /api/v1/notes/:id`)
