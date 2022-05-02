const contato = document.querySelector('#contato')
const texto = document.querySelector('.texto')

function handleKeyUp(event) {
  const target = event.target
  if (!target.checkValidity()) {
    target.classList.add('invalido')
    contato.nome.setCustomValidity('Preencha com seu nome.')
    contato.email.setCustomValidity('Preencha com seu email.')
    target.nextElementSibling.innerText = target.validationMessage
  }
  texto.innerHTML = target.value
}

contato.addEventListener('keyup', handleKeyUp)