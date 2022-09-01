import React from "react"
import Head from "./Head"
import styled from "styled-components"
import { Link } from "react-router-dom"

const Container = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 30px;
  margin: 40px 0;
  animation-duration: 350ms;
  animation-fill-mode: forwards;
  animation-name: showContainer;
  animation-timing-function: ease-out;

  @keyframes showContainer {
   0% {
    opacity: 0;
    transform: translateX(-30px);
   }
   
   100% {
    opacity: 1;
    transform: translateX(0);
   }
  }
`
const Image = styled.figure`
  flex: 1 1 250px;

  img {
    display: block;
    width: 100%;
    max-width: 100%;
    border-radius: 10px;
  }

  h1 {
    margin-top: 15px;
  }
`

function Produtos() {
  const [dados, setDados] = React.useState(null)

  React.useEffect(() => {
    fetch('https://ranekapi.origamid.dev/json/api/produto/')
    .then(response => response.json())
    .then(json => setDados(json))
  }, [])

  return (
    <>
      <Head title="React | Produtos" />
      <Container>
        {dados && dados.map(item => (
          <Image key={item.id}>
            <Link to={item.nome}>
              <img src={item.fotos[0].src} alt={item.id} />
            </Link>
            <h1>{item.nome}</h1>
          </Image>
        ))}
      </Container>
    </>
  )
}

export default Produtos
