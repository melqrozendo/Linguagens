/*
Alterando CSS pelo DOM(Document Object Model)
-podemos alterar/adicionar CSS pelo JS (criando uma classe)
-as regras de CSS ficam de forma inline;

Etapas:
1-selecionar elementos que deseja alterar
2-adicionar o estilo com metodo:
<variavel>.style.<tipo> = "";

*/
//selecionando e alterando estilo do title
var title = document.querySelector('#title');

title.style.color = "red";

//criando um elemento e inserindo identificador e conteudo
var subtitle = document.createElement('h2');

subtitle.id = 'subtitle';
console.log(subtitle);

subtitle.appendChild(document.createTextNode('Ford a melhor marca de carro popular do Brasil'));

//selecionando elemento pai e elemento que deseja trocar posição na pagina html
var body = document.querySelector('body');
var bnt = document.querySelector('button');

//body.appendChild(subtitle);
body.insertBefore(subtitle, bnt);

//adicionando estilo ao elemento subtitle criado
//subtitle.style.color = '#FFFFFF';

subtitle.style.cssText = "color: #FFFFFF; font-size: 16px";





