import React from "react"

function App() {
  const [cor, setCor] = React.useState('')
  const [produto, setProduto] = React.useState('')

  return (
    <form>
      <h1>Produto: {produto}</h1>
      <label>
        <input 
        type="radio" 
        name="produto" 
        id="smartphone"
        value="smartphone"
        onChange={({target}) => setProduto(target.value)} />
        Smartphone
      </label>

      <label>
        <input 
        type="radio" 
        name="produto" 
        id="notebook"
        value="notebook"
        onChange={({target}) => setProduto(target.value)} />
        Notebook
      </label>

      <h1>Cor: {cor}</h1>
      <label>
        <input 
        type="radio" 
        name="cor" 
        id="verde"
        value="verde"
        onChange={({target}) => setCor(target.value)} />
        Verde
      </label>

      <label>
        <input 
        type="radio" 
        name="cor" 
        id="azul"
        value="azul"
        onChange={({target}) => setCor(target.value)} />
        Azul
      </label>
    </form>
  )
}

export default App
