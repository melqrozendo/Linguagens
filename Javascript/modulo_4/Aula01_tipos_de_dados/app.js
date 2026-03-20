/*
Tipos de dados em JS
-todo tipo de dado declarado em JS e inicializado em JS tem valor booleano 'true'
-apenas null e undefined que tem valor booleano 'false'
-no js quase tudo é objeto, assim tds os tipos primitivos possuem metodos(funçoes)

typeof (operador)
*/

//TIPOS PRIMITIVOS

var idade = 18; //number
var sexo = 'f'; //string
var nome = undefined; //undefined
var existe = false; //boolean
var endereco = null; //object vazio = object


console.log(idade);
console.log(typeof idade);

console.log(sexo);
console.log(typeof sexo);

console.log(nome);
console.log(typeof nome);

console.log(existe);
console.log(typeof existe);

console.log(endereco);
console.log(typeof endereco);

//verificando os tipos de dados
console.log(endereco == null);
console.log(!!existe);

//testando metodos para os tipos primitivos que sao objetos
//string
var name = 'Melq';

var firstChar = name.charAt(0);
console.log(firstChar); //M

var nameBig = name.toUpperCase();
console.log(nameBig); //MELQ

var nameTam = name.length;
console.log(nameTam); //4

//number
var valor = 24;
console.log(valor.toFixed(2)); //24.00

//TIPOS DE REFERÊNCIA (tipos proprios)

//declarando uma variavel como OBJECT:

//uso do metodo construtor
var pessoa1 = new Object();
console.log(typeof pessoa1);

//uso do metodo literal
var pessoa2 = {
    //add propriedades
    nome: 'Melq',
    idade: '24',
    sexo: 'm'
}
console.log(pessoa1); //Object {  }
console.log(pessoa2); //Object { nome: "Melq", idade: "24", sexo: "m" }

//declarando uma variavel como FUNCTION:

//uso do metodo construtor
var verNome = new Function("console.log('Rozendo');");
verNome();

//uso do metodo literal
function mostrarIdade(){
    console.log(35);
}

mostrarIdade();//executando function

//declarando uma variavel como ARRAY:

//uso do metodo construtor
var marcas = new Array('Ford', 'Renault', 'Chevrolet', 'Toyota');
console.log(marcas); //Array(4) [ "Ford", "Renault", "Chevrolet", "Toyota" ]

//uso do metodo literal
var carros = ['Ka', 'Kwid', 'Onix', 'Corolla'];
console.log(carros);
