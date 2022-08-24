import React from "react"
import Input from "./Input"
import Button from "./Button"
import { FormularioContext } from "./FormularioContext"

function Form() {
  const {form} = React.useContext(FormularioContext)
  const [response, setResponse] = React.useState(null)

  const estiloForm = {
    width: '400px',
    margin: '0 auto'
  }

  function handleSubmit(event) {
    event.preventDefault()

    fetch('https://ranekapi.origamid.dev/json/api/usuario', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(form),
    }).then((response) => {
      setResponse(response)
    })
  }

  return (
    <form style={estiloForm} onSubmit={handleSubmit}>
      <Input 
      id={'nome'}
      name={'nome'}
      type={'text'} 
      htmlFor={'nome'} 
      text={'Nome:'} />

      <Input 
      id={'email'}
      name={'email'}
      type={'email'} 
      htmlFor={'email'} 
      text={'Email:'} />

      <Input 
      id={'senha'}
      name={'senha'}
      type={'password'} 
      htmlFor={'senha'} 
      text={'Senha:'} />

      <Input 
      id={'cep'}
      name={'cep'}
      type={'text'} 
      htmlFor={'cep'} 
      text={'Cep:'} />

      <Input 
      id={'rua'}
      name={'rua'}
      type={'text'} 
      htmlFor={'rua'} 
      text={'Rua:'} />

      <Input 
      id={'numero'}
      name={'numero'}
      type={'text'} 
      htmlFor={'numero'} 
      text={'Número:'} />

      <Input 
      id={'bairro'}
      name={'bairro'}
      type={'text'} 
      htmlFor={'bairro'} 
      text={'Bairro:'} />

      <Input 
      id={'cidade'}
      name={'cidade'}
      type={'text'} 
      htmlFor={'cidade'} 
      text={'Cidade:'} />

      <Input 
      id={'estado'}
      name={'estado'}
      type={'text'} 
      htmlFor={'estado'} 
      text={'Estado:'} />

      <Button text={'Enviar'} />
      {response && response.ok && <p>Usuário Criado.</p>}
    </form>
  )
}

export default Form
