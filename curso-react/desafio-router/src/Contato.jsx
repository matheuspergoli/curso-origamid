import Head from "./Head"
import styled from "styled-components"
import ContatoImagem from "./Theme/contato.jpg"

const Container = styled.section`
  display: flex;
  flex-wrap: wrap-reverse;
  gap: 20px;
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

const Imagem = styled.img`
  display: block;
  width: 100%;
  height: 400px;
  max-width: 500px;
  border-radius: 10px;
`

const Contatos = styled.article`
  h1 {
    margin-bottom: 20px;
  }

  p {
    display: flex;
    align-items: center;
    gap: 5px;
  }

  p::before {
    content: '';
    display: block;
    width: 20px;
    height: 5px;
    background-color: rgba(0, 0, 0, 0.5);
  }

  p:not(:last-child) {
    margin-bottom: 10px;
  }
`

function Contato() {
  return (
    <>
      <Head title="React | Contato" />
      <Container>
        <figure>
          <Imagem src={ContatoImagem} alt="Imagem"/>
        </figure>
        <Contatos>
          <h1>Entre em contato</h1>
          <p>matheus@email.com</p>
          <p>(11) 946411571</p>
          <p>Rua São Marçal, 107</p>
        </Contatos>
      </Container>
    </>
  )
}

export default Contato
