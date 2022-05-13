// const cliente = {
//   nome: 'André',
//   compras: {
//     digitais: {
//       livros: ['Livro 1', 'Livro 2'],
//       videos: ['Vídeo JS', 'Vídeo HTML']
//     },
//     fisicas: {
//       cadernos: ['Caderno 1', 'Caderno 2']
//     }
//   }
// }

// const {digitais, fisicas, digitais: {livros, videos}} = cliente.compras

// const {digitais: comprasDigitais, fisicas: comprasFisicas} = cliente.compras


// const cliente = {
//   nome: 'Matheus',
//   compras: 10
// }

// const { nome: nomeCliente, email = 'heizwow@outlook.com' } = cliente
// console.log(nomeCliente)
// console.log(email)


// const frutas = ['Banana', 'Uva', 'Morango']

// const [primeira, segunda, terceira] = frutas

// console.log(primeira)
// console.log(segunda)
// console.log(terceira)

// const [primeiro, segundo, terceiro] = ['Item 1', 'Item 2', 'Item 3']

// console.log(primeiro)
// console.log(segundo)
// console.log(terceiro)

function handleKeyboard({ key }) {
  console.log(key)
}

document.addEventListener('keyup', handleKeyboard)