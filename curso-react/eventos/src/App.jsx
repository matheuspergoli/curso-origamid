import React from 'react'

function App() {
  function handleClick(event) {
    console.log(event.target)
  }

  return (
    <button onClick={({target}) => console.log(target)}>Clique</button>
  )
}

export default App
