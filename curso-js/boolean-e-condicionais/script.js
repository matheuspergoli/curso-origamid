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
console.log(!!' ')
console.log(!!'')
console.log(!!5)
console.log(!!0)