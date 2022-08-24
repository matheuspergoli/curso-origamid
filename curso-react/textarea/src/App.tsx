import React from "react"

function App() {
  const [textarea, setTextarea] = React.useState('')

  return (
    <form>
      <textarea 
      value={textarea} 
      onChange={({target}) => setTextarea(target.value)} />
      {textarea && <p>{textarea}</p>}
    </form>
  )
}

export default App
