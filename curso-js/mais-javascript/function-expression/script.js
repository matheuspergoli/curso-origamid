// Remova o erro
const priceNumber = n => +n.replace('R$', '').replace(',', '.');
console.log(priceNumber('R$ 99,99'));


// Crie uma IIFE e isole o escopo
// de qualquer código JS.
(() => {
  const meuNome = 'Matheus'
  console.log(meuNome)
})()

// Como podemos utilizar
// a função abaixo.
const active = callback => callback();

active(() => {
  console.log('Ativando a função')
})