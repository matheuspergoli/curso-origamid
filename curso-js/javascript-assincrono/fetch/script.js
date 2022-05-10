const sobre = fetch('./sobre.html')
const div = document.createElement('div')

sobre
.then(response => response.text())
.then(body => {
  div.innerHTML = body
  const titulo = div.querySelector('h1')
  const texto = div.querySelector('p')
  document.body.appendChild(titulo)
  document.body.appendChild(texto)
})
















// const btn = document.querySelector('button')

// function mostrarCEP() {
//   const input = document.querySelector('input').value
//   if (input.length > 8 || input.length === 0) {
//     alert('Digite um CEP válido.')
//     return
//   } else {
//     const url = `https://viacep.com.br/ws/${input}/json/`
//     fetch(url)
//     .then(response => response.json())
//     .then(dados => {
//       const bairro = document.querySelector('.bairro')
//       const cep = document.querySelector('.cep')
//       const localidade = document.querySelector('.localidade')
  
//       bairro.innerText = `Bairro: ${dados.bairro}`
//       cep.innerText = `CEP: ${dados.cep}`
//       localidade.innerText = `Localidade: ${dados.localidade}`
//     })
//     .catch(() => {
//       alert(`${input} CEP Não encontrado.`)
//     })
//     .finally(() => {
//       console.log('Busca finalizada')
//     })
//   }
// }

// btn.addEventListener('click', mostrarCEP)