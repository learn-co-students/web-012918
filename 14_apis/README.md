# Pokemon App

### Understanding how it all works together
- `pokemon-backend` represents what we will be doing for our backend
  - We will create endpoints for our frontend to be using through `fetch`
  - Remember: you can find the endpoints by `rake routes` inside of this folder
- `pokemon-frontend` represents what we will be doing for our frontend
  - Whenever we have a frontend, the logic for manipulation will happen there
  - All things HTML/JS will be here
  - The frontend will make requests **to** the backend

### Tips
1. Make sure your Rails server is running
2. Remember that you are going to make fetches to your `http://localhost:3000/...`
3. Depending on your request, you will need to give the **optional** parameter to `fetch`. i.e. If you are making a new piece of data, it is a `POST` method and some data.
