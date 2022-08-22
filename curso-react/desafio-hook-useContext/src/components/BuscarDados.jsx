import React from "react"
import { GlobalContext } from "../contexts/GlobalContext"

function BuscarDados() {
  const {buscarDados} = React.useContext(GlobalContext)

  return (
    <button onClick={buscarDados} style={{margin: '10px'}}>Buscar dados</button>
  )
}

export default BuscarDados
