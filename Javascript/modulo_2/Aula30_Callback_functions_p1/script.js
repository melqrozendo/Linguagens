/*
Callback Functions em Js:
-é um recurso muito interessante e tambem amplamente utilizado em JS
-permite executar uma função depois de uma determinada ação (podemos garatir que aquele bloco x do codigo esta sendo executado fazendo outra coisa) [ou seja, espera o retorno daquela ação para poder realizar outra coisa]
-conceito fundamental para entender a parte "assincrona do JS"

***Programação assincrona:
é depeder de outro recurso para realizar uma outra ação

Exemplo 1 - programação sincrona:
-passar uma funçao como parametro de outra

Exemplo 2 - programação assincrona:
-chamada a uma API, enquanto a resposta nao vem a callback não é executada
*/

//Exemplo 1 - programação sincrona:
function exibir(num){
    console.log("A operação resultou em: " + num);
}

function soma(a, b, callback){
    var opSoma = a + b;
    //callback de modo sincrono
    callback(opSoma);
}

function mult(a, b, cb){
    var opMult = a * b;
    //callback de modo sincrono
    cb(opMult);
}

soma(2, 3, exibir);
mult(3, 6, exibir);
