import React from 'react'
import Footer from './Footer'
import Header from './Header'
import Form from './form/Form'
import Contato from './Contato'

const Teste = () => {
  const active = false

  if (active) {
    return <p>Um teste de formulário</p>
  }
}

function App() {
  return (
    <div>
      <Teste />
      <Contato />
      <Header />
      <Form />
      <Footer />
    </div>
  )
}

export default App
