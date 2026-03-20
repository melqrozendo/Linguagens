/*
Expressoes:
uso de uma expressao js é diferente de um bloco de comando
*/

const grupoA = 100;
const grupoB = 300;

//Expressao: condição ternaria 
const vencedor = grupoA > grupoB ? "Grupo A Venceu" : "Grupo B Venceu";
console.log(vencedor);

const numeros = [2, 3, 4, 5, 6];
//Expressao: metodos de array
const total = numeros.filter(numero => numero > 4);
console.log(total);

const active = true;
//Expressao: condição caso true retorne o string definida
const button = active && "Botao esta ativo";
console.log(button);