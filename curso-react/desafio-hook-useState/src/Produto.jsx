function Produto({nomeProduto, precoProduto, imgProduto}) {

  return (
    <div>
      <h1>{nomeProduto}</h1>
      <p>R$ {precoProduto}</p>
      <img src={imgProduto} alt={nomeProduto} />
    </div>
  )
}

export default Produto
