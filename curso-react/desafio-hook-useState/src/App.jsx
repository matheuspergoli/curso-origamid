import React from "react"
import Button from "./Button"

function App() {
  const URL = 'https://ranekapi.origamid.dev/json/api/produto/'

  return (
    <main className="flex">
      <Button innerText={'Tablet'} fetchURL={URL} />
      <Button innerText={'Notebook'} fetchURL={URL} />
      <Button innerText={'Smartphone'} fetchURL={URL} />
    </main>
  )
}

export default App
