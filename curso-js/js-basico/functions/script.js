function areaQuadrado(lado) {
  return lado * lado
}

console.log(areaQuadrado(2))

function pi() {
  return 3.14
}

var total = 5 * pi()

console.log(total)

function imc(peso, altura) {
  const imc = peso / (altura ** 2)
  return imc.toFixed(2)
}

console.log(imc(80, 1.80))
console.log(imc(60, 1.70))

function corFavorita(cor) {
  if (cor === 'Azul') {
    return 'Eu gosto do céu'
  } else if (cor === 'Verde') {
    return 'Eu gosto de natureza'
  } else {
    return 'Eu não gosto de cores'
  }
}

addEventListener('click', () => {
  console.log('Oi')
})

function terceiraIdade(idade) {
  if (typeof idade !== 'number') {
    return 'Por favor preencha um número'
  } else if (idade >= 60) {
    return true
  } else {
    return false
  }
}

console.log(terceiraIdade())

function faltaVisitar(paisesVisitados) {
  var totalPaises = 193
  if (paisesVisitados >= totalPaises) return 'Você já visitou todos os paises'
  return `Faltam visitar ${totalPaises - paisesVisitados} paises`
}

function verificar(valor) {
  if (!!valor === true) {
    return `${valor} é um valor truthy`
  } else {
    return `${valor} é um valor falsy`
  }
}

function nomeCompleto(nome, sobrenome) {
  return `Seu nome completo é ${nome} ${sobrenome}`
}

function isPar(valor) {
  if (valor % 2 === 0) return `O número ${valor} é par`
  return `O número ${valor} é impar`
}

function tipoDeDado(dado) {
  return (typeof dado)
}

function perimetroQuadrado(lado) {
  return lado * 4
}

addEventListener('click', () => {
  console.log('Matheus Pergoli')
})

const jaVisitei = paisesVisitados => {
  const totalPaises = 193
  return `Já visitei ${paisesVisitados} do total de ${totalPaises} paises`
}