import React from "react"
import Radio from "./Form/Radio"

function App() {
  const [cor, setCor] = React.useState('')

  return (
    <form>
      <h2>Cor preferida: {cor}</h2>
      <Radio options={['Azul', 'Vermelho', 'Verde']} value={cor} setValue={setCor} />
    </form>
  )
}

export default App
