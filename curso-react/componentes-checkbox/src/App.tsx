import React from "react"
import Checkbox from "./Form/Checkbox"

function App() {
  const [linguagens, setLinguagens] = React.useState([])

  return (
    <form>
      <Checkbox options={['JavaScript', 'PHP', 'TypeScript']} value={linguagens} setValue={setLinguagens} />
    </form>
  )
}

export default App
