/*
Operadores de Comparação:
-usados para verificação nas estruturas de condição;
-operadores:
==(igual)
!=(diferente)
>(maior que)
<(menor que)
>=(maior ou igual que)
<=(menor ou igual que)
===(usado para comparar o tipo de dado)
!==(usado para comparar q tipo de dado é diferente)
*/
var veloc;

function movimento(veloc){
    //var veloc = 120;
    var lombada = true;

    if(veloc == 120){
        console.log("Reduza a velocidade!");
    }else if(veloc >= 80 & lombada == true){
        console.log("Reduza velocidade para 50km/h!");
    }else{
        console.log("Acelere!");
    }

    return;
}
veloc = 130;
movimento(veloc);
//***********************/
var nome = "mclanches";
function whatName(nome){

    if(nome != "mclanches"){
        console.log("Eu vou pro burgueKing!");
    }else{
        console.log("Eu vou pro MC!");
    }

    return;
}

whatName(nome);

var num = 5;
for(i=0; i<num; i++){
    console.log(i);
}


