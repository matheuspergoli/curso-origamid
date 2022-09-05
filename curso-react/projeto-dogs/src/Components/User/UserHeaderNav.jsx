import React from 'react'
import { NavLink } from 'react-router-dom'
import { UserContext } from "../../Context/UserContext"
import MinhasFotosImg from "../../assets/feed.svg"
import EstatisticasImg from "../../assets/estatisticas.svg"
import AdicionarFotosImg from "../../assets/adicionar.svg"
import SairImg from "../../assets/sair.svg"
import styles from "./UserHeaderNav.module.css"

function UserHeaderNav() {
  const { userLogout } = React.useContext(UserContext)
  const [mobile, setMobile] = React.useState(null)
  
  return (
    <nav className={styles.nav}>
      <NavLink to="/conta" end>
        {mobile && 'Minhas fotos'}
        <img src={MinhasFotosImg} alt="Icon" />
      </NavLink>

      <NavLink to="/conta/estatisticas">
        {mobile && 'Estatísticas'}
        <img src={EstatisticasImg} alt="Icon" />
      </NavLink>

      <NavLink to="/conta/postar">
        {mobile && 'Adicionar fotos'}
        <img src={AdicionarFotosImg} alt="Icon" />
      </NavLink>
      <button onClick={userLogout}>
        {mobile && 'Sair'}
        <img src={SairImg} alt="Icon" />
      </button>
    </nav>
  )
}

export default UserHeaderNav