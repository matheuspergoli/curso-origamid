// const menu = document.querySelector('.menu')
// menu.classList.add('ativo')
// menu.classList.remove('azul')
// menu.classList.toggle('azul')

// if (menu.classList.contains('azul')) {
//   menu.classList.add('possui-azul')
// } else {
//   menu.classList.add('nao-possui-azul')
// }

// menu.className += ' teste'
// console.log(menu.className)

const animais = document.querySelector('.animais')
console.log(animais.attributes['data-texto'])
console.log(animais.attributes[0])

const img = document.querySelector('img')
console.log(img.getAttribute('src'))
img.setAttribute('alt', 'raposa')
console.log(img.hasAttribute('alt'))

const menuLinks = document.querySelectorAll('.menu a')
menuLinks.forEach(link => {
  link.classList.add('ativo')
})

menuLinks.forEach(link => {
  link.classList.remove('ativo')
})

menuLinks[0].classList.add('ativo')

const imagens = document.querySelectorAll('img')

imagens.forEach(img => {
  const hasAlt = img.hasAttribute('alt') ? 'Sim' : 'Não'
  console.log(hasAlt)
})

const linkExterno = document.querySelector('a[href^="https"]')
linkExterno.setAttribute('href', 'teste')