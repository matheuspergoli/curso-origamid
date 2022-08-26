import React from "react"
import Input from "./Form/Input"
import useForm from "./Hooks/useForm"

function App() {
  const cep = useForm('cep')
  const email = useForm('email')
  const nome = useForm('nome')

  function handleSubmit(event: any) {
    event.preventDefault()
    if (cep.validate() && email.validate() && nome.validate()) {
      console.log('Enviou')
    } else {
      console.log('Não enviou')
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <Input
      type="text"
      id="cep"
      label="CEP"
      erro={cep.erro}
      placeholder="00000-000" 
      value={cep.value} 
      onBlur={cep.onBlur} 
      onChange={cep.onChange} />

      <Input
      type="email"
      id="email"
      label="Email"
      erro={email.erro}
      value={email.value} 
      onBlur={email.onBlur} 
      onChange={email.onChange} />

      <Input
      type="text"
      id="nome"
      label="Nome"
      erro={nome.erro}
      value={nome.value} 
      onBlur={nome.onBlur} 
      onChange={nome.onChange} />
      <button>Enviar</button>
    </form>
  )
}

export default App