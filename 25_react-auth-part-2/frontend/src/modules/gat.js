
const gat = (url, method="GET", body, authToken) => {
  const headers = {
    "Content-Type": "application/json",
    "Accepts": "application/json",
  }
  if (authToken) {
    headers["Authorization"] = `Token token=${ authToken }`
  }
  return fetch(url, { method, headers, body });
}

const register = (username, password) => {
  return gat("http://localhost:3001/users", "POST", 
    JSON.stringify({ 
      username, 
      password 
    })
  );
}

const login = (username, password) => {
  return gat("http://localhost:3001/sessions", "POST", 
    JSON.stringify({ 
      username, 
      password 
    })
  );
}

const snacks = (userId, authToken) => {
  return gat(`http://localhost:3001/users/${ userId }/snacks`, null, null, authToken)
}

export default {
  snacks, register, login
};
