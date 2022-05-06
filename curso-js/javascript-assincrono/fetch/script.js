const sobre = fetch('./sobre.html')

const div = document.createElement('div')

sobre
.then(resolucao => resolucao.text())

.then(body => {
  div.innerHTML = body
  const titulo = div.querySelector('p')
  document.querySelector('h1').innerText = titulo.innerText 
})