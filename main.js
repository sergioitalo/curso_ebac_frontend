$(document).ready(function() {
  
  const formulario = $('form')

  formulario.submit(function(evento){
    evento.preventDefault()

    addTarefa()

    $('a').click(function(){
      $('li').css('text-decoration', 'line-through')
    })

  })

  const addTarefa = function() {
    const inputTarefa = $('#nome-tarefa')

    const tarefa = $('<li style="display: none"></li>')
    $(`<a href="#"><p>${inputTarefa.val()}</p></a>`).appendTo(tarefa)

    tarefa.appendTo($('ul'))
    $(tarefa).fadeIn(500)

    inputTarefa.val('')

  }




  
})