import React from "react"

function UserPost() {
  const [username, setUsername] = React.useState('')
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')

  function handleSubmit(event) {
    event.preventDefault()
    fetch('https://dogsapi.origamid.dev/json/api/user', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username,
        email,
        password
      })
    }).then(response => {
      console.log(response)
      return response.json()
    }).then(json => {
      console.log(json)
      return json
    })
  }

  return (
    <form onSubmit={handleSubmit}>
      <input 
      type="text" 
      value={username} 
      placeholder="Username"
      onChange={({target}) => setUsername(target.value)} />

      <input 
      type="email" 
      value={email} 
      placeholder="Email"
      onChange={({target}) => setEmail(target.value)} />

      <input 
      type="password" 
      value={password} 
      placeholder="Password"
      onChange={({target}) => setPassword(target.value)} />

      <button>Enviar</button>
    </form>
  )
}

export default UserPost
