import React from "react"

export const FormularioContext = React.createContext()

export function FormularioContextProvider({children}) {
  const [form, setForm] = React.useState({
    nome: '',
    email: '',
    senha: '',
    cep: '',
    rua: '',
    numero: '',
    bairro: '',
    cidade: '',
    estado: '',
  })

  return (
    <FormularioContext.Provider value={{form, setForm}}>
      {children}
    </FormularioContext.Provider>
  )
}
