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

// const li = document.querySelectorAll('li')
// const arrayLi = Array.from(li)

// const filtro = arrayLi.filter.call(li, (item) => {
//   return item.classList.contains('ativo')
// })
// console.log(filtro)