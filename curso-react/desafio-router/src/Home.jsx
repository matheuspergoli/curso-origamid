import styled from "styled-components"
import Head from "./Head"

const Container = styled.section`
  margin-top: 40px;
  animation-duration: 350ms;
  animation-fill-mode: forwards;
  animation-name: showContainer;
  animation-timing-function: ease-out;

  h1 {
    font-size: 48px;
  }

  p {
    font-size: 32px;
  }

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

function Home() {
  return (
    <Container>
      <Head title="React | Home" />
      <h1>Home</h1>
      <p>Bem-vindo(a)</p>
      <p>A nossa loja de produtos eletrônicos</p>
    </Container>
  )
}

export default Home
