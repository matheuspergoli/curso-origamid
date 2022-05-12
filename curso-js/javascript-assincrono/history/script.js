const links = document.querySelectorAll('a')

function handleClick(event) {
  event.preventDefault()
  fetchPage(event.target.href)
  window.history.pushState(null, null, event.target.href)
}

async function fetchPage(url) {
  const pageResponse = await fetch(url)
  const pageText = await pageResponse.text()
  replaceContent(pageText)
}

function replaceContent(newText) {
  const newHTML = document.createElement('div')
  newHTML.innerHTML = newText

  const newContent = newHTML.querySelector('.content')
  const oldContent = document.querySelector('.content')

  oldContent.innerHTML = newContent.innerHTML
  document.title = newHTML.querySelector('title').innerText
}

window.addEventListener('popstate', () => {
  fetchPage(window.location.href)
})

links.forEach(link => {
  link.addEventListener('click', handleClick)
})