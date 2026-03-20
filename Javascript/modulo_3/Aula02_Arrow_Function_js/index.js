//criando um function
function upperName(nome){
    return nome.toUpperCase();
}

const name = upperName('Melq');
console.log(upperName('Rozendo'));
console.log(name);

//atribuir uma function a uma variavel [se torna uma expressao]
const estacaoAno = function(tipo){
    if(tipo == 'Verao'){
        console.log('certo');
    }
}
estacaoAno('Verao');

const soma = a => {
    console.log(a+5);
}
soma(6);

const subtrair = (a,b) => {
    console.log(a-b);
}
subtrair(5,4);

const mult = (a,b,c) => console.log(a*b*c);
mult(3,4,5);

const countLetters = word => word.length;
console.log(countLetters('Netflix'));

//diferença entre function e arrow function (this)
/*
function: cria um novo this
Arrow function: cria uma referencia ao this anterior
*/

class Menu {
    //construtor
    constructor(menu) {
        this.menuElement = document.querySelector(menu);
        this.activeClass = 'active';
    }
    //adicionar um evento
    addActiveEvent() {
        //add um evento de click no elemento menu para que add um novo identificador do tipo class
        // this.menuElement.addEventListener('click', function (event) {
        //     console.log(this);//elemento do html
        //     event.target.classList.add("active");
        // });

        this.menuElement.addEventListener('click', (event) => {
            console.log(this);//Object
            event.target.classList.add(this.activeClass);
        });
    }
}

//adicionando um identificador ao elemento menu
const menu = new Menu('.principal');
menu.addActiveEvent();
// console.log(menu);//Object
