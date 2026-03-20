/*
Exemplo do Evento Click:
-o click é ativado quando oo usuario clica(input) em um elemento em que atrelamos o evento;
-apos a ação podemos fazer as modificaçoes e alteraçoes no HTML/CSS que quisermos;

metodo utilizado: 
addEventListener();
*/

//inserir evento click no button
var btn = document.querySelector('#btn');
//console.log(btn);
var cont = 0;
btn.addEventListener('click', function(){

    console.log('confirmou sua participação!');
    
    //veja que é possivel acessar o elemtne pelo this
    console.log(this);
    //assim alteraçoes no estilo do elemento pode ser realizadas
    this.style.color = "red";

    cont++;
    console.log(cont);
    if(cont == 5){
        var subtitle = document.createElement('h2');
        subtitle.id = 'subtitle';
        subtitle.appendChild(document.createTextNode('Número de participações atingidas!'));

        var body = document.querySelector('body');
        body.appendChild(subtitle);
    }else if(cont > 5){
        //se contador for maior que 5 desabilitar o button e retirar visibilidade
        btn.setAttribute('disabled', 'disabled');
        btn.style.display = "none";
    }

});

//inserir evento click no title
var title = document.querySelector('#title');

console.log(title);

title.addEventListener('click', function(){

    console.log('Testando o título da pagina!');
})

//inserindo um double click
var note = document.querySelector('#note');

note.style.cssText = "font-size: 12px";

note.addEventListener('dblclick', function(){
    console.log('Testando click duplo!');
})
