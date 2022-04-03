// const h1 = document.querySelector('h1')

// h1.innerHTML = 'Novo Título'

// const lista = document.querySelector('.animais-lista')
// console.log(lista.children[lista.children.length - 1])
// console.log(lista.querySelector('li:last-child'))
// console.log(lista.previousSibling)

// const animais = document.querySelector('.animais')
// const contato = document.querySelector('.contato')
// const titulo = contato.querySelector('.titulo')
// const mapa = document.querySelector('.mapa')

// const novoH1 = document.createElement('h1')
// novoH1.innerText = 'Novo título'
// novoH1.classList.add('titulo')

// mapa.appendChild(novoH1)

// const h1 = document.querySelector('h1')
// const faq = document.querySelector('.faq')

// const cloneH1 = h1.cloneNode(true)

// faq.appendChild(cloneH1)



// Duplique o menu e adicione ele em copy
const copy = document.querySelector('.copy')
const menu = document.querySelector('.menu')
const menuCopia = menu.cloneNode(true)
copy.appendChild(menuCopia)

// Selecione o primeiro DT da dl de Faq
const dt = document.querySelector('.faq-lista dt:first-child')

// Selecione o DD referente ao primeiro DT
const dd = dt.nextElementSibling

// Substitua o conteúdo html de .faq pelo de .animais
const animais = document.querySelector('.animais')
const faq = document.querySelector('.faq')
faq.innerHTML = animais.innerHTML
