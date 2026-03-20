/*
Metodos e objetos em JS:

3 metodos que possibilita alterar o valor do 'this':
call(<parametro_nome_objeto>, <parametros>)

apply(<parametro_nome_objeto>, [<array_parametros>])

bind(<parametro_nome_objeto>, <parametros>)
[o metodo bind gera uma função, por isso deve ser atribuido a uma variavel e executado]

*/
//declarando um função no escopo global para atender aos objetos
var pegarNome = function(nome, sobrenome){
    console.log(this.nome = nome);
    console.log(this.sobrenome = sobrenome);
    console.log(this);
}
//Objeto 1
//criar um objeto e adicionar propriedades
var pessoa = {
    nome: 'Melq',
    sobrenome: 'Rozendo',
    idade: 24,
    getNome: pegarNome//passagem por referencia a função
};

//Objeto 2
//criando um objeto e adcionando propriedades
var carro = {
    nome: 'KA',
    marca: 'Ford',
    getNome: pegarNome//passagem por referencia a função
};

//executando objeto 1 e 2
// pessoa.getNome();
// carro.getNome();

//METODOS para manipulação do THIS
pegarNome.call(pessoa, 'Pedro', 'Rocha');

pegarNome.apply(pessoa, ['Joana', 'Nascimento']);

var uploadNome = pegarNome.bind(pessoa, 'José', 'Silva');
uploadNome();
