// const perimetro = new Function('lado', 'return lado * 4')

// function somar(n1, n2) {
//   return n1 + n2
// }
// console.log(somar.length)
// console.log(somar.name)
// console.log(somar.name.toUpperCase())

// function darOi(nome, idade) {
//   console.log(`Oi pra você ${nome} | Idade: ${idade}`)
// }
// darOi.call({}, 'Matheus', 22)

// const carro = {
//   marca: 'Ford',
//   ano: 2018
// }

// function descricaoCarro() {
//   console.log(this)
//   console.log(this.marca + ' ' + this.ano)
// }
// descricaoCarro.call({marca: 'Ferrari', ano: 2018})

// const carros = ['Ford', 'Fiat', 'VW']
// const frutas = ['Banana', 'Uva', 'Pêra']

// frutas.forEach.call(carros, carro => {
//   console.log(carro)
// })

// function Dom(seletor) {
//   this.element = document.querySelector(seletor)
// }

// Dom.prototype.ativo = function(classe) {
//   this.element.classList.add(classe)
// }

// const li = {
//   element: document.querySelector('li')
// }

// Dom.prototype.ativo.call(li, 'ativar')


// const lista = new Dom('ul')
// lista.ativo.call(li, 'ativar')
// lista.ativo('ativar')

// const frutas = ['Uva', 'Maçã', 'Banana']

// Array.prototype.pop.call(frutas)

const li = document.querySelectorAll('li')
const arrayLi = Array.from(li)

const filtro = Array.prototype.filter.bind(li, (item) => {
  return item.classList.contains('ativo')
})

console.log(filtro())
const numeros = [5, 55, 10, 125, 255, 470, 990, 1999, 2020]

const $ = document.querySelectorAll.bind(document)

const carro = {
  marca: 'Ford',
  ano: 2018,

  acelerar: function(aceleracao, tempo) {
    return `${this.marca} acelerou ${aceleracao} em ${tempo}`
  }
}

const honda = {
  marca: 'Honda',
}

const acelerarHonda = carro.acelerar.bind(honda)

function imc(altura, peso) {
  const resultado = peso / (altura * altura)
  return resultado.toFixed(2)
}

const imc180 = imc.bind(null, 1.80)

console.log(imc180(100))