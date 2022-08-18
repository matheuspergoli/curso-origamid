import React from "react"

function Produto() {

  React.useEffect(() => {
    function handleScroll(event) {
      console.log(event)
    }
    window.addEventListener('click', handleScroll)
    return () => {
      window.removeEventListener('click', handleScroll)
    }
  }, [])

  return (
    <div className="w-max p-2 m-4 rounded-md text-4xl bg-blue-400">
      <h1>Meu produto</h1>
      <p>Preço: R$ 500</p>
    </div>
  )
}

export default Produto
