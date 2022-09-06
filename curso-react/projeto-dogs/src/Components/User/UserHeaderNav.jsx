import React from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { UserContext } from "../../Context/UserContext"
import MinhasFotosImg from "../../assets/feed.svg"
import EstatisticasImg from "../../assets/estatisticas.svg"
import AdicionarFotosImg from "../../assets/adicionar.svg"
import SairImg from "../../assets/sair.svg"
import styles from "./UserHeaderNav.module.css"
import useMedia from '../../Hooks/useMedia'

function UserHeaderNav() {
  const { userLogout } = React.useContext(UserContext)
  const [mobileMenu, setMobileMenu] = React.useState(false)
  const mobile = useMedia('(max-width: 40rem)')
  const { pathname } = useLocation()

  React.useEffect(() => {
    setMobileMenu(false)
  }, [pathname])

  return (
    <>
      {mobile && (
        <button 
        aria-label='Menu' 
        className={`${styles.mobileButton} ${mobileMenu && styles.mobileButtonActive}`}
        onClick={() => setMobileMenu(!mobileMenu)}></button>
      )}

      <nav className={`${mobile ? styles.navMobile : styles.nav} ${mobileMenu && styles.navMobileActive}`}>
        <NavLink to="/conta" end>
          <img src={MinhasFotosImg} alt="Icon" />
          {mobile && 'Minhas fotos'}
        </NavLink>

        <NavLink to="/conta/estatisticas">
          <img src={EstatisticasImg} alt="Icon" />
          {mobile && 'Estatísticas'}
        </NavLink>

        <NavLink to="/conta/postar">
          <img src={AdicionarFotosImg} alt="Icon" />
          {mobile && 'Adicionar fotos'}
        </NavLink>
        <button onClick={userLogout}>
          <img src={SairImg} alt="Icon" />
          {mobile && 'Sair'}
        </button>
      </nav>
    </>
  )
}

export default UserHeaderNav