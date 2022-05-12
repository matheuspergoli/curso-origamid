class Veiculo {
  constructor(rodas) {
    this.rodas = rodas
  }

  acelerar() {
    console.log('Acelerou')
  }
}

class Moto extends Veiculo {
  constructor(rodas, capacete) {
    super(rodas)
    this.capecete = this.capecete
  }

  acelerar() {
    super.acelerar()
    console.log('Acelerou rápido')
  }
  
  empinar() {
    super.acelerar()
    console.log('Moto empinou com ' + this.rodas + ' rodas')
  }
}

const honda = new Moto(2)
const civic = new Veiculo(4)

console.log(honda.acelerar())