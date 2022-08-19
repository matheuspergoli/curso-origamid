import React from "react"
import { GlobalContext } from "./GlobalContext.jsx"

function Produto() {
  const global = React.useContext(GlobalContext)

  return (
    <div>Produto: {global.nome}</div>
  )
}

export default Produto
