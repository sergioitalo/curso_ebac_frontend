const formulario = document.querySelector('form')
const inputA = document.querySelector('.numberA')
const inputB = document.querySelector('.numberB')

const validaForm = function(a, b) {
  const number1 = Number(a)
  const number2 = Number(b)
  return number2 > number1
}

formulario.addEventListener('submit', function(evento) {
  evento.preventDefault()

if (validaForm(inputA.value, inputB.value) === true) {
  const mensagemSucesso = document.querySelector('.mensagem_sucesso')
  mensagemSucesso.style.display = 'block'

} else {
  const mensagemErro = document.querySelector('.mensagem_erro')
  mensagemErro.style.display = 'block'
  
}

})

inputB.addEventListener('keyup', function(evento) {
  console.log(evento)

  if(validaForm(inputA.value, evento.target.value) === false) {
    inputB.style.outline = '2px solid red'
    inputB.style.border = 'none'
    const mensagemErro = document.querySelector('.mensagem_erro')
    mensagemErro.style.display = 'block'

  } else {
    inputB.style.outline = '2px solid #D4CE07 '
    const mensagemErro = document.querySelector('.mensagem_erro')
    mensagemErro.style.display = 'none'
  }
})