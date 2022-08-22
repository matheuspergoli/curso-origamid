import React from "react"
import { GlobalContext } from "../contexts/GlobalContext"

function MostrarDados() {
  const {dados, mostrarDados} = React.useContext(GlobalContext)

  return (
    <>
      <button onClick={mostrarDados} style={{margin: '10px'}}>Mostrar dados</button>
      <ul>
        {dados && dados.map((item, index) => (
          <li key={index}>{item.nome}</li>
        ))}
      </ul>
    </>
  )
}

export default MostrarDados
