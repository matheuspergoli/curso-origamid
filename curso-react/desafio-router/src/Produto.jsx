import React from "react"
import { useParams } from "react-router-dom"
import styled from "styled-components"
import Head from "./Head"

const Container = styled.section`
  display: flex;
  justify-content: start;
  gap: 50px;
  margin-top: 40px;
`

const Propriedades = styled.section`
  display: flex;
  flex-direction: column;
  gap: 20px;

  h1 {
    font-size: 32px;
  }

  p:nth-of-type(1) {
    padding: 8px;
    font-size: 24px;
    width: fit-content;
    border-radius: 10px;
    background-color: #00ff22;
  }

  p:nth-of-type(2) {
    font-size: 24px;
  }
`

const ContainerImagem = styled.figure`
  display: flex;
  flex-direction: column;
  gap: 40px;
  width: 400px;
`

const Imagem = styled.img`
  display: block;
  max-width: 100%;
  border-radius: 10px;
`

const Erro = styled.h1`
  color: red;
  margin-top: 40px;
`

function Produto() {
  const { id } = useParams()
  const [produto, setProduto] = React.useState(null)

  React.useEffect(() => {
    if (id === "Câmera") {
      setProduto(-1)
    } else {
      fetch(`https://ranekapi.origamid.dev/json/api/produto/${id}`)
        .then(response => response.json())
        .then(json => setProduto(json))
    }
  }, [])

  if (produto === -1) return <Erro>Produto não encontrado</Erro>
  return (
    <>
      {produto && (
        <Container>
          <Head title={`React | ${id}`} />
          <ContainerImagem>
            <Imagem src={produto.fotos[0].src} />
          </ContainerImagem>
          <Propriedades>
            <h1>Produto: {id}</h1>
            <p>R$ {produto.preco}</p>
            <p>{produto.descricao}</p>
          </Propriedades>
        </Container>
      )}
    </>
  )
}

export default Produto
