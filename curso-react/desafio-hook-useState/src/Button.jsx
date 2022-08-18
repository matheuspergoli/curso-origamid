import React from "react"
import Produto from "./Produto"

function Button({innerText, fetchURL}) {
  const [dados, setDados] = React.useState(null)

  async function fetchProdutos() {
    const json = await (await fetch(fetchURL + innerText)).json()
    console.log(json)
    setDados(json)
  }

  return (
    <section>
      <button onClick={fetchProdutos} className="text-2xl m-5 p-2 rounded-md bg-blue-400">
        {innerText}
      </button>
      {dados && <Produto 
      nomeProduto={dados.nome} 
      precoProduto={dados.preco} 
      imgProduto={dados.fotos.src}  />}
    </section>
  )
}

export default Button
