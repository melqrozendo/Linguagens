/*
Propriedade em JS
-manipular propriedade de aceso

get
set
-verificar estado da propriedade de dados

state: 'pristine' (estado virgem)
state: 'dirty' (estado preenchido)
*/

//a natureza dos objetos em js é dinamica
var pessoa = {
    nome: 'Rozendo',
    _idade: 25,
    //estado da propriedade
    state: 'pristine',

    get idade(){
        this.state = 'dirty';
        return this._idade;
    },
    set idade(value){
        this._idade = value;
    }
};
console.log(pessoa);

pessoa.idade = 37;//setando valor de idade
console.log(pessoa);

pessoa.idade.value = 45;
console.log(pessoa);

console.log(pessoa.nome);
console.log(pessoa._idade);
console.log(pessoa.state);

