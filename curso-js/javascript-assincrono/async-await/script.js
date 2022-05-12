async function puxarDados() {
  const promiseDados = fetch('./dados.json')
  const promiseClientes = fetch('./clientes.json') 

  const jsonDados = await (await promiseDados).json()
  const jsonClientes = await (await promiseClientes).json()

  console.log(jsonDados)
  console.log(jsonClientes)
}
puxarDados()