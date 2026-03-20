/*
Métodos (funçoes) numericas:

-todo numero criado em JS é filho do Number
-a maioria dos tipos de dados tbm tem objeto pai
O que é um Metodo:
é uma ação que roda em cima de um parametro ou nao
O que é prorpiedade:
é o valor dos elementos de um array

metodos:
parseInt (transforma string em inteiro)
parsefloat (transforma string em decimais)
tofixed (limita o numero de casas decimais)
isNaN (verificar se tem um numero)
MAX_VALUE e MIN_VALUE

*/
//transforma string em int ou float
console.log(parseInt('15.99'));
console.log(parseFloat('13.44'));

console.log(Number.parseInt('17.67'));
console.log(Number.parseFloat('12.456'));

//toFixed
console.log(24.55.toFixed(1));//limitando a 1 casa decimal

//isNaN
// console.log(isNAN("teste")); //false
// console.log(isNaN(12));

//MAX_VALUE e MIN_VALUE
console.log(Number.MAX_VALUE);//max valor para se trabalhar no JS
console.log(Number.MIN_VALUE);//min valor para se trabalhar no JS