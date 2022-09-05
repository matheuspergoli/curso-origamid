import React from "react"
import styles from "./Header.module.css"
import { Link } from "react-router-dom"
import DogsImg from "../../assets/dogs.svg"
import { UserContext } from "../../Context/UserContext"

function Header() {
  const { data } = React.useContext(UserContext)

  return (
    <header className={styles.header}>
      <nav className={`${styles.nav} container`}>
        <Link className={styles.logo} to="/" aria-label="Dogs - Home"> 
          <img src={DogsImg} alt="Logo" />
        </Link>
        {data ? (
          <Link className={styles.login} to="/conta">{data.nome}</Link>
        ) : (
          <Link className={styles.login} to="/login">Login | Criar</Link>
        )}
      </nav>
    </header>
  )
}

export default Header
