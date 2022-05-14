// fetch('https://pokeapi.co/api/v2/pokemon/')
// .then(({ headers }) => console.log(headers))

const frutas = ['Banana', 'Morango', 'Uva'];
const frase = 'Isso é JavaScript';

const buttons = document.querySelectorAll('button')

for (const btn of buttons) {
  btn.style.color = 'blue'
}

const carro = {
  marca: 'Honda',
  ano: 2018
}

// for (const propriedade in carro) {
//   console.log(`${propriedade} : ${carro[propriedade]}`)
// }

// for (const fruta of frutas) {
//   console.log(fruta)
// }

// for (const letra of frase) {
//   console.log(letra)
// }

// for (const fruta of frutas) {
//   console.log(fruta)
// }

const btnUnico = document.querySelector('button')

const btnStyles = getComputedStyle(btnUnico)

for (const style in btnStyles) {
  console.log(`${style}: ${btnStyles[style]}`)
}

let i = 0

do {
  console.log(i++)
} while (i <= 5)