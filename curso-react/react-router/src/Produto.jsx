import { useParams, Routes, Route, NavLink } from "react-router-dom"
import ProdutoDescricao from "./ProdutoDescricao"
import ProdutoAvaliacao from "./ProdutoAvaliacao"
import ProdutoCustomizado from "./ProdutoCustomizado"

function Produto() {
  const params = useParams()

  const produto = {
    color: 'green',
    textTransform: 'capitalize'
  }

  const style = {
    color: 'tomato'
  }

  return (
    <section>
      <h1>Produto: {params && <span style={produto}>{params.id}</span>}</h1>
      <nav>
        <ul>
          <li>
            <NavLink to="" activeStyle={style}>Descrição</NavLink>
          </li>
          <li>
            <NavLink to="avaliacao" activeStyle={style}>Avaliação</NavLink>
          </li>
          <li>
            <NavLink to="customizado" activeStyle={style}>Customizado</NavLink>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="" element={<ProdutoDescricao />} />
        <Route path="avaliacao" element={<ProdutoAvaliacao />} />
        <Route path="customizado" element={<ProdutoCustomizado />} />
      </Routes>
    </section>
  )
}

export default Produto
