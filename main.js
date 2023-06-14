$(document).ready(function() {

  $('#cpf').mask('000.000.000-00')
  $('#telefone').mask('(00)00000-0000')
  $('#cep').mask('00000-000')


  $('form').validate({
    rules: {
      nome: {
        required: true,
      },
      email: {
        required: true,
        email:true,
      },
      telefone: {
        required: true,
      },
      cpf: {
        required: true,
      },
      endereco: {
        required: true,
      },
      cep: {
        required: true,
      }
    },
    messages: {
      nome: '<span class="Erro_msg">Por favor digite seu nome completo</span>',
      email: '<span class="Erro_msg">Por favor digite seu e-mail</span>',
      telefone: '<span class="Erro_msg">Por favor digite seu telefone</span>',
      cpf: '<span class="Erro_msg">Por favor digite seu cpf</span>',
      endereco: '<span class="Erro_msg">Por favor digite seu endereço</span>',
      cep: '<span class="Erro_msg">Por favor digite o seu cep</span>',

    },

    submitHandler: function(form) {
      console.log(form)
    },
  })
    
  })  
  