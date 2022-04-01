'use strict'

var carro = 'Fusca'

function mostrarCarro() {
  console.log(carro)
}

mostrarCarro()
console.log(carro)

function somarDois(num) {
  const dois = 2
  return num + dois
}

function dividirDois(num) {
  const dois = 2
  return num / dois
}

console.log(somarDois(4))
console.log(dividirDois(6))

var numero = 50

for (let numero = 0; numero < 10; numero++) {
  console.log(numero)
}

const total = 10 * numero
console.log(total)