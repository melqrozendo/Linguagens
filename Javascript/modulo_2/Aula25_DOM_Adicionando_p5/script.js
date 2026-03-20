/*
Adicionando nos elementos do DOM(Document Object Model)
chamado de 'acrescentar um filho'
Exemplo: colocar um <p> dentro de uma <div>
*/
/*
>>>>>>>>>>Com appendChild:

Etapas:
1-Declarar uma variavel que recebe um elemnto criado do Html
2-atribuir um identificador seja id/class a variavel 

3-declarar uma variavel que recebe um elemento filho
4-atribuir um identificador seja id/class a variavel
5-atribuir ao elemento filho um conteudo

6-atribuir ao elemento pai o elemento filho

7-Selecionar a tag 'body' do html
8-atribuir o elemento pai ao 'body' do HTML

*/

//Exemplo 1

var container = document.createElement('div');
console.log(container);
container.classList = 'bloco1';//identificador
console.log(container);

var title = document.createElement('h1');
console.log(title);
title.id = 'title';//identificador
console.log(title);
title.appendChild(document.createTextNode('Clínica Veterinária'));

container.appendChild(title);
console.log(container);

var body = document.querySelector('body');
body.appendChild(container);

//Exemplo 2

var container1 = document.createElement('div');
console.log(container1);
container1.classList = 'bloco2';
console.log(container1);

var subtitle = document.createElement('h2');
console.log(subtitle);
subtitle.id = 'subtitle';
console.log(subtitle);
subtitle.appendChild(document.createTextNode('Recepção de Animais:'));

container1.appendChild(subtitle);
console.log(container1);

body.appendChild(container1);

/*
>>>>>>>>>>Com insertBefore (inseri antes)

Etapas:
1-Declarar uma variavel que recebe um elemnto criado do Html
2-atribuir um identificador seja id/class a variavel 

3-declarar uma variavel que recebe um elemento filho
4-atribuir um identificador seja id/class a variavel
5-atribuir ao elemento filho um conteudo

6-atribuir ao elemento pai o elemento filho

*7-Selecionar a tag 'body' do html*
8-atribuir o elemento pai ao 'body' do HTML

9-declara uma varialvel e selecionado a div anterior
10-informando que no 'body' deve ser feito um insert antes dessa div criada
*/
//Exemplo 1

var container2 = document.createElement('div');
console.log(container2)
container2.classList = 'bloco1.1';
console.log(container2);

var note = document.createElement('h3');
console.log(note);
note.id = 'nota';
console.log(note);
note.appendChild(document.createTextNode('Escritório de Medicina Veterinária'));

container2.appendChild(note);
console.log(container2);

//inserindo div atual criada no 'body' do html
body.appendChild(container2);

//declara uma varialvel e selecionado a div anterior
var container1 = document.querySelector('.bloco2');

//informando que no 'body' deve ser feito um insert antes dessa div criada
body.insertBefore(container2, container1);

/*
Assim a div com um 'note' criada foi inserida antes da div do 'subtitle' 
*/