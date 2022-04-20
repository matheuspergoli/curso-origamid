// const perimetro = new Function('lado', 'return lado * 4')

// function somar(n1, n2) {
//   return n1 + n2
// }
// console.log(somar.name)
// console.log(somar.length)

// function darOi(nome) {
//   console.log('Oi pra você ' + nome)
// }

// darOi.call({}, 'Matheus')

// function descricaoCarro(velocidade) {
//   console.log(this)
//   console.log(this.marca + ' ' + this.ano + ' ' + velocidade)
// }

// descricaoCarro.call({marca: 'Honda', ano: 2015}, 100)

// const carros = ['Ford', 'Fiat', 'VW']
// const frutas = ['Banana', 'Uva', 'Pêra']

// carros.forEach.call(carros, (item) => {
  // console.log(item)
// })

// function Dom(seletor) {
//   this.element = document.querySelector(seletor)
// }

// Dom.prototype.ativo = function(classe) {
//   this.element.classList.add(classe)
// }

// const ul = new Dom('ul')

// const li = {
//   element: document.querySelector('li')
// }

// ul.ativo.call(li, 'ativar')

// console.log(ul)

// const frutas = ['Uva', 'Maçã', 'Banana']

// Array.prototype.pop.call(frutas)

// const li = document.querySelectorAll('li')

// const filtro = Array.prototype.filter.call(li, (item) => {
//   return item.classList.contains('ativo')
// })
// console.log(filtro)

const numeros = [33, 232, 33, 434, 54, 5424, 4]