import React from 'react'

const Produto = ({nome, propriedades}) => {
  const estilo = {
    padding: '1rem',
    margin: '1rem 0',
    border: '1px solid black'
  }

  return (
    <div style={estilo}>
      <p>{nome}</p>
      <ul>
        {propriedades.map((propriedade, index) => (
          <li key={index}>{propriedade}</li>
        ))}
      </ul>
    </div>
  )
}

export default Produto
