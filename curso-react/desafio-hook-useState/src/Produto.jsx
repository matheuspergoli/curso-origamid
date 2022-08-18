function Produto({ dados }) {

  return (
    <div className="w-80">
      <h1 className="text-2xl m-5 p-2">{dados.nome}</h1>
      <p className="text-2xl m-5 p-2">R$ {dados.preco}</p>
      <img className="block p-1 w-full object-contain" src={dados.fotos[0].src} alt={dados.fotos[0].titulo} />
    </div>
  )
}

export default Produto
