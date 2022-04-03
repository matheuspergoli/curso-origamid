const listaAnimais = document.querySelector('.animais-lista')

const height = listaAnimais.scrollHeight
const animaisTop = listaAnimais.offsetTop
const primeiroH2 = document.querySelector('h2')
const h2Left = primeiroH2.offsetLeft
// console.log(h2Left)
const rect = primeiroH2.getBoundingClientRect()   

// console.log(
//   window.innerWidth,
//   window.outerWidth,
//   window.innerHeight,
//   window.outerHeight,
//   window.scrollX,
//   window.scrollY
// )

if (rect.top < 0) {
  // console.log('Passou do elemento')
}

const small = window.matchMedia('(max-width: 600px)')
// console.log(small)

if (small.matches) {
  // console.log('Usuario mobile')
} else {
  // console.log('Usuario desktop')
}

const primeiraImagem = document.querySelector('img')
console.log(primeiraImagem.offsetTop)


const somaImagens = () => {
  const imagens = document.querySelectorAll('img')
  let soma = 0
  imagens.forEach(img => {
    soma += img.offsetWidth
  })
  console.log(soma)
}

window.onload = () => {
  somaImagens()
}

const links = document.querySelectorAll('a')
links.forEach(link => {
  const linkWidth = link.offsetWidth
  const linkHeight = link.offsetHeight

  if (linkWidth >= 48 && linkHeight >= 48) {
    console.log(link, 'Possui boa acessibilidade')
  } else {
    console.log(link, 'Não possui boa acessibilidade')
  }
})

const browserSmall = window.matchMedia('(max-width: 720px)').matches

if (browserSmall) {
  const menu = document.querySelector('.menu')
  menu.classList.add('menu-mobile')
}
