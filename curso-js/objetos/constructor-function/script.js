// function Carro(marca, precoInicial) {
//   const taxa = 1.2
//   const precoFinal = precoInicial * taxa
//   this.marca = marca
//   this.preco = precoFinal
// }

// const fiat = new Carro('Fiat', 3000)
// const honda = new Carro('Honda', 2000)

// function Dom(seletor) {
//   this.element = function() {
//     return document.querySelector(seletor)
//   },

//   this.ativar = function(classe) {
//     this.element().classList.add(classe)
//   }
// }

// const li = new Dom('li')
// const ul = new Dom('ul')

// Transforme o objeto abaixo em uma Constructor Function
function Pessoa(nome, idade) {
  this.nome = nome,
  this.idade = idade,

  this.andar = function() {
    return `${this.nome} andou`
  }
}

// Crie 3 pessoas, João - 20 anos,
// Maria - 25 anos, Bruno - 15 anos
const joao = new Pessoa('João', 20)
const maria = new Pessoa('Maria', 25)
const bruno = new Pessoa('Bruno', 15)


// Crie uma Constructor Function (Dom) para manipulação
// de listas de elementos do dom. Deve conter as seguintes
// propriedades e métodos:
//
// elements, retorna NodeList com os elementos selecionados
// addClass(classe), adiciona a classe a todos os elementos
// removeClass(classe), remove a classe a todos os elementos

function Dom(element) {
  const elementsList = document.querySelectorAll(element)

  this.elements = elementsList

  this.addClass = function(classe) {
    this.elements.forEach(item => {
      item.classList.add(classe)
    })
  }

  this.removeClass = function(classe) {
    this.elements.forEach(item => {
      item.classList.remove(classe)
    })
  }
}


const li = new Dom('li')