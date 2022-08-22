import React from "react"
import useLocalStorage from "./useLocalStorage"

function App() {
  const [produto, setProduto] = useLocalStorage('produto', '')

  function handleClick({target}) {
    setProduto(target.innerText)
  }

  return (
    <div>
      <p>Produto preferido: {produto}</p>
      <button onClick={handleClick} style={{margin: '0 10px 0 0'}}>Notebook</button>
      <button onClick={handleClick} style={{margin: '0 0 0 10px'}}>Smartphone</button>
    </div>
  )
}

export default App
