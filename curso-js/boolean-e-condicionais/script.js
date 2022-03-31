var possuiGraduacao = false
var possuiDoutorado = false

if (possuiGraduacao) {
  console.log('É verdadeiro')
} else if (possuiDoutorado) {
  console.log('Possui doutorado')
} else {
  console.log('Não possui nada')
}

var nome = 'Matheus'

if (nome) {
  console.log(nome)
} else {
  console.log('Nome não existe')
}

/*
Esses dois sinais de exclamação serve para verificar se um valor é truthy ou falsy
*/

var nome1 = 'André'
var idade = 28
var possuiDoutorado = false
var empregoFuturo
var dinheiroNaConta = 0

console.log(!!nome1)
console.log(!!idade)
console.log(!!possuiDoutorado)
console.log(!!empregoFuturo)
console.log(!!dinheiroNaConta)

var expressao = (5 - 2) && (5 - ' ') && (5 - 2)
console.log(expressao)

var brasil = 207
var china = 1340

if (brasil > china) {
  console.log('População do Brasil é maior que a da China')
} else {
  console.log('População da China é maior que a do Brasil')
}

const corFavorita = 'Roxo'

switch (corFavorita) {
  case 'Azul':
    console.log('Olhe para o céu')
    break

  case 'Vermelho':
    console.log('Olhe para as rosas')
    break

  case 'Amarelo':
    console.log('Olhe para o sol')
    break
  
  case 'Verde':
    console.log('Olhe para a floresta')
    break

  default:
    console.log('Feche os olhos')
}