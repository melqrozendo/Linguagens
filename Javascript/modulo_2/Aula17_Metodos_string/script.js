/*
Metodos de Strinf
-manusear o uso de textos nos software

metodos que trnsformam uma string:
length (qauntidade de caracters)
indexOf (dá o index de um caracter de numa frase ou palavra)
lastIndexOf (busca o indice da ultima palavra da frase)
slice (remove carcteres da frase)
replace (troca caracteres de uma frase)

metodos que modificam a caracteristica de uma string:
toLowerCase (caixa baixa)
toUpperCase (caixa alta)
trim (remover espaçamento indevido)
split (modifica a frase para uma array de palavras)
*/
//length

var nome = "Melquisedeque";
console.log(nome.length);

var objeto = "bola";
console.log(objeto.length);

//indexOf
console.log(nome[2]);//caracter = l

//buscando indece do primeira palavra 'bonita' da frase
var frase = "A palavra mais bonita do mundo é amor";
console.log(frase.indexOf("bonita"));//15

//lastIndexOf
//buscando indice da ultima palavra 'valor' da frase'
var frase1 = "O valor do carro foi R$20.0000,00 e o valor da moto R$7.000,00";
console.log(frase1.lastIndexOf("valor"));//38

//slice

var remover = frase.slice(15,21);
console.log(remover);

//replace

var novaFrase = frase.replace("bonita", "feia");
console.log(novaFrase);

//toLowerCase (caixa baixa)
console.log(frase.toLowerCase());

//toUpperCase (caixa alta)
console.log(frase.toUpperCase());

//trim
var name = "     Joana  ";
console.log(name);
var nameTrim = name.trim();
console.log(nameTrim);

//split
console.log(frase.split(" "));

var tags = "PHP, Java, Python, HTML, CSS";
console.log(tags.split(", "));