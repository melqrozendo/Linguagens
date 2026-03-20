/*
Métodos Privados:
-consiguimos acessar apenas dentro do escopo local da function

Métodos Privilegiados:
-quandos as variaveis/objetos/ podem ser acessados fora da função, no escopo global

*/

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
    //configurados os metodos privilegiados, para que as propriedades não sejam enumeraveis
    Object.defineProperties(metodos, {
        getMatricula: {
            enumerable: false
        },
        getSenha: {
            enumerable: false
        }
    });
    //configuramos para que as propriedades do objeto, não sejam modificadas/deletadas
    Object.freeze(metodos);

    //para que possa acessar pelo escopo global
    return metodos;

})('01224970', '1aqlu0');

console.log(user);

console.log(user.getMatricula);
console.log(user.getSenha);

console.log(user.getMatricula());
console.log(user.getSenha());

//verificando o laço for..in que interagem sobre propriedades enumeradas de um objeto, na ordem original de inserção
for(propriedades in user){
    console.log(propriedades);
}

/*
Obs: para não ter acesso as propriedades enumerados do objeto que possui metodos privilegiados, definiremos antes do metodo 'Object.freeze();' o metodo:
Object.defineProperties(<object>, {

});
*/


