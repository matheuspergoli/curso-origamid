var nome = 'André'

var nomeMinusculo = nome.toLowerCase()

var altura = 1.7

var btn = document.querySelector('.btn')

btn.addEventListener('click', () => {
  console.log('Clicou')
})

console.log(nome.indexOf('é'))
console.log(nome.toUpperCase())
console.log(nome.charAt(3))
console.log(nome.replace('ré', 'rei'))

btn.classList.add('ativo')