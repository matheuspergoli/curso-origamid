// const img = document.querySelector('img')

// function callback(event) {
//   console.log(event)
// }

// img.addEventListener('click', callback)

// const animaisLista = document.querySelector('.animais-lista')

// function callbackLista(event) {
//   console.log(event.target)
// }
// animaisLista.addEventListener('click', callbackLista)

// const linkExterno = document.querySelector('a[href^="https"]')

// function handleClickExterno(event) {
//   event.preventDefault()
//   console.log(this.getAttribute('href'))
// }
// linkExterno.addEventListener('click', handleClickExterno)

// const h1 = document.querySelector('h1')

// function handleEvent(event) {
//   console.log(event.type, event)
// }

// h1.addEventListener('click', handleEvent)
// h1.addEventListener('mousemove', handleEvent)
// h1.addEventListener('mouseenter', handleEvent)

// window.addEventListener('scroll', handleEvent)
// window.addEventListener('risize', handleEvent)

// function handleKeyboard(event) {
//   if (event.key === 'f') {
//     document.body.classList.toggle('fullscreen')
//   }
//   console.log(event.key)
// }

// window.addEventListener('keydown', handleKeyboard)

// const imgs = document.querySelectorAll('img')

// function handleImg(event) {
//   console.log(event.currentTarget.getAttribute('src'))
// }

// imgs.forEach(img => {
//   img.addEventListener('click', handleImg)
// })

// const links = document.querySelectorAll('a[href^="#"]')

// function handleLink(event) {
//   links.forEach(link => {
//     link.classList.remove('ativo')
//   })
//   event.preventDefault()
//   event.currentTarget.classList.add('ativo')
// }

// links.forEach(link => {
//   link.addEventListener('click', handleLink)
// })

const elementos = document.querySelectorAll('body *')

function handleElemento(event) {
  event.currentTarget.remove()
}

// elementos.forEach(elemento => {
//   elemento.addEventListener('click', handleElemento)
// })

function handleClickT(event) {
  console.log(event.key)
  if (event.key === 't') {
    document.documentElement.classList.toggle('texto-maior')
  }
}

window.addEventListener('keydown', handleClickT)