const pessoa = {
  nome: 'André',
  idade: 28
}

const quadrado = {
  lados: 4,

  area(lado) {
    return lado * lado
  },

  perimetro(lado) {
    return this.lados * lado
  },

  cinco() {
    return 5
  }
}

console.log(quadrado.area(5))
console.log(quadrado.perimetro(10))

const menu = {
  width: 800,
  height: 50,
  backgroundColor: '#84E',

  metadeHeight() {
    return this.height / 2
  }
}

const dados = {
  nome: 'Matheus',
  sobrenome: 'Pergoli',
  sexo: 'Masculino',
  cidade: 'São Paulo',
  idade: 22,

  nomeCompleto() {
    return `${this.nome} ${this.sobrenome}`
  }
}

console.log(dados.nomeCompleto())

const carro = {
  preco: 1000,
  portas: 4,
  marca: 'Audi'
}
console.log(carro.preco)
carro.preco = 3000
console.log(carro.preco)

const cachorro = {
  raca: 'Labrador',
  cor: 'Preto',
  idade: 10,

  latir() {
    console.log('Au au au')
  }
}
