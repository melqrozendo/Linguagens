/*
<<<<<<<<<<<<Tipos de Dados>>>>>>>>>>>>>>
Number: 
-tipo de dados para numeros
-possui tres valores simbolicos: 
+Infinity
-Infinity
NaN(Not a Number)
******************************
String:
-tipo de dados para textos
-pode ser escritas com aspas duplas ou simples
-numero em aspas pode ser considerado uma string
-concatenação de string
******************************
Boolean:
-tipo de dado que representa um valor Verdadeiro ou Falso
-comparaçoes resultam em booleans
-podemos atribuir valor de true or false a uma variavel
******************************
null:
-tipo de daod que representa um valor
******************************
undefined:
-tipo de dado para uma variavel com valor não atribuido(ou recebido)
******************************
Object:
-funcionam com array associativo
-podemos criar propriedades com chave e valor
-armazenar uma conjunto de valor em apenas uma variavel
******************************
Obs>>podemos verificar o tipo de dado com o operador 'typeof'
*/
/****************NUMBER********************/
var numero_1 = 5;
console.log(numero_1);
console.log(typeof numero_1);

var numero_2 = 4.5;
console.log(numero_2);
console.log(typeof numero_2);

//texto de numero = string
var textoNum = "123";
console.log(typeof textoNum);

//verificando concatenação de number com string
var num = 22;
var tex = "222";
console.log(22 + "222");
console.log(typeof (num+tex));

/*****************STRING*******************/
var nome = "Melq";
var sobrenome = "Rozendo";
var nomeCompleto = nome + " " + sobrenome;
console.log(nome);
console.log(sobrenome);
console.log(nomeCompleto);
console.log(typeof nomeCompleto);

var frase = "Bom dia " + nome + ", hoje é dia de Estudar!";
console.log(frase);

//declarando texto no body com aspas
document.write("Ele disse: 'Good bye!'<br>");
document.write('Ela disse: "OK!"');

/*****************BOOLEAN*******************/
var isPlayer =  true;
console.log(isPlayer);
console.log(typeof isPlayer);

var isPlayer = false;
console.log(isPlayer);
console.log(typeof isPlayer);

/*****************NULL e UNDEFINED*******************/
//declarando varievel com null:
var name = null;
console.log(name);//null

//declarando variavel sem atribuir valor
var lastName;
console.log(lastName);//undefined

//verificar o conceito de HOISTING(içamento)
/*
funções e variaveis são inicializadas no topo do código
*/

console.log(drive);
var drive = true;

/*****************OBJECT*******************/
/*
um objeto nao pode ser comparado a um struct em C, pois ele alem de receber um conjunto de tipos de variaveis, tbm pode receber metodos
*/
var objeto = {
    nome: "Melq",
    idade: 24,
    profissao: "Programador"
};

console.log(objeto);
console.log(typeof objeto);
console.log(objeto.nome);
console.log(typeof objeto.nome);
console.log(objeto.idade);
console.log(typeof objeto.idade);
console.log(objeto.profissao);
console.log(typeof objeto.profissao);

//alterar a propriedade do objeto
objeto.nome= "Joana";
console.log(objeto.nome);

//criar uma propriedade ao objeto
objeto.jogador = true;
console.log(objeto.jogador);
console.log(objeto);//imprimindo todas propriedades do objeto