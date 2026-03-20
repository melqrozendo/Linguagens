/*
Trocando elementos do DOM(Document Object Model)
-podemos trocar elementos do DOM
-ou seja, substituir uma tag por outra e de modo bem facil

Etapas:
1-criar um elemento
2-identificar elemento
3-criar um conteudo para o elemento
4-inserir conteudo no elemento
5-inserir elemnto pai no 'body' do html

*****para substituir elemento no html
1-seleciona o elemento que deseja trocar
2-cria um novo elemento de substituição
3-atribui um identificador ao elemento substituto
4-inseri conteudo ao elemento substituto
5-selecionar o elemento pai do elemento que deseja trocar
6-trocar elemento com o metodo:
replace(<elNovo>, <elAntigo>);

*/
var marca = document.createElement('h3');
console.log(marca);

marca.classList = 'marca';
console.log(marca);

var nomeMarca =  document.createTextNode('Ford é a melhor marca de carro popular no Brasil!');
console.log(nomeMarca);

marca.appendChild(nomeMarca);
console.log(marca);

var body = document.querySelector('body');

body.appendChild(marca);

/*****para substituir elemento no html**************/

//selecionar o elemento que deseja trocar
var title = document.querySelector('#title');
console.log(title);

//criando um novo title para subtituir o antigo
var title1 = document.createElement('h1');
console.log(title1);

title1.id = 'title1';
console.log(title1);

title1.appendChild(document.createTextNode('MARCAS DE CARRO DO BRASIL'));
console.log(title1);

//******************selecionar pai do title - modo 1
var body = document.querySelector('body');
//******************selecionar pai do title - modo 2
var pai = title.parentNode;
console.log(pai);//body

//trocando elementos title1(atual) pelo title(antigo)
pai.replaceChild(title1, title);





