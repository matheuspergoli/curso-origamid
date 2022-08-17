function ButtonModal({setModal}) {

  function handleClick() {
    setModal(ativo => !ativo)
  }

  return (
    <button onClick={handleClick}>Abrir</button>
  )
}

export default ButtonModal
