/*
Exemplo do Evento mouseover:
-o mouseover é ativado quando o ponteiro do mouse passa em cima do elemento que criamos o evento
-temos tbm o evento 'mouseout' que é quando o ponteiro sai do elemento

Eventos:
mouseover (passa o mouse no elemento)
mouseout (tira o mouse do elemento)

metodo utilizado: 
addEventListener();

*/

var title = document.querySelector('#title');

//realizar evento de mouseover no title com uma callback
title.addEventListener("mouseover", function(){
    //podemos alterar a cor de fundo do title
    this.style.backgroundColor = 'yellow';
});

//realizar evento de mouseout no title com uma callback
title.addEventListener("mouseout", function(){
    //podemos alterar a cor de fundo do title
    this.style.backgroundColor = 'white';
});

//afetar o elemento subtitle com o mouseover
var subtitle = document.querySelector('#subtitle');

subtitle.addEventListener("mouseover", function(){

    var legenda = document.querySelector('#legenda');
    //ao passar o mouse no subtitle deve remover a class 'hide' que no css esta estilizada com display = none
    legenda.classList.remove('hide');

});

subtitle.addEventListener("mouseout", function(){

    var legenda = document.querySelector('#legenda');
    //ao retirar o mouse do subtitle a class 'hide' deve ser adicionada para que a estilização no css seja aplicada e ela desapareça do layout
    legenda.classList.add('hide');

});


