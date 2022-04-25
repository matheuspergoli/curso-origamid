const pessoa = new Object({
  nome: 'André'
})
// console.log(pessoa)

// const carro = {
//   marca: 'Marca',
//   init(valor) {
//     this.marca = valor
//     return this
//   },

//   rodas: 4,

//   acelerar() {
//     return `${this.marca} acelerou`
//   },

//   buzinar() {
//     return `${this.marca} buzinou`
//   }
// }
// console.log(carro)

// const honda = Object.create(carro).init('Honda')
// console.log(honda)
// console.log(honda.acelerar())

// const ferrari = Object.create(carro).init('Ferrari')
// console.log(ferrari)

const funcaoAutomovel = {
  acelerar() {
    return 'Acelerou'
  },

  buzinar() {
    return 'Buzinou'
  }
}

// const moto = {
//   rodas: 2,
//   capacete: true
// }

// Object.assign(moto, funcaoAutomovel)
// console.log(moto)

const moto = {}

Object.defineProperties(moto, {
  rodas: {
    enumerable: true,

    get() {
      return this._rodas
    },

    set(valor) {
      this._rodas = valor * 4 + ' Rodas no total'
    }
  }
})

moto.rodas = 4
delete moto.rodas
// console.log(moto.rodas)

// console.log(Object.getOwnPropertyDescriptors(String.prototype))
Object.getOwnPropertyDescriptors(Array.prototype)
Object.getOwnPropertyDescriptor(window, 'innerHeight')
// console.log(Object.getOwnPropertyNames(Array.prototype))
// console.log(Object.getOwnPropertyNames(moto))

// const frutas = ['Banana']
// console.log(Object.getPrototypeOf(frutas))

// const frutas1 = ['Banana', 'Pêra']
// const frutas2 = ['Banana', 'Pêra']

// console.log(Object.is(frutas1, frutas2))

const carro = {
  marca: 'Ford',
  ano: 2018
}
Object.freeze(carro)
carro.marca = 'Honda'
// console.log(carro)
// console.log(Object.isFrozen(carro))

const frutas = ['Banana', 'Uva']
const frase = 'Isso é uma String'
// console.log(frase.constructor)
// console.log(frutas.constructor)

console.log(Object.prototype.toString.call(carro))