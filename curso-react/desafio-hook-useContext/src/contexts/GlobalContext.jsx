import React from "react"

export const GlobalContext = React.createContext()

export function GlobalContextProvider({children}) {
  const [dados, setDados] = React.useState(null)

  React.useEffect(() => {
    buscarDados()
  }, [])
  
  async function buscarDados() {
    const url = 'https://ranekapi.origamid.dev/json/api/produto/'
    const json = await (await fetch(url)).json()
    setDados(json)
  }

  function limparDados() {
    setDados(null)
  }

  function mostrarDados() {
    if (dados === null) {
      alert('Não há dados no momento, opte por Buscar dados primeiro.')
      return
    }
    console.log(dados)
  }

  return (
    <GlobalContext.Provider value={{dados, mostrarDados, limparDados, buscarDados }}>
      {children}
    </GlobalContext.Provider>
  )
}