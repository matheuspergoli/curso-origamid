// const promesa = new Promise((resolve, reject) => {
//   let condicao = true
//   if (condicao) {
//     setTimeout(() => {
//       resolve({ nome: 'Matheus', sobrenome: 'Pergoli', idade: 22 })
//     }, 1000)
//   } else {
//     reject(Error('Um erro occoreu na promise'))
//   }
// })
// const retorno = promesa
// .then(resolucao => {
//   resolucao.profissao = 'Programador'
//   return resolucao
// })
// .then(resolucao => {
//   console.log(resolucao)
// })
// .catch(rejeitada => {
//   console.log(rejeitada)
// })
// .finally(() => {
//   console.log('Acabou')
// })


// const dadosDoUsuario = new Promise((resolve, reject) => {
//   let condicao = true
//   if (condicao) {
//     resolve({ nome: 'Matheus', sobrenome: 'Pergoli', idade: 22 })
//   } else {
//     reject(Error('Ocorreu algum erro com o úsuario'))
//   }
// })

// dadosDoUsuario.then(({ nome, sobrenome, idade }) => {
//   const str = `Meu nome é ${nome} ${sobrenome} e tenho ${idade} anos`
//   return str
// }).then((resolucao) => {
//   const str = resolucao.toUpperCase()
//   return str
// })
// console.log(dadosDoUsuario)


// const login = new Promise(resolve => {
//   setTimeout(() => {
//     resolve('Usuário logado')
//   }, 1000)
// })

// const dados = new Promise(resolve => {
//   setTimeout(() => {
//     resolve('Dados carregados')
//   }, 1500)
// })

// const carregouTudo = Promise.all([login, dados])
// carregouTudo.then(resolucao => {
//   console.log(resolucao)
// })