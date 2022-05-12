const button = {
  get tamanho() {
    return 200
  },

  set tamanho(numero) {
    this._numero = numero
  }
}

const frutas = {
  lista: [],
  set nova(fruta) {
    this.lista.push(fruta)
  }
}
frutas.nova = 'Uva'
frutas.nova = 'Maçã'
frutas.nova = 'Banana'
frutas.nova = 'Abacaxi'
frutas.nova = 'Melancia'
// console.log(frutas)

class Button {
  constructor(text, color) {
    this.text = text
    this.color = color
  }

  get element() {
    const type = this._elementType || 'button'
    const buttonElement = document.createElement(type)
    buttonElement.innerText = this.text
    buttonElement.style.color = this.color
    return buttonElement
  }

  set element(type) {
    this._elementType = type
  }
}
const blueButton = new Button('Clique aqui', 'blue')
console.log(blueButton.element)