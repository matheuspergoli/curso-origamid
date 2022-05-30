import React from 'react'

function App() {
  const titulo = <h1>Esse é um título</h1>
  const nome = 'Matheus'
  const ativo = true

  function mostrarNome() {
    return 'Meu nome é Matheus Pergoli'
  }

  const estiloP = {
    color: 'blue',
    margin: 'auto',
    padding: '10px',
    fontSize: '1.5rem',
    textAlign: 'center',
    borderRadius: '25px',
    width: 'fit-content',
    backgroundColor: 'black'
  }

  const carro = {
    marca: 'Ferrari',
    ano: 2022,
    rodas: 4,
    preco: 70000
  }

  return (
    <div>
      { titulo }
      <p style={estiloP}>Testando estilos</p>
      { mostrarNome() }
      <p>Estamos no ano de {new Date().getFullYear()}</p>
      <label htmlFor='nome'>Digite seu nome:</label>
      <input type="text" id='nome' name='nome' placeholder='Digite aqui'></input>
      <a href='/' title='Isso é um site' className='ativo'>Meu app</a>
      <p className={ativo ? 'ativo' : 'inativo'}>Meu nome é { nome }</p>
      <br/>
      <p>Carro: {carro.marca}</p>
      <p>Ano: {carro.ano}</p>
      <p>Rodas: {carro.rodas}</p>
      <p>Preço: {carro.preco}</p>
    </div>
  )
}

export default App
