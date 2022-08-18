import React from "react"

function Produto({ dados }) {

  React.useEffect(() => {
    localStorage.setItem('produto', dados.nome)
  })

  const style = {
    fontWeight: 'bold'
  }

  return (
    <section>
      <h1>Produto: {dados.nome}</h1>
      <p style={style}>Preço: R$ {dados.preco}</p>
    </section>
  )
}

export default Produto
