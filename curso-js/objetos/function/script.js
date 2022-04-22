const perimetro = new Function('lado', 'return lado * 4')

function somar(n1, n2) {
  return n1 + n2
}
// console.log(somar.length)
// console.log(somar.name)
// console.log(somar.name.toUpperCase())

function darOi(nome, idade) {
  console.log(`Oi pra você ${nome} | Idade: ${idade}`)
}
// darOi.call({}, 'Matheus', 22)

const carro = {
  marca: 'Ford',
  ano: 2018
}

function descricaoCarro() {
  console.log(this)
  console.log(this.marca + ' ' + this.ano)
}
// descricaoCarro.call({marca: 'Ferrari', ano: 2018})

const carros = ['Ford', 'Fiat', 'VW']
const frutas = ['Banana', 'Uva', 'Pêra']

frutas.forEach.call(carros, carro => {
  // console.log(carro)
})

function Dom(seletor) {
  this.element = document.querySelector(seletor)
}

Dom.prototype.ativo = (classe) => {
  this.element.classList.add(classe)
}

const ul = new Dom('ul')
ul.ativo('ativar')