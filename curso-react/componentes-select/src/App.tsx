import React from "react"
import Select from "./Form/Select"

function App() {
  const [produto, setProduto] = React.useState('')

  return (
    <form>
      <Select options={['Smartphone', 'Tablet']} value={produto} setValue={setProduto} />
    </form>
  )
}

export default App
