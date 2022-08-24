import React from "react"

function App() {
  const[select, setSelect] = React.useState('')

  function handleChange({target}) {
    setSelect(target.value)
    console.log(select)
  }

  return (
    <form>
      <select name="produtos" id="produtos" value={select} onChange={handleChange}>
        <option disabled value="">Selecione</option>
        <option value="notebook">Notebook</option>
        <option value="smartphone">Smartphone</option>
        <option value="tablet">Tablet</option>
        <option value="carregador">Carregador</option>
      </select>
      {select && <p>{select}</p>}
    </form>
  )
}

export default App
