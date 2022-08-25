import React from "react"
import Input from "./Form/Input"

function App() {
  const [cep, setCep] = React.useState('')
  const [erro, setErro] = React.useState<null | string>(null)

  function validateCep(value: string) {
    if (value.length === 0) {
      setErro('Preencha um valor')
      return false
    } else if (!/^\d{5}-?\d{3}$/.test(value)) {
      setErro('Preencha um CEP válido')
      return false
    } else {
      setErro(null)
      return true
    }
  }

  function handleBlur({target}: any) {
    validateCep(target.value)
  }

  function handleChange({target}: any) {
    if (erro) {
      validateCep(target.value)
    }
    setCep(target.value)
  }

  function handleSubmit(event: any) {
    event.preventDefault()
    if (validateCep(cep)) {
      console.log('Enviou')
    } else {
      console.log('Não enviou')
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <Input id="cep" label="CEP" value={cep} onChange={handleChange} onBlur={handleBlur} />
      {erro && <p>{erro}</p>}
      <button>Enviar</button>
    </form>
  )
}

export default App