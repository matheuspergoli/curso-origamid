const url = './dados.json'

fetch(url)
.then(response => response.text())
.then(content => {
  const json = JSON.parse(content)
  // console.log(json)
})

const configuracoes = {
  color: 'cyan',
  backgroundColor: 'green',
  fontSize: '32px',
  fontFamily: 'Arial'
}

localStorage.config = JSON.stringify(configuracoes)

function aplciarEstilo() {
  const body = document.body

  const config = JSON.parse(localStorage.config)
  body.style.backgroundColor = config.backgroundColor
}
aplciarEstilo()