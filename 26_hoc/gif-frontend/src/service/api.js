const headers = () => {
  return {
    'Content-Type': 'application/json',
    'Accepts': 'application/json',
    token: localStorage.getItem('token')
  }
}


const login = (username, password) => {
  return fetch('http://localhost:3001/login', {
    method: 'POST',
    headers: headers(),
    body: JSON.stringify({
      username: username,
      password: password
    })
  }).then(r => r.json())
}


export default {
  login
}
