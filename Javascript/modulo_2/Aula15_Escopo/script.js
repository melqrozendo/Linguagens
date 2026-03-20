/*
Escopo:
Global: iniciado em toda a aplicação
Local: que podem existir em varias instruçoes como as funções
*/
//escopo global
var x = 1;
var y = 2;

console.log(x,y);

//escopo local
function teste(){
    var z = 0;

    console.log(z);
    //é possivel ter acesso as variaveis de escopo global dentro das funçoes
    console.log(x);

}

teste();

//porem não é possivel ter acesso as variavel local fora da função
//console.log(z);

/*
Uso de let: em variaveis que podem ser alteradas ao longo do escopo

Uso de const: em variaveis que nao se alteram ao longo do escopo
*/
let anoCarro = 2020;
anoCarro = 2023;
console.log(anoCarro);

const anoBus = 2018;
//anoBus = 2017;
console.log(anoBus);

//na codição de seleção as variaveis pode ser alteradas
if(anoCarro == 2023){
    //essa let criada pertence ao if
    let anoCarro = 2025;
    console.log(anoCarro);
}

if(anoBus == 2018){
    //essa const criada pertence ao if
    const anoBus = 2017;
    console.log(anoBus);
}

for(let x = 1; x<=18; x++){
    //essa let criada pertence ao for
    console.log(x);
}

