/*
Callback Functions em Js:
METODOS DE TIMES DO JS: 
(muitos utilizadas para gerar ações com delay de tempo e que realiza callbackfunctions nativamente)
setTimeout
setInterval

-podemos com estas funçoes criar ações no software que executam depois de um 'tempo' ou de tempos em tempos; (callback function assincrona)
-um dos argumentos destas funçoes é uma callback function;

Exemplos:
1-quero que o meu pop-up seja executado apartir do callback do setTimeout
2-quero ver a cada meio segundo onde o mouse do usuario esta localizado na tela apartir do callback do setInterval

Exemplo 2 - programação assincrona:
-chamada a uma API, enquanto a resposta nao vem a callback não é executada
*/

//setTimeOut (de uma função que espera respostad a callback em 2seg para exibir na tela)

console.log('Inicicando Sistema Assincrono!');

setTimeout(function(){
    console.log('Testando o setTimeOut!');
}, 2000);

//setInterval (de uma função que gera uma ação durante intervalos de 1seg e é necessario estabelecer uma parada)

setInterval(function(){
    //console.log('Testando o setInterval!');
}, 1000);

