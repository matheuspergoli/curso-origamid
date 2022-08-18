import React from "react"
import Produto from "./Produto"

function App() {
  const [ativo, setAtivo] = React.useState(false)

  return (
    <div>
      {ativo && <Produto />}
      <button
      className="text-4xl p-4 m-4 rounded-md bg-blue-400" 
      onClick={() => setAtivo(!ativo)}>Ativar</button>
    </div>
  )
}

export default App
