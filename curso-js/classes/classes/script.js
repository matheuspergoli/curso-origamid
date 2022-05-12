// function Button(text, background) {
//   this.text = text
//   this.background = background
// }
// Button.prototype.element = function() {
//   const buttonElement = document.createElement('button')
//   buttonElement.innerText = this.text
//   buttonElement.style.backgroundColor = this.background
//   return buttonElement
// }

class Button {
  constructor(text, background, color) {
    this.text = text
    this.color = color
    this.background = background
  }

  element() {
    const buttonElement = document.createElement('button')
    buttonElement.innerText = this.text
    buttonElement.style.color = this.color
    buttonElement.style.backgroundColor = this.background
    return buttonElement
  }

  appendTo(target) {
    const targetElement = document.querySelector(target)
    targetElement.appendChild(this.element())
  }

  static blueButton(text) {
    return new Button(text, 'blue', 'white')
  }
}

const botaoAzul = Button.blueButton('Clique aqui')

// blueButton.appendTo('body')

// class Button {
//   constructor(options) {
//     this.options = options
//   }

//   static createButton(text, background) {
//     const buttonElement = document.createElement('button')
//     buttonElement.innerText = text
//     buttonElement.style.backgroundColor = background
//     return buttonElement
//   }
// }

// const optionsBlue = {
//   color: 'White',
//   text: 'Comprar',
//   backgroundColor: 'blue'
// }

// const blueButton = new Button(optionsBlue)

// const blueButtonStatic = Button.createButton('Clique aqui', 'blue')