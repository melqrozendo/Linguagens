/*
Métodos Privados:
-consiguimos acessar apenas dentro do escopo local da function

Métodos Privilegiados:
-quandos as variaveis/objetos/ podem ser acessados fora da função, no escopo global

metodos get (metodos de leitura)
metodos set (metodos de reescrita de valores)
*/

//criando uma função(anonima) alto-executavel
var user = (function (matricula, senha) {
    //metodos privados
    var matricula = matricula;
    var senha = senha;
    //metodos privilegiados
    var getMatricula = function () {
        return matricula;
    }
    var getSenha = function () {
        return senha;
    }
    var setMatricula = function (value) {
        matricula = value;
    }
    var setSenha = function (value) {
        senha = value;
    }
  
    var metodos = {
        //metodos de leituras
        getMatricula: getMatricula,
        getSenha: getSenha,
        //metodos de reescrita de valores
        setMatricula: setMatricula,
        setSenha: setSenha

    }
    
    Object.defineProperties(metodos, {
        getMatricula: {
            enumerable: false
        },
        getSenha: {
            enumerable: false
        },
        setMatricula: {
            enumerable: false
        },
        setSenha: {
            enumerable: false
        }
    });
    
    Object.freeze(metodos);

    
    return metodos;

})('01224970', '1aqlu0');

console.log(user);

//teste de verificação se os metodos sao enumeraveis (visiveis)
for(propriedades in user){
    console.log(propriedades);
}
//setando outros dados:
user.setMatricula('01225182');
user.setSenha('1bqlu0');

console.log(user.getMatricula());
console.log(user.getSenha());



