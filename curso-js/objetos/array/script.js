const instrumentos = ['Guitarra', 'Baixo', 'Violão']
const carros = new Array('Ford', 'Fiat', 'Honda')
const frutas = ['Banana', 'Pêra', ['Uva Roxa', 'Uva Verde']]
const precos = [49, 99, 69, 89]
const idades = [32, 21, 33, 45, 1, 12, 8]
const li = document.querySelectorAll('li')

const obj = {
  0: 'André',
  1: 'Rafael',
  2: 'Teste',
  length: 3
}

const objArray = Array.from(obj)

const arrayLi = Array.from(li)

instrumentos.sort()
// console.log(instrumentos)

idades.sort()
// console.log(idades)

// carros.unshift('Kia', 'Ferrari')
// carros.push('Fiesta', 'BMW')
// console.log(carros)

// console.log(carros.shift())
// console.log(carros)

const carrosInvertido = carros.reverse()
console.log(carrosInvertido)
carros.splice(1, 0, 'Ferrari', 'BMW', 'Kia')
console.log(carros)

const teste = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5']
console.log(teste.fill('Banana', 0, 2))

const transporte1 = ['Barco', 'Avião']
const transporte2 = ['Carro', 'Moto']
const transportes = transporte1.concat(transporte2)
console.log(transportes)

const maisTransportes = [].concat(transporte1, transporte2, 'Van')
console.log(maisTransportes)

let htmlString = '<h2>Título Príncipal</h2>'
htmlString = htmlString.split('h2')
htmlString = htmlString.join('section')
// console.log(htmlString)

const linguagens = ['html', 'css', 'js', 'php', 'python']
const cloneLinguagens = linguagens.slice()
console.log(linguagens.slice(2, 4))