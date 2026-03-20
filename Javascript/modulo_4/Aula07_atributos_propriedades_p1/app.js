/*
Atributos de Propriedades em JS:

Object.defineProperty(<objeto>, '<propriedade>', {
    //atributos:
    enumerable - 
    [false - a propriedade não aparece na chamada ou execucao]
    [true - a propriedade pode aparecer na chamada]
    configurable - 
    [false - a propriedade não pode ser configurado]
    [true - a propriedade pode ser configurado]

    value - 
    [atribuir valor]
    writable - 
    [false - o valor nao pode ser reescrito]
    [true - o valor pode ser reescrito]
});


Atributos para as propriedades de acesso (get-set)

Object.defineProperty(<objeto>, '<propriedade>', {
    //atributos de acesso
    get: function(){

    },
    //atributo de alteração
    set: function(){

    }
});


*/

var pessoa = {
    nome: 'Rozendo',
    //atributo de acesso interagindo com a propriedade (idade, profissao)
    _idade: 25,
    sexo: 'Masculino',
    _profissao: 'programador',
    casado: false,
    state: 'pristine',
    //propriedades de acesso get e set:
    get idade(){
        this.state = 'dirty';
        return this._idade;
    },
    set idade(value){
        this._idade = value;
    }
};

//****Realizar uma interação para exibir todas as propriedades do objeto 'pessoa'
console.log('Todas as propriedades do objeto:');
for(propriedade in pessoa){
    console.log(propriedade);
}

/*******************************************/

//****caso deseja não exibir uma propriedade na interação
Object.defineProperty(pessoa, 'idade', {
    enumerable: false
});

console.log('Propriedades do objeto: (exceto = idade)');
for(propriedade in pessoa){
    console.log(propriedade);
}

/*******************************************/

//****caso deseje que uma propriedade jamais deva ser removida de um objeto
Object.defineProperty(pessoa, 'nome', {
    configurable: false
});

/*
veja: que a propriedade não pode ser configurada, porem seu valor pode ser alterado
*/

//mesmo adicionando uma operador delete
delete pessoa.nome;

console.log('Propriedades do objeto:');
for(propriedade in pessoa){
    console.log(propriedade);
}

/*******************************************/

//todos os atributos de propriedades:
Object.defineProperty(pessoa, 'sexo', {
    enumerable: false,//nao aparece
    configurable: false,//nao pode ser configirada
    value: 'Feminino',//valor alterado
    writable: false,//não pode ser reescrito
});

console.log('Propriedades do objeto: (exceto = sexo)');
for(propriedade in pessoa){
    console.log(propriedade);
}


/*******************************************/
//definindo um atributo de acesso a propriedade 'profissao'
Object.defineProperty(pessoa, 'profissao', {
    //acesso a propriedade
    get: function () {
        return this._profissao;
    },
    //altero a propriedade
    set: function (value) {
        this._profissao = value;
    }
});
//get
var profissao = pessoa.profissao;
console.log(profissao);
//set
pessoa.profissao = 'Engenheiro';
var profissao = pessoa.profissao;
console.log(profissao)



