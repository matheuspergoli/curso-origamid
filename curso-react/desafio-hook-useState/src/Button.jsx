import React from "react"
import Produto from "./Produto"

function Button({innerText, fetchURL}) {
  const [dadosJSON, setDados] = React.useState(null)
  const [carregando, setCarregando] = React.useState(null)

  async function fetchProdutos() {
    setCarregando(true)
    const json = await (await fetch(fetchURL + innerText)).json()
    setDados(json)
    setCarregando(false)
  }

  return (
    <section>
      <button onClick={fetchProdutos} className="text-2xl m-5 p-2 rounded-md bg-blue-400">
        {innerText}
      </button>
      {carregando && <p>Carregando...</p>}
      {!carregando && dadosJSON && <Produto dados={dadosJSON} />}
    </section>
  )
}

export default Button
