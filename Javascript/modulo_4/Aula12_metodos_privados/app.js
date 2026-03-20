/*
Métodos Privados:
-consiguimos acessar apenas dentro do escopo local da function

Métodos Privilegiados:
-quandos as variaveis/objetos/ podem ser acessados fora da função, no escopo global

*/

//criando uma função(anonima) alto-executavel
var carro = (function(marca, modelo, ano, motor){
    //escopo isolado do global
    return {
        marca: marca,
        modelo: modelo,
        ano: ano,
        motor: motor
    }
})('Ford', 'KA', 2023, 2.0);

console.log(carro);

//criando uma função(anonima) alto-executavel
var pessoa = (function (nome, idade, sexo){
    //metodos privados
    var nome = nome;
    var idade = idade;
    var sexo = sexo;
    //metodos privados que se tornaram privilegiados
    var getNome = function () {
        return nome;
    }
    var getIdade = function () {
        return idade;
    }
    var getSexo = function () {
        return sexo;
    }
    //a partir da definição do return os metodos se tornam privilegiados
    return {
        getNome: getNome,
        getIdade: getIdade,
        getSexo: getSexo
    }
})('Rozendo', 25, 'M');

console.log(pessoa);

console.log(pessoa.getNome);
console.log(pessoa.getIdade);
console.log(pessoa.getSexo);

console.log(pessoa.getNome());
console.log(pessoa.getIdade());
console.log(pessoa.getSexo());

//criando uma função(anonima) alto-executavel
var user = (function (matricula, senha) {
    //metodos privados
    var matricula = matricula;
    var senha = senha;
    //metodos privados que se tornaram privilegiados
    var getMatricula = function () {
        return matricula;
    }
    var getSenha = function () {
        return senha;
    }
    //para proteger os metodos privilegiados de ser modificados e adição de novos metodos, definimos o metodo freeze
    var metodos = {
        getMatricula: getMatricula,
        getSenha: getSenha
    }
    Object.freeze(metodos);

    //para que possa acessar pelo escopo global
    return metodos;

})('01224970', '1aqlu0');

console.log(user);

console.log(user.getMatricula);
console.log(user.getSenha);

console.log(user.getMatricula());
console.log(user.getSenha());


