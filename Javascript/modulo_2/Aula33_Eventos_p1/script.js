/*
Eventos:
-por meio de JS podemos 'mapear algumas ações' dos usuarios, que chamamos de eventos
-Como:
1-movimento do mouse
2-click
3-mouse entrando ou saindo de um elemento
4-carregamento da pagina
-e então criar um comportamento interessante como: animação de menu abrindo e fechando, etc;

Exemplo do Evento onload: (carregar a pagina)
-o onload é ativado ao carregar a pagina
-podemos depois desse evento realizar alguma ação no nosso projeto

*/

//ao chamar o metodo onload existe um delay para que a pagina e todos seus elementos sejam carregados
window.onload = function(){
    console.log('Carregou o DOM');

    var title = document.querySelector('h1');
    console.log(title);
}

console.log('Carragou o JS');

var title1 = document.querySelector('h1');
console.log(title1);
