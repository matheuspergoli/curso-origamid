import styled from "styled-components"
import { Routes, Route } from "react-router-dom"
import Head from "./Head"
import Home from "./Home"
import Header from "./Header"
import Contato from "./Contato"
import Produto from "./Produto"
import Produtos from "./Produtos"

const Container = styled.main`
  width: 100%;
  max-width: 900px;
  margin: 40px auto 0 auto;
`

function App() {
  return (
    <Container>
      <Head title="React | Home" />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="produtos" element={<Produtos />} />
        <Route path="produtos/:id" element={<Produto />} />
        <Route path="contato" element={<Contato />} />
      </Routes>
    </Container>
  )
}

export default App
