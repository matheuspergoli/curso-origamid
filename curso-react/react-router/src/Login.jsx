import { useNavigate } from "react-router-dom"

function Login() {
  const navigate = useNavigate()

  function handleClick() {
    navigate('/conta')
  }

  return (
    <section>
      <h1>Essa é a página de Login</h1>
      <button onClick={handleClick}>Login</button>
    </section>
  )
}

export default Login
