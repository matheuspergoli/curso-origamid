// Liste 5 objetos nativos
Object
Array
String
Number
Function

// Liste 5 objetos do browser
NodeList
HTMLCollection
Window
History
Document

// Liste 2 Métodos, Propriedades ou Objetos
// presentes no Chrome que não existem no Firefox

if (typeof document.webkitHidden !== 'undefined') {
  console.log('Existe')
} else {
  console.log('Não existe')
}

if (typeof document.webkitVisibilityState !== 'undefined') {
  console.log('Existe')
} else {
  console.log('Não existe')
}