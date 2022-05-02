const contato = document.querySelector('#contato')
const texto = document.querySelector('.texto')

// function handleKeyUp(event) {
//   const target = event.target
//   if (!target.checkValidity()) {
//     target.classList.add('invalido')
//     contato.nome.setCustomValidity('Nome obrigatório.')
//     contato.email.setCustomValidity('Insira um email válido.')
//     target.nextElementSibling.innerText = target.validationMessage
//   }
//   contato.mensagem.innerText = target.value
// }
// contato.addEventListener('keyup', handleKeyUp)

// function handleKeyUp(event) {
//   document.body.style.backgroundColor = event.target.value
// }

// contato.addEventListener('change', handleKeyUp)

// function handleKeyUp(event) {
//   if (event.target.checked) {
//     console.log(event.target.value)
//   }
// }

// contato.addEventListener('change', handleKeyUp)

const dados = {}

function handleChange(event) {
  dados[event.target.name] = event.target.value
}

contato.addEventListener('change', handleChange)