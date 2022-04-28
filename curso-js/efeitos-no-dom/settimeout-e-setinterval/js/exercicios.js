// function espera(texto) {
//   console.log(texto)
// }

// setTimeout(() => {
//   console.log('Testando')
// }, 1000)

// for (let i = 0; i < 20; i++) {
//   setTimeout(() => {
//     console.log(`Função ${i + 1}`)
//   }, 1000 * i)
// }

// let i = 0
// const meuLoop = setInterval(() => {
//   console.log(i++)
//   if (i > 20) {
//     clearInterval(meuLoop)
//   }
// }, 300)




// Mude a cor da tela para azul e depois para vermelho a cada 2s.
const color = {
  azul: 'blue',
  vermelho: 'red'
}

const body = document.querySelector('body').style

// let i = 0
// const loopDeCor = setInterval(() => {
//   i++
//   if (i % 2 === 0) {
//     body.backgroundColor = color.azul
//   } else {
//     body.backgroundColor = color.vermelho
//   }
//   if (i >= 20) {
//     clearInterval(loopDeCor)
//   }
// }, 1000)


// Crie um cronometro utilizando o setInterval. Deve ser possível
// iniciar, pausar e resetar (duplo clique no pausar).
const iniciar = document.querySelector('.iniciar')
const pausar = document.querySelector('.pausar')
const resetar = document.querySelector('.resetar')
const tempo = document.querySelector('.tempo')

iniciar.addEventListener('click', iniciarTempo)
pausar.addEventListener('click', pausarTempo)
resetar.addEventListener('click', resetarTempo)

let i = 0
let timer

function iniciarTempo() {
  timer = setInterval(() => {
    tempo.innerText = i++
  }, 100)
  iniciar.setAttribute('disabled', '')
}

function pausarTempo() {
  clearInterval(timer)
  iniciar.removeAttribute('disabled')
}

function resetarTempo() {
  i = 0
  tempo.innerText = 0
}