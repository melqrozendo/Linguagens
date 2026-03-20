/*
Callback Functions em Js:
METODOS DE ABORTAR O setTimeout e o setInterval:
clearTimeout()
clearInterval()

-podemos por um fim em setTimeout e setInterval por meio destes dois métodos;
-então apos determinada condição os timers não serão mais executados;

Etapas do clearTimeout:
1-declarar uma variavel que receba um number
2- declarar uma variavel que receba o metodo de setTimeout que possui uma função que deve ser executada apos 1,5seg
3-atribuir um novo valor para x
4-criar uma codição de seleção, onde se for [verdadeiro], execute o metodo de clearTimeout() para abortar a execução da função do setTimeout.

Etapas do clearInterval:
1-declarar uma variavel que receba o metodo de setInterval que possui uma função que deve ser executada a cada intervalo de 0,5seg
2-chamar o metodo setTimeout() para executar uma função de exibir msg e abortar as açoes da função do setInterval apos 3seg
*/

//clearTimeout
var x = 0;

var myTimer1 = setTimeout(function(){
    console.log('o valor de x = ' + x);
}, 3000);

x = 5;

if(x > 0){
    clearTimeout(myTimer1);
    console.log('O valor de x agora é: ' + x);
} 

//clearInterval
var myTimer2 = setInterval(function(){
    console.log('Imprimindo mapas!');
}, 500);

setTimeout(function(){
    console.log('Não precisa mais de imprimir mapas!');
    clearInterval(myTimer2);
}, 3000);

