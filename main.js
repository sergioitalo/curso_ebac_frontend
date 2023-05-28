const validacaoForm = function (a, b) {
  const number1 = a
  const number2 = b
  parseFloat(number1, number2)
  const resposta = number2 > number1
  return resposta
}

const formulario = document.querySelector('form')
console.log(formulario)

formulario.addEventListener('submit', function(evento) {
  evento.preventDefault()

  const inputA = document.querySelector('.numberA')
  const inputB = document.querySelector('.numberB')

  if (validacaoForm(inputA.value, inputB.value)) {
    const sucessoMsg = document.querySelector('.mensagem_sucesso')
    sucessoMsg.style.display = 'block'

    inputA.value = ''
    inputB.value = ''

  } else {
    const erroMsg = document.querySelector('.mensagem_erro')
    erroMsg.style.display = 'block'

  }
})


