function perimetroForma(...listaArgumentos) {
  const argArray = Array.from(arguments)
  const isArgValid = argArray.some(element => typeof element === 'string')
  if (isArgValid) {
    return 'Certifique-se de passar apenas números.'
  }
}
console.log(perimetroForma(50, 10, 505, 25, 'Oi', 'Teste', 'Outro teste', 'Matheus', 22, 1999))

// const frutas = ['Banana', 'Uva', 'Morango']
// const legumes = ['Cenoura', 'Batata']

// const comida = [...frutas, ...legumes]
// console.log(comida)

// const listaFrutas = [...frutas]

// listaFrutas.pop()
// console.log(listaFrutas)
// console.log(frutas)

// function anunciarGanhadores(premio, ...ganhadores) {
//   ganhadores.forEach(ganhador => {
//     console.log(ganhador + ' ganhou um ' + premio)
//   })
// }
// const listaGanhadores = ['Pedro', 'Maria', 'Karla', 'Matheus', 'Sophia']
// anunciarGanhadores('Carro', ...listaGanhadores)

// const listaNumeros = [5, 10, 55, 22, 30, 1235, 5000]
// const numeroMaximo = Math.max(...listaNumeros)
// console.log(numeroMaximo)

// const btns = document.querySelectorAll('button')
// const btnsArray = [...btns]
// console.log(btnsArray)

// const frase = 'Isso é JavaScript'
// const fraseArray = [...frase]
// console.log(fraseArray)