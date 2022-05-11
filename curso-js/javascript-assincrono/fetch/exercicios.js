// Utilizando a API https://viacep.com.br/ws/${CEP}/json/
// crie um formulário onde o usuário pode digitar o cep
// e o endereço completo é retornado ao clicar em buscar

// const form = document.querySelector('form')
// const divResultado = document.querySelector('resultado')

function handleClick(event) {
  event.preventDefault()

  divResultado.innerHTML = ''

  const cep = form.cep

  if (cep.value.length === 0 || cep.value < 0 || cep.value.length > 8) {
    alert('CEP Não encontrado ou Inválido')
    cep.value = ''
    return
  } else {
    buscarCEP(cep.value)
  }
}
// form.addEventListener('submit', handleClick)

function buscarCEP(cep) {
  const CEP_URL = `https://viacep.com.br/ws/${cep}/json/`

  fetch(CEP_URL)
  .then(response => response.json())
  .then(json => {
    if (json.erro === 'true') {
      alert('CEP Não encontrado ou Inválido')
      return
    }
    const bairro = json.bairro
    const cep = json.cep
    const localidade = json.localidade
    const logradouro = json.logradouro
    divResultado.innerHTML = gerarDados(bairro, cep, localidade, logradouro)
  })
  .catch(() => alert('CEP Não encontrado ou Inválido'))
  .finally(() => divResultado.innerHTML += `<p><strong>Busca finalizada</strong></p>`)
}

function gerarDados(bairro, cep, localidade, logradouro) {
  const resultado = `<h1>Bairro: ${bairro}</h1>
                     <p>CEP: ${cep}</p>
                     <p>Localidade: ${localidade}</p>
                     <p>Logradouro: ${logradouro}</p>`
  return resultado                
}

// Utilizando a API https://blockchain.info/ticker
// retorne no DOM o valor de compra da bitcoin and reais.
// atualize este valor a cada 30s

// const url = 'https://blockchain.info/ticker'
// const divResultado = document.querySelector('.resultado')

function getValorBitcoin() {
  fetch(url)
  .then(response => response.json())
  .then(json => {
    const str = `<h1>O preço de Bitcoin em reais atualmente vale R$${json.BRL.buy}</h1>
                 <h1>Este valor é atualizado a cada 30s</h1>` 
    divResultado.innerHTML = str
  })
}
// getValorBitcoin()

// setInterval(() => {
//   getValorBitcoin()
// }, 30 * 1000)

// Utilizando a API https://api.chucknorris.io/jokes/random
// retorne uma piada randomica do chucknorris, toda vez que
// clicar em próxima

const btn = document.querySelector('button')
const divResultado = document.querySelector('.resultado')

function gerarFrase() {
  const url = 'https://api.chucknorris.io/jokes/random'

  fetch(url)
  .then(response => response.json())
  .then(json => {
    const str = `<h1>${json.value}</h1>`
    divResultado.innerHTML = str
  })
}

btn.addEventListener('click', gerarFrase)