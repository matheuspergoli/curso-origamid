import React from "react"
import { GlobalContext } from "../contexts/GlobalContext"

function BuscarDados() {
  const {fetchDados} = React.useContext(GlobalContext)

  return (
    <button onClick={fetchDados} style={{margin: '10px'}}>Buscar dados</button>
  )
}

export default BuscarDados
