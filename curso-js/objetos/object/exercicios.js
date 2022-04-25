// Crie uma função que verifique
// corretamente o tipo de dado
function verificaTipoDeDado(dado) {
  const verificar = Object.prototype.toString.call(dado)
  const verificarModificado = verificar.replace('[', '').replace(']', '').toLowerCase().split(' ')
  if (verificarModificado[1] === 'string') {
    return 'O tipo de dado é um objeto do tipo String'
  } else if (verificarModificado[1] === 'array') {
    return 'O tipo de dado é um objeto do tipo Array'
  } else if (verificarModificado[1] === 'boolean') {
    return 'O tipo de dado é um objeto do tipo Boolean'
  } else if (verificarModificado[1] === 'object') {
    return 'O tipo de dado é um objeto do tipo Object'
  } else if (verificarModificado[1] === 'number') {
    return 'O tipo de dado é um objeto do tipo Number'
  } else if (verificarModificado[1] === 'function') {
    return 'O tipo de dado é um objeto do tipo Function'
  }
  return 'Insira um dado válido'
}
// console.log(verificaTipoDeDado(verificaTipoDeDado))

// Crie um objeto quadrado com
// a propriedade lados e torne
// ela imutável
const quadrado = {}
Object.defineProperties(quadrado, {
  lados: {
    value: 6,
    // configurable: false,
    // enumerable: false,
    // writable: false
  }
})
delete quadrado.lados
quadrado.lados = 77
// console.log(quadrado)


// Previna qualquer mudança
// no objeto abaixo
const configuracao = {
  width: 800,
  height: 600,
  background: '#333'
}
Object.freeze(configuracao)
delete configuracao.background
configuracao.lados = 4
configuracao.width = 1000
console.log(configuracao)

// Liste o nome de todas
// as propriedades do
// protótipo de String e Array
console.log(Object.getOwnPropertyNames(String.prototype))
console.log(Object.getOwnPropertyNames(Array.prototype))