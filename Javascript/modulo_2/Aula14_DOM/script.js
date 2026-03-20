/*
criando um DOM com for: criando elementos com JS no HTML
*/
//declar um array-lista e inicializar com palavras
var lista = ["Azul", "Preto", "Amarelo", "Verde", "Vernelho"];

//declarar uma variavel que recebe uma lista criada no html
var listaUl = document.createElement('ul');

//vamos inserir a tag 'ul' dentro do 'body' do html
//para isso, declaramos uma variavel que recebe tds elementos da tag body do html
var body = document.getElementsByTagName('body');

//verificar a collection criada no body
console.log(body[0]);

//realizar a inserção de elementos da lista na tag body
//appendChild - metodo de adicionar elemento filho
body[0].appendChild(listaUl);

//adicionar itens a lista
var listaNoBody = document.getElementsByTagName('ul');

console.log(listaNoBody[0]);

//vamos dar uma appendChild nos elementos da lista
for(var i=0; i <lista.length; i++){

    //criar uma nova tag 'li' 
    var li = document.createElement('li');
    //criando um elemento com o texto da lista no li
    var textli = document.createTextNode(lista[i]);
    //adicionar o texto para dentro do li
    li.appendChild(textli);
    //realizar a inserção de elementos da lista na tag body
    //appendChild - metodo de adicionar elemento filho
    listaNoBody[0].appendChild(li);

    console.log(textli);
}


