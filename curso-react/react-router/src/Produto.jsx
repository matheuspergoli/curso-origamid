import { useParams } from "react-router-dom"

function Produto() {
  const params = useParams()
  console.log(params)

  const produto = {
    color: 'green',
    textTransform: 'capitalize'
  }

  return (
    <section>
      <h1>Produto: {params && <span style={produto}>{params.id}</span>}</h1>
    </section>
  )
}

export default Produto
