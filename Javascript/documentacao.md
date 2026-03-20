Documentação sobre JS

#01 - Programação Orientada a objetos (POO):

#02 - tipos de dados em JS
-quase todos tipos de dados em JS são objetos, pois para cada um tipo de dados tem-se metodos;
-em Js existe duas classificações de tipos de dados:
1-tipos de dados primitivos:
number
string
undefined
boolean
object
Obs: podem ser verificar com o operador 'typeof'

2-tipos de dados referencia (tipos proprios):
OBJECTS
FUNCTIONS
ARRAYS
-que possuem duas formas de declaração:
1-uso do metodo construtor (uso de operador 'new')
var obPessoa = new Object();
var funcPessoa = new Function();
var ArrPessoa = new Array();

2-uso do metodo literal
var obPessoa = {
    <adicionar propriedades>
}

function funcPessoa(){
    <adicionar comandos>
}

var ArrPessoa = [];

#03 - Identificador de dados em JS
operador 'instanceof'


#04 - Funçoes em JS

-passagem de parametros
(temos que declarar o valor do parametro e atribuir a uma variavel para ser exibido na tela)

-uso de argumentos 
(define a quantidade de parametros passados atribuindo a uma variavel de quantidade)

var qtd = arguments.length

#05 - Medotos e Objetos em JS

-em JS podemos criar varios objetos e adicionar a eles propriedade.
-caso os objetos compartilhem de mesmo tipo de propriedade, podemos fazer uma função no escopo global que atenda aos escopos dos objetos.

3 metodos que possibilita alterar o valor do 'this':
call(<parametro_nome_objeto>, <parametros>)

apply(<parametro_nome_objeto>, [<array_parametros>])

bind(<parametro_nome_objeto>, <parametros>)
[o metodo bind gera uma função, por isso deve ser atribuido a uma variavel e executado]

#06 - Objetos em JS
-a naturaza dos objetos em js é dinamica

#07 - Propriedade dados em JS
-propriedades de dados armazena um valor

tipos de propriedade de acesso:
get (enviar dados) 
set (pegar dados)

#08 - Definir Atributos de uma propriedade

Object.defineProperty(<objeto>, '<propriedade>', {
    //atibutos 
    value: <valor>;
    enumerable: <true/false>;
    configurable: <true/false>;
    writable: <true/false>;

    //atributos de acesso
    get: function(){

    },
    set: function(){

    }
});

#09 - Definir Atributos de multiplas propriedades

Object.defineProperties(<objeto>,{
    //objetos configuraveis
    <_propriedade1>: {
        //atibutos 
        value: <valor>;
        enumerable: <true/false>;
        configurable: <true/false>;
        writable: <true/false>;
    },
    <_propriedade2>: {
        //atibutos 
        value: <valor>;
        enumerable: <true/false>;
        configurable: <true/false>;
        writable: <true/false>;
    },
    <propriedade1_de_acesso>: {
        //atibutos de acesso
        get: function () {
            return this._<propriedade>;
        },
        set: function (value) {
            this._<propriedade> = value;
        }
    }

});

#10 - Definindo alguns metodos para o objeto

Obs: como obter os atribitos das propriedades

#acessar os atributos da propriedade
Object.getOwnPropertyDescriptor(<objeto>, '<propriedade>');

Obs: uso desses atributos é bastante especifico no JS

#previne contra alterações no objeto
Object.preventExtensions(<objeto>);
console.log(Object.isExtensible(<objeto>));

#selado contra alteraçoes no objeto
Object.seal(<objeto>);
console.log(Object.isSealed(<objeto>));

#congelado contra alteraçoes no objeto
Object.freeze(<objeto>);
console.log(Object.isFrozen(<objeto>));


#11 - Construtores

-construtores em JS são apenas funçoes que sao chamados a partir da palavra 'new'
-JS puro nao tem classe e a Orientação a Objeto no JS é prototipada

new: é um metodo construtor de objeto em JS

#12 - Prototype

-serve para compartilhar caracteristicas entre objetos criados a partir de funçoes construtoras

#13 - Herança entre objetos

-todo objeto quando é criado (instanciado), ele herda caracteristicas do tipo de dado Object, que possui uma propriedade prototype.

#14 - Metodos Privados

Métodos Privados:
-consiguimos acessar apenas dentro do escopo local da function

#15 - Metodos Privilegiados

Métodos Privilegiados:
-quandos as variaveis/objetos/ podem ser acessados fora da função, no escopo global

metodos get (metodos de leitura)
metodos set (metodos de reescrita de valores)
