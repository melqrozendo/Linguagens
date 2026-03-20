/*
Criando os elementos do DOM(Document Object Model)
Etapas:
1-Declarar uma variavel que receba um elemento criado
2-vamor inserir conteudo na tag
3-inserir o conteudo na variavel criada
4-Inserir no HTML
*/
var novoParagrafo = document.createElement('p');
//console.log(novoParagrafo);
var texto = document.createTextNode("Classe 1 - Turma A");
//console.log(texto);
novoParagrafo.appendChild(texto);
//console.log(novoParagrafo);
var body = document.querySelector('body');
console.log(body);
body.appendChild(novoParagrafo);

/*
inserindo elemento dentro de um container:
1-selecionar conteiner
2-declarar variavel que receba um elemento criado
3-inserir o conteudo na variavel
4-inserir a variavel no conteiner
*/
var container = document.querySelector('#container');
console.log(container);

var classificacao = document.createElement('p');

classificacao.appendChild(document.createTextNode('Alunos Matrículados: '));

console.log(classificacao);

container.appendChild(classificacao);




