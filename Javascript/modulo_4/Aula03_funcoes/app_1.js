/*
Funçoes em JS:
1-No Exemplo01 - temos a declaração de uma function e sua execução logo abaixo, porem se colocarmos a execução antes de declaramos a function, mesmo assim a function executa(isto é chamado de host, qnd uma arq js é executado esse comandos vao para o topo do arq).

2-No Exemplo02 - temos as funçoes do tipo expressão, que é dado por uma variavel e uma function (anonima), porem é não reconhece a funcão caso a execução vir antes.

3-No Exemplo03 - temos passagens de parametros

4-No Exemplo04 - as funçoes permitem o acesso aos paramentros por meio de arguments

*/

//Exemplo 4
//uso de arguments
var andar = function(cidade){
    //quantidade de argumentos nos parametros
    var qtd =  arguments.length;
    console.log(arguments);
    console.log(arguments[0]);
    console.log(arguments[1]);
    console.log(arguments[2]);
    //declarar e inicializar variavel
    // var endereco; //NaN
    var endereco = '';//Undefined

    while(qtd > 0){
        // console.log(arguments);
        if(qtd == 3){
            var pos2 = endereco += arguments[qtd-1];
        }else if(qtd == 2){
            var pos1 = endereco += '/' + arguments[qtd-1];
        }else if(qtd == 1){
            var pos0 = endereco += '/' + arguments[qtd-1];
        }
        qtd--;
    }

    console.log(endereco);

    console.log(pos0);
    console.log(pos1);
    console.log(pos2);
}

// var cidade = andar('Recife');
// var bairro = andar('Curado');
// var rua = andar('Rua Querência do Norte');
// console.log(cidade);

// andar('Recife', 'Curado', 'Rua Querência do Norte');

var cidade = 'Recife';
var bairro = 'Curado';
var rua = 'Rua Querência do Norte';
andar(cidade, bairro, rua);

/*na passagem de argumentos o ultimo valor passado, se tornou o primeiro da fila */