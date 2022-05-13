// function createButton(text) {
//   function element() {
//     const buttonElement = document.createElement('button')
//     buttonElement.innerText = text
//     return buttonElement
//   }

//   return Object.freeze({
//     text: text,
//     element: element
//   })
// }

// const btnComprar = createButton('Comprar')
// const btnVender = createButton('Vender')

// function Pessoa(nome) {
//   if (!(this instanceof Pessoa)) {
//     return new Pessoa(nome)
//   }
//   this.nome = nome
// }

// Pessoa.prototype.andar = function() {
//   return `${this.nome} andou`
// }

// const designer = Pessoa('André')



function $$(selectedElements) {
  const elements = document.querySelectorAll(selectedElements)

  function hide() {
    elements.forEach(element => {
      element.style.display = 'none'
    })
    return this
  }

  function show() {
    elements.forEach(element => {
      element.style.display = 'initial'
    })
    return this
  }

  function on(onEvent, callback) {
    elements.forEach(element => {
      element.addEventListener(onEvent, callback)
    })
    return this
  }

  function addClass(className) {
    elements.forEach(element => {
      element.classList.add(className)
    })
    return this
  }

  function removeClass(className) {
    elements.forEach(element => {
      element.classList.remove(className)
    })
    return this
  }

  return {
    elements: elements,
    hide: hide,
    show: show,
    on: on,
    addClass: addClass,
    removeClass: removeClass
  }
}

const btns = $$('button')