import React from "react"
import ButtonModal from "./ButtonModal"
import Modal from "./Modal"

function App() {
  const [modal, setModal] = React.useState(true)
  const [contar, setContar] = React.useState(1)
  const [items, setItems] = React.useState(['Item 1'])

  function handleClick() {
    setContar(contar => contar + 1)
    setItems(items => [...items, `Item ${contar + 1}`])
  }

  return (
    <div>
      {items.map(item => <li key={item}>{item}</li>)}
      <button onClick={handleClick}>{contar}</button>
      {/* <div>{modal ? 'Modal aberto' : 'Modal fechado'}</div>
      <Modal modal={modal} setModal={setModal} />
      <ButtonModal setModal={setModal} /> */}
    </div>
  )
}

export default App
