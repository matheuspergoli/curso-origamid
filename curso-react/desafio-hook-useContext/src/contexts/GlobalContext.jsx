import React from "react"

export const GlobalContext = React.createContext()

export function GlobalContextProvider({children}) {
  const [dados, setDados] = React.useState(null)

  React.useEffect(() => {
    fetchDados()
  }, [])
  
  async function fetchDados() {
    const url = 'https://ranekapi.origamid.dev/json/api/produto/'
    const json = await (await fetch(url)).json()
    setDados(json)
  }

  function limparDados() {
    setDados(null)
  }

  function mostrarDados() {
    console.log(dados)
  }

  return (
    <GlobalContext.Provider value={{fetchDados, limparDados, mostrarDados }}>
      {children}
    </GlobalContext.Provider>
  )
}