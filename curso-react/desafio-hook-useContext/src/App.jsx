import React from "react"
import LogarDados from "./components/LogarDados"
import LimparDados from "./components/LimparDados"
import BuscarDados from "./components/BuscarDados"
import { GlobalContextProvider } from "./contexts/GlobalContext"

function App() {

  return (
    <GlobalContextProvider>
      <LogarDados />
      <LimparDados />
      <BuscarDados />
    </GlobalContextProvider>
  )
}

export default App
