// const carros = ['Ford', 'Fiat', 'Honda']

// carros.forEach((item, index, array) => {
//   console.log(item)
// })

// console.log(carros)

// const li = document.querySelectorAll('li')

// li.forEach(item => item.classList.add('ativa'))

// const numeros = [2, 4, 5, 6 , 78]
// const numerosMultiplicadoPorDois = numeros.map(item => item *2)

// const carros = ['Ford', 'Fiat', 'Honda']
// const novaArray = carros.map((item, index, array) => {
//   return item.toUpperCase()
// })

// console.log(numeros)
// console.log(numerosMultiplicadoPorDois)
// console.log(novaArray)

// const aulas = [
//   {
//     nome: 'HTML 1',
//     min: 15
//   },
//   {
//     nome: 'HTML 2',
//     min: 10
//   },
//   {
//     nome: 'CSS 1',
//     min: 20
//   },
//   {
//     nome: 'JS 1',
//     min: 25
//   },
// ]

// const horasAula = aulas.map(item => {
//   return item.min
// })

// function nomeAulas(aula) {
//   return aula.nome
// }

// const arrayNomeAulas = aulas.map(nomeAulas)

// console.log(horasAula)

// const aulas = [10, 25, 30]

// const reduceAulas = aulas.reduce((acumulador, item, index, array) => {
//   console.log(acumulador, item)

//   return acumulador + item
// }, 0)

// const rand = (min = 1, max = 200) => {
//   const numero = Math.floor(Math.random() * (max - min) + min)
//   return numero
// }

// const novoArray = () => {
//   const arr = []
//   for (let i = 0; i < 10; i++) {
//     arr.push(rand())
//   }
//   return arr
// }

// const arrayNumeros = novoArray()

// // const numeros = [5, 10, 15, 35, 75, 95, 25, 105, 175, 30]

// const numeroMaior = arrayNumeros.reduce((acumulador, item) => {
//   return acumulador < item ? item : acumulador
// })

// console.log(arrayNumeros)
// console.log(numeroMaior)

// const aulas = [
//   {
//     nome: 'HTML 1',
//     min: 15
//   },
//   {
//     nome: 'HTML 2',
//     min: 10
//   },
//   {
//     nome: 'CSS 1',
//     min: 20
//   },
//   {
//     nome: 'JS 1',
//     min: 25
//   },
// ]

// const listaAulas = aulas.reduce((acumulador, aula, index) => {
//   acumulador[index] = aula.nome
//   return acumulador
// }, {})

// console.log(listaAulas)

// const tempoAula = aulas.reduce((acumulador, item, index) => {
//   acumulador[index] = item.min
//   return acumulador
// }, {})

// console.log(tempoAula)

// const frutas = ['Banana', 'Pêra', 'Uva']

// const every = frutas.every((item) => {
//   return item
// })

// console.log(every)

// const temUva = frutas.some((item) => {
//   return item === 'Uva'
// })

// console.log(temUva)

// const frutas = ['Banana', 'Pêra', 'Uva']
// const numeros = [6, 43, 22, 88, 101, 29]

// const maiorQue3 = numeros.every((item) => item > 3)
// console.log(maiorQue3)

// const indexUva = frutas.findIndex(item => {
//   return item === 'Uva'
// })
// console.log(indexUva)

// const frutas = ['Banana', undefined, null, '', 'Uva', 0, 'Maçã']

// const arrayFrutas = frutas.filter(item => {
//   return item
// })
// console.log(arrayFrutas)

// const numeros = [6, 43, 22, 88, 101, 29]

// const numerosMaioresQue45 = numeros.filter(numero => numero > 45)
// console.log(numerosMaioresQue45)

// const aulas = [
//   {
//     nome: 'HTML 1',
//     min: 15
//   },
//   {
//     nome: 'HTML 2',
//     min: 10
//   },
//   {
//     nome: 'CSS 1',
//     min: 20
//   },
//   {
//     nome: 'JS 1',
//     min: 25
//   },
// ]

// const maiores15 = aulas.filter(aula => aula.min > 15)
// console.log(maiores15)