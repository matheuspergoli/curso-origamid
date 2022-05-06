const doc = fetch('./doc.txt')

doc.then(resolucao => {
  resolucao.text().then(body => {
    console.log(body)
  })
})