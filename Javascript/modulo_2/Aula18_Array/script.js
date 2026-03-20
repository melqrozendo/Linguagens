/*
Metodos Arrays:
-usados para adicionar e remover elementos, resgatar apenas uma parte do array, etc.
-tbm podemos resgatar um conjunto de elementos como os metodos
-identificar o indice de um elemento especifico e muito mais.

metodos:
length (comprimento do array)
push (adiciona elementos no ultimo indice do array)
pop (remove elementos no ultimo indice do array)
unshift (adicionar elementos no primeiro indice do array)
shift (remover elementos no primeiro indice do array)
length - 1 (busca o ultimo elemento do array)
isArray (verifica se é um array em logica booleana)
splice (adicionar e remover elementos no meio do array)
indexOf (encontra o indice de um elemento no array)
join (transforma arrays em uma string)
reverse (reverter a ordem dos elemmentos no array)
*/

var array = [1,2,3,4,5];

//length
console.log(array.length);

//push
array.push(6);
array.push('teste');
console.log(array);

//pop
array.pop();
console.log(array);

//unshift
array.unshift(0);
console.log(array);//adicionou o 0

//shift
array.shift();
console.log(array);//removeu o 0

//length - 1
console.log(array[array.length-1]);

//isArray
console.log(Array.isArray(5));
console.log(Array.isArray(array));

//splice
var rotas = ['116', '101', '364', '230', '163', '153', '158' ];
console.log(rotas);

//adicionar na posição 3 a rota 232
rotas.splice(3, 0, 232);
console.log(rotas);
//remove a rota 230 da posição 4
rotas.splice(4,1);
console.log(rotas);

//indexOf
console.log(rotas.indexOf("163"));//indice 4

//join
var bible = ["O", "Senhor", "é", "o", "meu", "pastor"];
console.log(bible.join(" "));
console.log(bible.join(" - "));

//reverse
console.log(array.reverse());
console.log(rotas.reverse());
console.log(bible.reverse());

