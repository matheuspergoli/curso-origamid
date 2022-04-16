const comidas = ['Pizza', 'Frango', 'Carne', 'Macarrão'];
// Remova o primeiro valor de comidas e coloque em uma variável
const primeiraComida = comidas.shift()

// Remova o último valor de comidas e coloque em uma variável
const ultimaComida = comidas.pop()

// Adicione 'Arroz' ao final da array
comidas.push('Arroz')

// Adicione 'Peixe' e 'Batata' ao início da array
comidas.splice(0, 0, 'Peixe', 'Batata')
console.log(comidas)

const estudantes = ['Marcio', 'Brenda', 'Joana', 'Kleber', 'Julia'];
// Arrume os estudantes em ordem alfabética
estudantes.sort()

// Inverta a ordem dos estudantes
estudantes.reverse()
console.log(estudantes)

// Verifique se Joana faz parte dos estudantes
console.log(estudantes.includes('Joana'))

// Verifique se Juliana faz parte dos estudantes
console.log(estudantes.includes('Juliana'))

let html = `<section>
              <div>Sobre</div>
              <div>Produtos</div>
              <div>Contato</div>
            </section>`
// Substitua section por ul e div com li,
// utilizando split e join
console.log(html.split('section').join('ul').split('div').join('li'))

const carros = ['Ford', 'Fiat', 'VW', 'Honda'];
// Remova o último carro, mas antes de remover
// salve a array original em outra variável
const cloneCarros = carros.slice()
cloneCarros.pop()
console.log(carros)
console.log(cloneCarros)