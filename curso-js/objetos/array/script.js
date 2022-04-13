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
console.log(instrumentos)

idades.sort()
console.log(idades)

carros.unshift('Kia', 'Ferrari')
carros.push('Fiesta', 'BMW')
console.log(carros)

console.log(carros.shift())
console.log(carros)

const carrosInvertido = carros.reverse()
console.log(carrosInvertido)