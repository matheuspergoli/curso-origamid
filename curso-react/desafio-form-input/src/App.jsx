import React from "react"
import Form from "./components/Formulario/Form"
import { FormularioContextProvider } from "./components/Formulario/FormularioContext"

function App() {

  return (
    <FormularioContextProvider>
      <Form /> 
    </FormularioContextProvider>
  )
}

export default App
