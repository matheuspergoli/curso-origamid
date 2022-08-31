import { Link } from "react-router-dom"

function Home() {
  return (
    <section>
      <h1>Home</h1>
      <nav>
        <ul>
          <li>
            <Link to="produto/notebook">Notebook</Link>
          </li>
          <li>
            <Link to="produto/smartphone">Smartphone</Link>
          </li>
        </ul>
      </nav>
    </section>
  )
}

export default Home
