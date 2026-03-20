/*
Laços de Interação em js:
for (<> in <>): varrer objeto
forEach: varrer array
while(): nao conhece a qtd de vezes que precisa ser executado
for(): conhece a qtd de vezes que precisa ser executado
*/

// var contador = 0;
// var limite = 15;

// while(contador < limite) {
//     contador++;
//     console.log(contador);
// }

// for(var i = 0; i < 15; i++){
//     console.log(i);
// }




var exibir = function (valor) {
    return 'classe: ' + valor; 
}

var contador = 0;
var limit = 4;

console.log('Com while:');

while(contador < limit) {
    contador++;
    console.log(exibir(contador));
}

console.log('Com for:');

for(var i = 0; i < 5; i++){
    console.log(exibir(i));
}