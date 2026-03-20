/*
Arrays:
-Tipo de dado especifico = objeto( que pode ou nao mudar o tipo de dado);
-servindo como listas
-seus elementos sao acessados por indices.
*/

//declarando um array com tipo number
var array1 = [1,2,3,4,5];
//imprimindo todo array
console.log(array1);
//imprimir apenas um elemento
console.log(array1[3]);

//declarando um array com varios tipos
var array2 = [5, "Melq", true, {teste: 1, teste: 2}];
console.log(array2);
console.log(array2[0]);
console.log(array2[1]);
console.log(array2[2]);
console.log(array2[3]);

//como inserir elemento no array ja inicializado
array2[4] = 24;
console.log(array2);

//subescrevendo elementos no array
array2[0] = "Teste";
console.log(array2);
console.log(typeof array2);
