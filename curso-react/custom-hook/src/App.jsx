import React from "react"
import useFetch from "./useFetch" 
import useLocalStorage from "./useLocalStorage"

function App() {
  const [produto, setProduto] = useLocalStorage('produto', '')
  const {request, data, loading, erro} = useFetch()

  React.useEffect(() => {
    async function fetchData() {
      const {response, json} = await request('https://ranekapi.origamid.dev/json/api/produto/')
      console.log(response)
      console.log(json)
    }
    fetchData()
  }, [request])
  
  function handleClick({target}) {
    setProduto(target.innerText)
  }

  if (erro) return <p>{erro}</p>
  if (loading) return <p>Carregando...</p>
  if (data) {
    return (
      <div>
        <p>Produto preferido: {produto}</p>
        <button onClick={handleClick} style={{margin: '0 10px 0 0'}}>Notebook</button>
        <button onClick={handleClick} style={{margin: '0 0 0 10px'}}>Smartphone</button>
  
        {data.map((produto) =>  (
          <div key={produto.id}>
            <h1>{produto.nome}</h1>
          </div>
        ))}
      </div>
    )
  } else return null
}

export default App
