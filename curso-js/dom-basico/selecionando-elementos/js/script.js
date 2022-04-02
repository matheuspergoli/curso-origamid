const animais = document.getElementById('animais')
console.log(animais)

const gridSection = document.getElementsByClassName('grid-section')
console.log(gridSection[1])

const primeiraLi = document.querySelector('li')
console.log(primeiraLi)

const primeiraUl = document.querySelector('ul')
console.log(primeiraUl)

const linksInternos = document.querySelector('[href^="#"]')
console.log(linksInternos)

const animaisImg = document.querySelectorAll('.animais img')
console.log(animaisImg[1])

const gridSectionHTML = document.getElementsByClassName('grid-section')
const gridSectionNode = document.querySelectorAll('.grid-section')

// primeiraUl.classList.add('grid-section')

// console.log(gridSectionHTML)
// console.log(gridSectionNode)

const arrayGrid = Array.from(gridSectionHTML)

const img = document.querySelectorAll('img')
console.log(img)

const imgAnimais = document.querySelectorAll('img[src^="img/imagem"]')
console.log(imgAnimais)

const links = document.querySelectorAll('a[href^="#"]')
console.log(links)

const h2 = document.querySelector('.animais-descricao h2')
console.log(h2)

const p = document.querySelectorAll('p')
console.log(p[p.length - 1])