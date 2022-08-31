import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./Home"
import Login from "./Login"
import Sobre from "./Sobre"
import Conta from "./Conta"
import Header from "./Header"
import Contato from "./Contato"
import Produto from "./Produto"
import NaoEncontrado from "./NaoEncontrado"

function App() {

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="sobre" element={<Sobre />} />
        <Route path="contato" element={<Contato />} />
        <Route path="produto/:id/*" element={<Produto />} />
        <Route path="login" element={<Login />} />
        <Route path="conta" element={<Conta />} />
        <Route path="*" element={<NaoEncontrado />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
