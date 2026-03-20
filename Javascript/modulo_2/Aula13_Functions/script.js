/*
Functions:
-são blocos de codigos reutilizaveis, para evitar repetição de logica de um programa
-função precisa ser invocada(chamada) para ser executada
*/
/**********************TIPO 1*********************/
function jogadorOn(nome, armado){
    console.log("Jogador 1 - Online");
    console.log("Nome do Jogador: "+ nome);
    if(armado == true){
        console.log("Jogador 1 - Armado com Fuzil");
    }else{
        console.log("Jogador 1 - Desarmado");
    }

}

function jogadorOff(nome){
    console.log("Jogador 1 - Offline");
    console.log("Nome do Jogador: "+ nome);
    if(armado == true){
        console.log("Jogador 1 - Armado com Fuzil");
    }else{
        console.log("Jogador 1 - Desarmado");
    }
}


var nome = "Melq";
var armado = true;
jogadorOn(nome, armado);

var armado =  false;
jogadorOff(nome);

/**********************TIPO 2*********************/
function soma(a,b){
    return a + b;
}

var somando = soma(3,4);
console.log(somando);

console.log(soma(6,7));

/**********************TIPO 3*********************/
function multi(x,y){
    var produto = x*y;
    return produto;
} 

var prod = multi(5,3);
console.log(prod);

console.log(multi(5,8));
