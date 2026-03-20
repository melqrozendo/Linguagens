/***********************TAG**********************/

//acessando DOM por tag
//acesso um elemmento pela tag
var titulo = document.getElementsByTagName('h1')[0];
console.log(titulo);

//acesso um elemento da colletion pela tag
var lis = document.getElementsByTagName('li');
console.log(lis[3]);

/***********************ID**********************/

//acessando DOM por id
//acesso um unico elemento pelo id
var paragrafo = document.getElementById('paragrafo');
console.log(paragrafo);

//acesso a 1ª lista
var lista1 = document.getElementById('lista1');
console.log(lista1);
//acesso a 2ª lista
var lista2 = document.getElementById('lista2');
console.log(lista2);

/***********************CLASS**********************/

//acessando DOM por class
//acesso o elementos pela class
//podemos adicionar mais uma lista ao HTML porem so vai acessar os elementos da class = "item"
var item = document.getElementsByClassName('item');
console.log(item);

/***********************querySelector****************/

//seleciona um único elemento:
var data = document.querySelector('#data span');
console.log(data);

/***********************querySelectorAll*************/

//seleciona varios elementos:
var itensQuery = document.querySelectorAll('#lista1 li');
console.log(itensQuery);

var itensQuery = document.querySelectorAll('#lista2 li');
console.log(itensQuery);
