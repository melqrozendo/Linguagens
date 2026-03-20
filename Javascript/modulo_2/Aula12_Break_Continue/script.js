/*
Comandos para utilizar em loops:
**Break
usado para encerrar um instrução

**Continue
usado para pular uma instução

Obs>>usados em projetos especificos
*/

for(var x = 0; x < 25; x++){

    console.log(x);

    if(x == 15){
        break;
    }
}

console.log("Comando break Ativado!");

for(var y = 0; y < 12; y++){

    if(y == 8){//pular o valor de y=8
        continue;
    }
    console.log(y);
    console.log("Comando continue Ativado!");
}
