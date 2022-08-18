import React from "react"
import Produto from "./Produto"

function App() {
  const [dadosJSON, setDadosJSON] = React.useState(null)

  React.useEffect(() => {
    const tempItem = localStorage.getItem('produto')
    if (tempItem) {
      async function fetchStorage() {
        const URL = 'https://ranekapi.origamid.dev/json/api/produto/'
        const json = await (await fetch(`${URL}${tempItem}`)).json()
        setDadosJSON(json)
      }
      fetchStorage()
    }
  }, [])

  async function fetchDados({ target }) {
    const URL = 'https://ranekapi.origamid.dev/json/api/produto/'
    const json = await (await fetch(`${URL}${target.innerText}`)).json()
    setDadosJSON(json)
  }

  const style = {
    margin: '0 1rem 0 0'
  }

  return (
    <main>
      <h1>Preferência: {dadosJSON && dadosJSON.nome}</h1>
      <button onClick={fetchDados} style={style}>Notebook</button>
      <button onClick={fetchDados} style={style}>Smartphone</button>
      {dadosJSON && <Produto dados={dadosJSON} />}
    </main>
  )
}

export default App
