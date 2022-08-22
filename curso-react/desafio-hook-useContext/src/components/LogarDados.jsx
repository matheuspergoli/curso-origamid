import React from "react"
import { GlobalContext } from "../contexts/GlobalContext"

function LogarDados() {
  const {mostrarDados} = React.useContext(GlobalContext)

  return (
    <button onClick={mostrarDados} style={{margin: '10px'}}>Logar dados</button>
  )
}

export default LogarDados
