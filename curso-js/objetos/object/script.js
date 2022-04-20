const pessoa = new Object({
  nome: 'André',
})

// console.log(pessoa)

// const carro = {
//   rodas: 4,

//   init(valor) {
//     this.marca = valor
//     return this
//   },

//   acelerar() {
//     return this.marca + ' acelerou'
//   },

//   buzinar() {
//     return this.marca + ' buzinou'
//   }
// }

// const honda = Object.create(carro).init('Honda')
// const ferrari = Object.create(carro).init('Ferrari')

// const funcaoAutomovel = {
//   acelerar() {
//     return 'Acelerou'
//   },

//   buzinar() {
//     return  'Buzinou'
//   }
// }

// const moto = {
//   rodas: 2,
//   capacete: true
// }

// const carro = {
//   rodas: 4,
//   mala: true
// }

// Object.assign(moto, funcaoAutomovel)
// Object.assign(carro, funcaoAutomovel)

// console.log(moto)
// console.log(carro)

const moto = {}

Object.defineProperties(moto, {
  rodas: {
    get() {
      return this._rodas
    },

    set(valor) {
      this._rodas = valor * 4
    }
  }
})

console.log(moto)