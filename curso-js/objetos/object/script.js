const pessoa = new Object({
  nome: 'André'
})
// console.log(pessoa)

const carro = {
  // marca: 'Marca',
  init(valor) {
    this.marca = valor
    return this
  },

  rodas: 4,

  acelerar() {
    return `${this.marca} acelerou`
  },

  buzinar() {
    return `${this.marca} buzinou`
  }
}
// console.log(carro)

const honda = Object.create(carro).init('Honda')
// console.log(honda)
// console.log(honda.acelerar())

const ferrari = Object.create(carro).init('Ferrari')
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
console.log(moto.rodas)