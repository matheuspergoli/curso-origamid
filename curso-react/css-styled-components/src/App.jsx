import React from "react"
import styled from "styled-components"

const Titulo = styled.h1`
  color: black;
  font-size: 3rem;
`

const Container = styled.section`
  padding: 20px;
  color: white;
  margin: 10px auto;
  text-align: center;
  width: max-content;
  border-radius: 10px;
  background-color: tomato;

  p {
    font-size: 20px;
  }
`

const Preco = styled.p`
  color: white;
  background-color: ${({cor}) => cor};
`

const Comprar = styled.button`
  color: white;
  cursor: pointer;
  font-size: 30px;
  border: 3px solid white;
  background-color: ${({ativo}) => ativo ? 'green' : '#333'};
`

function App() {
  const [ativo, setAtivo] = React.useState(false)
  const [ativo2, setAtivo2] = React.useState(false)

  function handleClick() {
    setAtivo(!ativo)
  }

  function handleClick2() {
    setAtivo2(!ativo2)
  }

  return (
    <>
      <Container>
        <Titulo>Notebook</Titulo>
        <Preco cor="#84e">R$ 20000</Preco>
        <Comprar ativo={ativo} onClick={handleClick}>Compre aqui</Comprar>
      </Container>

      <Container>
        <Titulo>Smartphone</Titulo>
        <Preco cor="#53d956">R$ 10000</Preco>
        <Comprar ativo={ativo2} onClick={handleClick2}>Compre aqui</Comprar>
      </Container>
    </>
  )
}

export default App
