import React from 'react'
import Home from './Home'
import Header from './Header'
import Produtos from './Produtos'

function App() {
  let Pagina
  const { pathname } = window.location

  if (pathname === '/') {
    Pagina = Home
  } else {
    Pagina = Produtos
  }

  return (
    <section>
      <Header />
      <Pagina />
    </section>
  )
}

export default App
