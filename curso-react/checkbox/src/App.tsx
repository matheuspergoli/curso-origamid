import React from "react"

function App() {
  const [cores, setCores] = React.useState(['azul'])

  function handleChange({target}: any) {
    if (target.checked) {
      setCores([ ...cores, target.value ])
    } else {
      setCores(cores.filter((cor) => cor !== target.value))
    }
  }

  function checkColor(cor: string) {
    return cores.includes(cor)
  }

  return (
    <form>
      <label>
        <input 
        type="checkbox" 
        value="azul" 
        checked={checkColor('azul')}
        onChange={handleChange} />
        Azul
      </label>

      <label>
        <input 
        type="checkbox" 
        value="vermelho"
        checked={checkColor('vermelho')}
        onChange={handleChange} />
        Vermelho
      </label>
    </form>
  )
}

export default App
