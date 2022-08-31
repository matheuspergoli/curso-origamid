import { useNavigate } from "react-router-dom"
import Head from "./Head"

function Login() {
  const navigate = useNavigate()

  function handleClick() {
    navigate('/conta')
  }

  return (
    <section>
      <Head title="Login" description="Essa é a descrição de Login" />
      <h1>Essa é a página de Login</h1>
      <button onClick={handleClick}>Login</button>
    </section>
  )
}

export default Login
