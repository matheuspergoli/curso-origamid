export default function initAnimaNumeros() {
  function animaNumeros() {
    const numeros = document.querySelectorAll('[data-numero]')

    numeros.forEach((numero) => {
      const total = +numero.innerText
      const incremento = Math.floor(total / 100)

      let start = 0
      const timer = setInterval(() => {
        start += incremento
        numero.innerText = start
        if (start > total) {
          numero.innerText = total
          clearInterval(timer)
        }
      }, 25 * Math.random())
    })
  }

  const observeTarget = document.querySelector('.numeros')

  let observer
  function handleMutation(mutation) {
    observer.disconnect()
    if (mutation[0].target.classList.contains('ativo')) {
      animaNumeros()
    }
  }
  observer = new MutationObserver(handleMutation)

  observer.observe(observeTarget, { attributes: true })
}
