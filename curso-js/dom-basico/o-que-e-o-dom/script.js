// window.alert('Teste...')

const href = window.location.href

if (href === 'http://127.0.0.1:5500/curso-js/dom-basico/o-que-e-o-dom/index.html') {
  console.log('É igual')
}

const h1 = document.querySelector('h1')
const h1Classes = h1.classList

const callback = () => {
  console.log(h1.textContent)
}

h1.addEventListener('click', callback)

const idioma = window.navigator.language
console.log(idioma)

const largura = window.innerWidth
console.log(largura)

const elementoAtivo = document.querySelector('.ativo')
console.log(elementoAtivo)
console.log(href)