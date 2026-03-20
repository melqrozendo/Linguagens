/*
Removendo os elementos do DOM(Document Object Model)
Etapas:
1-selecionar o elemento por meio da tag
2-aplicar o metodo de remoção
*/

/*
removendo elemento filho
1-selecionar o elemento pai 
2-seleciona o elemento filho 
3-aplicar o metodo de remoção:
removeChild();
*/
var container = document.querySelector('#container');

var p = document.querySelector('#container p');

container.removeChild(p);

/*
removendo o elemento pai
1-selecionar o elemento pai 
2-aplicar o metodo de remoção
remove();
*/
var subtitle = document.querySelector('.subtitle');

subtitle.remove();






