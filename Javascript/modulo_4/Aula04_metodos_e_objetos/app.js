/*
Metodos e objetos em JS
-em JS podemos criar varios objetos e adicionar a eles propriedade
-caso os objetos compartilhem de mesmo tipo de propriedade, podemos fazer uma função no escopo global que atenda aos escopos dos objetos

*/
//declarando um função no escopo global para atender aos objetos
var pegarNome = function(){
    console.log(this.nome);
}
//Objeto 1
//criar um objeto e adicionar propriedades
var pessoa = {
    nome: 'Melq',
    idade: 24,
    //atribuindo uma funciton anonima a propriedade do objeto
    // getNome: function(){
    //     console.log(pessoa.nome);
    //     console.log(this.nome);
    // }
    getNome: pegarNome//passagem por referencia a função
};

//Objeto 2
//criando um objeto e adcionando propriedades
var carro = {
    nome: 'KA',
    marca: 'Ford',
    // getNome: function(){
    //     console.log(carro.nome);
    //     console.log(this.nome);
    // }
    getNome: pegarNome//passagem por referencia a função
};

//executando objeto 1 e 2
pessoa.getNome();
carro.getNome();