// const imgs= document.querySelectorAll('img')
// console.log(imgs)

// imgs.forEach((item, index, array) => {
//   console.log(item)
// })

const titulos = document.getElementsByClassName('titulo')
const titulosArray = Array.from(titulos)

// titulosArray.forEach(item => {
//   console.log(item)
// })

// const imgs = document.querySelectorAll('img')
// imgs.forEach(item => console.log(item))

const paragrafos = document.querySelectorAll('p')
paragrafos.forEach(item => console.log(item))
paragrafos.forEach(item => console.log(item.textContent))

const imgs = document.querySelectorAll('img')
imgs.forEach((item, index) => console.log(item, index))

let i = 0
imgs.forEach(() => console.log(i++))
imgs.forEach(() => i++)