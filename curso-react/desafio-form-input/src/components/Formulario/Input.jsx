import React from "react"
import { FormularioContext } from "./FormularioContext"

function Input({htmlFor, type, name, id, text}) {
  const {form, setForm} = React.useContext(FormularioContext)

  function handleChange({ target }) {
    const { id, value } = target;
    setForm({ ...form, [id]: value });
  }

  return (
    <section>
      <label htmlFor={htmlFor}>{text}</label>
      <input 
      required
      type={type} 
      name={name} 
      id={id} 
      value={form[id]} 
      onChange={handleChange} />
    </section>
  )
}

export default Input
