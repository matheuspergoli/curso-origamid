import { NavLink } from "react-router-dom"

function Header() {
  const style = {
    color: 'tomato'
  }

  return (
    <>
      <header>Esse é o Header</header>
      <nav>
        <ul>
          <li>
            <NavLink to="/" activeStyle={style} end>Home</NavLink>
          </li>
          <li>
            <NavLink to="sobre" activeStyle={style}>Sobre</NavLink>
          </li>
          <li>
            <NavLink to="contato" activeStyle={style}>Contato</NavLink>
          </li>
          <li>
            <NavLink to="login" activeStyle={style}>Login</NavLink>
          </li>
        </ul>
      </nav>
    </>
  )
}

export default Header
