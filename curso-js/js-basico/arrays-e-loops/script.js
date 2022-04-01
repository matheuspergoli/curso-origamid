var videoGames = ['Switch', 'PS4', 'XBOX', '3DS']

for (let i = 0; i <= 10; i++) {
  console.log(i)
}

var i = 0
while (i <= 5) {
  console.log(i)
  i++
}

for (let i = 0; i < videoGames.length; i++) {
  console.log(videoGames[i])
  if (videoGames[i] === 'PS4') break
}

const frutas = ['Banana', 'Maçã', 'Pera', 'Uva', 'Melancia']

frutas.forEach(item => console.log(item))

const copaBrasil = [1959, 1962, 1970, 1994, 2002]

for (let i = 0; i < copaBrasil.length; i++) {
  console.log(`O Brasil ganhou a copa de ${copaBrasil[i]}`)
}

copaBrasil.forEach(item => console.log(`O Brasil ganhou a copa de ${item}`))

for (let i = 0; i < frutas.length; i++) {
  console.log(frutas[i])
  if (frutas[i] === 'Pera') break
}

const ultimaFruta = frutas.pop(frutas.length - 1)
console.log(ultimaFruta)