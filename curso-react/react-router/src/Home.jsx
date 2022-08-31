import { Link } from "react-router-dom"
import Head from "./Head"
import { Helmet } from "react-helmet"

function Home() {
  return (
    <section>
      {/* <Head title="Home" description="Essa é a descrição da Home" /> */}
      <Helmet>
        <title>React | Home</title>
        <meta name="description" content="Essa é a descrição da Home" />
      </Helmet>
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
