import React from "react"
import { GlobalContext } from "../contexts/GlobalContext"

function LimparDados() {
  const {limparDados} = React.useContext(GlobalContext)

  return (
    <button onClick={limparDados} style={{margin: '10px'}}>Limpar dados</button>
  )
}

export default LimparDados
