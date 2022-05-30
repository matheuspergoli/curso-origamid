import React from 'react'

const luana = {
  cliente: 'Luana',
  idade: 27,
  compras: [
    { nome: 'Notebook', preco: 'R$ 2500' },
    { nome: 'Geladeira', preco: 'R$ 3000' },
    { nome: 'Smartphone', preco: 'R$ 1500' },
  ],
  ativa: true,
}

const mario = {
  cliente: 'Mario',
  idade: 31,
  compras: [
    { nome: 'Notebook', preco: 'R$ 2500' },
    { nome: 'Geladeira', preco: 'R$ 3000' },
    { nome: 'Smartphone', preco: 'R$ 1500' },
    { nome: 'Guitarra', preco: 'R$ 3500' },
  ],
  ativa: false,
}

function Compras() {
  const dados = mario
  const situacao = dados.ativa
  const gastoTotal = dados.compras
    .map(({ preco }) => Number(preco.replace('R$ ', '')))
    .reduce((acc, item) => acc + item, 0)

  return (
    <div>
      <p>Nome: {dados.cliente}</p>
      <p>Idade: {dados.idade}</p>
      <p>
        Situação:{' '} 
        <span style={{color: situacao ? 'green' : 'red'}}>
          {situacao ? 'Ativa' : 'Inativa'}
        </span>
        </p>
      <p>Total gasto: R$ {gastoTotal}</p>
      {gastoTotal > 10000 && <p>Você está gastando muito</p>}
    </div>
  )
}

export default Compras