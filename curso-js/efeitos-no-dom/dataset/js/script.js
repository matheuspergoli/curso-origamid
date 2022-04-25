const div = document.querySelector('[data-cor]')

// console.log(Object.prototype.toString.call(h1))
div.dataset.height = 1000
delete div.dataset.width
console.log(div.dataset)