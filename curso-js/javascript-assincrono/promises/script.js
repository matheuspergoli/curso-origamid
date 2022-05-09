const promesa = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({ nome: 'Matheus', sobrenome: 'Pergoli' })
  }, 2000)
})

promesa
.then(response => {
  response.idade = 22
  return response
})

.then(response => console.log(response))

.catch(rejected => console.log('Promessa rejeitada'))

.finally(() => console.log('A promessa foi finalizada'))





const login = new Promise(resolve => {
  setTimeout(() => {
    resolve('Login Efetuado')
  }, 1000)
})

const dados = new Promise(resolve => {
  setTimeout(() => {
    resolve('Dados Carregados')
  }, 2000)
})

const tudoCarregado = Promise.all([login, dados])

tudoCarregado.then(response => {
  console.log(response)
})





const btn1 = document.querySelector('.btn-1')
const btn2 = document.querySelector('.btn-2')

const addEventOnBtn1 = new Promise((resolve, reject) => {
  if (btn1) {
    resolve(btn1)
  } else {
    reject('Botão não encontrado')
  }
})

const addEventOnBtn2 =  new Promise((resolve, reject) => {
  if (btn2) {
    resolve(btn2)
  } else {
    reject('Botão não encontrado')
  }
})

const addEventOnBtns = Promise.all([addEventOnBtn1, addEventOnBtn2])

addEventOnBtns.then(btns => {
  btns.forEach(btn => {
    btn.addEventListener('click', handleClickBtn)
  })
})

function handleClickBtn(event) {
  event.target.innerText = 'Clicado!'
}