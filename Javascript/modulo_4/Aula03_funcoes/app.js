/*
Funçoes em JS:
1-No Exemplo01 - temos a declaração de uma function e sua execução logo abaixo, porem se colocarmos a execução antes de declaramos a function, mesmo assim a function executa(isto é chamado de host, qnd uma arq js é executado esse comandos vao para o topo do arq).

2-No Exemplo02 - temos as funçoes do tipo expressão, que é dado por uma variavel e uma function (anonima), porem é não reconhece a funcão caso a execução vir antes.

3-No Exemplo03 - temos passagens de parametros

4-No Exemplo04 - as funçoes permitem o acesso aos paramentros por meio de arguments

*/
//Exemplo 1
//declarando uma function e executando
pilotar();
function pilotar(){
    console.log('Pilotando Moto por declaração de function');
}
// pilotar();

//Exemplo 2
//expressando uma function e executando
// mostrar();
var mostrar = function(){
    console.log('Pilotando carro por expressão de function')
}
mostrar();

//Exemplo 3
//passagem de parametros
var criar = function(projeto){
    return projeto;
}

var nomeProjeto = criar('Projeto de Climatização!');
console.log(nomeProjeto);

//Exemplo 4
//uso de arguments
var andar = function(cidade, bairro, rua){
    var qtd =  arguments.length;
    console.log(qtd);

    while(qtd>0){
        console.log(arguments);
        qtd--;
    }
    
}

// var cidade = andar('Recife');
// var bairro = andar('Curado');
// var rua = andar('Rua Querência do Norte');
// console.log(cidade);

andar('Olinda', 'Peixinhos', 'Rua Barão de Souza');
