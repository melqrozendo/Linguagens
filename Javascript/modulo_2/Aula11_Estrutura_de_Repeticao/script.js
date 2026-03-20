/*
Estrutura de Repetição:
-estruturas que serve para repitir um abloco de comando varias vezes

While
for

obs>>> cuidado para não cair no loop infinito

*/
/*************************WHILE******************/
var x = 0;
//imprimindo o laço de repetição
while(x < 5){
    console.log("Testando repetição: " + x);
    //incremetador
    x++;
}

var vetor = [1,2,3,4,5];
var i = 0;
//imprimindo os elemnetos do vetor do tipo int
while(i < 5){
    console.log(vetor[i]);
    i++;
}

var palavra = "Melquisedeque";
var j = 0;
//imprimindo os elementos do vetor do tipo char
while(j < 13){
    console.log(palavra[j]);
    j++;
}
/*************************FOR******************/
var y = 3;

for(y=1; y<=3; y++){
    console.log("teste: " + y);
}

var num = ["a","e","i"];
console.log(num.length);
for(var k = 0; k <num.length; k++){
    console.log(num[k]);
}

for(var h = 5; h < 1000; h*=5){
    console.log(h);
}