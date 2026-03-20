/*
Module em JS
serve para quebrar o codigo em diferentes arquivos, para facilitar a organização e compartilhamento de codigos comum
*/

//importando varios funcoes diferentes do arq quadrado.js

// import { areaQuadrado } from "./quadrado.js";
// //testando
// console.log(areaQuadrado(4));

//adicionando mais function
import { areaQuadrado, perimetroQuadrado } from "./quadrado.js";
//importar arq que exportam apenas uma função
import numeroAleatorio from "./numAleatorio.js";
//importar objeto de arq
import Circulo from "./circulo.js";


//testando o 1º import
console.log(areaQuadrado(4));
console.log(perimetroQuadrado(6));

//testando o 2º import
console.log(numeroAleatorio());

//testando o 3º import
console.log(Circulo.area(6));
console.log(Circulo.circunferencia(7));
console.log(Circulo.aleatorio());