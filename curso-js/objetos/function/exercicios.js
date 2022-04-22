// Retorne a soma total de caracteres dos
// parágrafos acima utilizando reduce
const paragrafos = document.querySelectorAll('p')
const totalCaracteres = Array.prototype.reduce.call(paragrafos, (acumulador, paragrafo) => {
  return acumulador + paragrafo.innerText.length
}, 0)
// console.log(totalCaracteres)

// Crie uma função que retorne novos elementos
// html, com os seguintes parâmetros
// tag, classe e conteudo.
function retornaElemento(tag, classe, conteudo) {
  const element = document.createElement(tag)
  classe ? element.classList.add(classe) : null
  conteudo ? element.textContent = conteudo : null
  return element
}
const elemento = retornaElemento('h1', 'ativo', 'Esse é um H1 criado por uma função')

// Crie uma nova função utilizando a anterior como base
// essa nova função deverá sempre criar h1 com a
// classe titulo. Porém o parâmetro conteudo continuará dinâmico
const h1 = retornaElemento.bind(null, 'h1', 'ativo')
const p = retornaElemento.bind(null, 'p', 'ativo')
const h1Normal = retornaElemento.bind(null, 'h1')
const pNormal = retornaElemento.bind(null, 'p')

const section = document.querySelector('section')

section.appendChild(pNormal(null, 'Este é um parágrafo normal'))
section.insertAdjacentElement("afterend", h1Normal(null, 'Este é um título normal'))
section.appendChild(p('Este é um parágrafo'))
section.insertAdjacentElement("beforebegin", p('Este é um parágrafo ativo'))
section.insertAdjacentElement("afterend", p('Este é outro parágrafo ativo'))
section.insertAdjacentElement("afterbegin", h1('Este é outro título h1 ativo'))
section.insertAdjacentElement("beforeend", h1('Este é um título h1 ativo'))

const h1Ativo = document.querySelectorAll('h1.ativo')
const pAtivo = document.querySelectorAll('p.ativo')
console.log(pAtivo)