// function Pessoa(nome, sobrenome, idade) {
//   this.nome = nome 
//   this.sobrenome = sobrenome
//   this.idade = idade
// }

// Pessoa.prototype.dizerNome = function() {
//   return `Meu nome é ${this.nome} ${this.sobrenome}`
// }

// Pessoa.prototype.nomeCompleto = function() {
//   return `Pessoa ${this.nome} ${this.sobrenome}`
// }

// Pessoa.prototype.apresentar = function() {
//   return `Olá!, meu nome é ${this.nome} ${this.sobrenome} e tenho ${this.idade} anos`
// }

// Pessoa.prototype.andar = function() {
//   return this.nome + ' Pessoa andou'
// }

// Pessoa.prototype.nadar = function() {
//   return this.nome + ' Pessoa nadou'
// }

// const matheus = new Pessoa('Matheus', 'Pergoli', 22)

// const pais = 'Brasil'
// const cidade = new String('Rio')

// const listaAnimais = ['Cachorro', 'Gato', 'Cavalo']

// const getLista = document.querySelectorAll('li')

// const lista = Array.from(getLista)
// // console.log(lista)

// const Carro = {
//   marca: 'Ford',
//   preco: 2000,
//   andar() {
//     return true
//   }
// }







// Crie uma função construtora de Pessoas
// Deve conter nome, sobrenome e idade
// Crie um método no protótipo que retorne
// o nome completo da pessoa
function Pessoa(nome, sobrenome, idade) {
  this.nome = nome
  this.sobrenome = sobrenome
  this.idade = idade
}

Pessoa.prototype.nomeCompleto = function() {
  return `${this.nome} ${this.sobrenome}`
}

const matheus = new Pessoa('Matheus', 'Pergoli', 22)

// Liste os métodos acessados por 
// dados criados com NodeList,
// HTMLCollection, Document

// Liste os construtores dos dados abaixo
const li = document.querySelector('li');

li; // HTMLLiElement
li.click; // Function
li.innerText; // String
li.value; // Number
li.hidden; // Boolean
li.offsetLeft; // Number
li.click(); // Undefined

// Qual o construtor do dado abaixo:
li.hidden.constructor.name; // String
