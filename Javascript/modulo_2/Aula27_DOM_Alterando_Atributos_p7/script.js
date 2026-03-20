/*
Alterando Atributos pelo DOM(Document Object Model)
-podemos alterar os atributos via Js e DOM
Por exemplo: "alterar o atributo alt(legenda) de uma imagem ou até um src(caminho) de uma imagem"

Etapas para adicionar atributo:
1-selecionar elemento que deseja alterar o atributo
2-realiza a alteração com o metodo:
setAttribute('<identificador>, <nome do identificador>');

Etapas para remover atributo:
1-selecionar elemento que deseja alterar o atributo
2-realizar a remoção com o metodo:
removeAttribute('<identificador>');
*/
/**************ADICIONAR ATRIBUTO***************/

//quero alterar/atribuir um atributo do h1
var title = document.querySelector('#title');
console.log(title);

title.setAttribute('class', 'markTitle');
console.log(title);

//quero alterar/atribuir um atributo ao button
var btn = document.querySelector('button');
console.log(btn);

btn.setAttribute('id', 'btn-confirme');
console.log(btn);

//caso queira desabilitar o button
btn.setAttribute('disabled', 'disabled');
console.log(btn);

/**************REMOVER ATRIBUTO***************/

//quero remover o atributo id do title
var title = document.querySelector('#title');
console.log(title);

title.removeAttribute('id');
console.log(title);



