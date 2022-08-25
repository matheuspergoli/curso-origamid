import React from "react"
import Input from "./Form/Input"

function App() {
  const [cep, setCep] = React.useState('')
  const [email, setEmail] = React.useState('')
  const [erro, setErro] = React.useState<null | string>(null)

  function validateCep(value: string) {
    if (value.length === 0) {
      setErro('Preencha um valor')
      return false
    } else if (/^\d{5}-?\d{3}$/.test(value)) {
      setErro('Preencha um CEP válido')
      return false
    } else {
      setErro(null)
      return true
    }
  }

  function handleBlur({target}: any) {
    const regex = /^\d{5}-?\d{3}$/
    const validacao = regex.test(target.value)
  }

  return (
    <form>
      <Input id="cep" label="CEP" value={cep} setValue={setCep} onBlur={handleBlur} />
      <button>Enviar</button>
    </form>
  )
}

export default App