import React from "react"
import MostrarDados from "./components/MostrarDados"
import LimparDados from "./components/LimparDados"
import BuscarDados from "./components/BuscarDados"
import { GlobalContextProvider } from "./contexts/GlobalContext"

function App() {

  return (
    <GlobalContextProvider>
      <MostrarDados />
      <LimparDados />
      <BuscarDados />
    </GlobalContextProvider>
  )
}

export default App
