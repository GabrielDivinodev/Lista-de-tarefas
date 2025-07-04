$(document).ready(function(){
    $('header button').click(function(){
        $('form').slideDown();
    })

    $('#botao-cancelar').click(function() {
        $('form').slideUp();
    })

    $('form').on('submit', function(e) {
        e.preventDefault();
        const novaTarefa = $('#nome-tarefa').val().toUpperCase();
        const novaLinha = $('<li></li>')
        console.log(novaTarefa)
        $(`
            <button class="desligado">X</button>
            <p class="normal">${novaTarefa}</p>
            <button class="btn-remover">X</button>`
        ).appendTo(novaLinha);
        
        $(novaLinha).appendTo('ul')
        $('#nome-tarefa').val('')

    })

    $('ul').on('click','.btn-remover', function() {
        $(this).closest('li').remove();
    })

    $('ul').on('click', 'button', function() {
        console.log('click')
        $(this).toggleClass('ligado desligado');
        $(this).siblings('p').toggleClass('normal riscado');

    })
})