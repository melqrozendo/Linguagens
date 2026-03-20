/*
criando um objeto a partir de uma função construtora
*/
function Carro(marca, modelo, ano){
    this._marca = marca;
    this.modelo = modelo;
    this.ano =  ano;

    //configurar as propriedade dos objeto qnd criado
    Object.defineProperties(this, {
        _marca: {
            enumerable: true,
            configurable: true,
            writable: true
        },
        //atributo de acesso a propriedade
        marca: {
            get: function (){
                return this._marca;
            },
            set: function (value){
                this._marca = value;
            }
        }
    });
    //configurando para que o objeto criado seja ñ extensivo
    Object.preventExtensions(this);
}
//chamada de função contrutora com 'new' (cria um objeto)
var carro1 = new Carro('Ford', 'KA', 2020);
console.log(carro1);

//verificar de qual função construtora o objeto foi construido
console.log(carro1 instanceof Carro); //true or false
console.log(carro1.constructor === Carro); //true or false

//exibir propriedades do objeto criado
for(propriedade in carro1){
    console.log(propriedade);
    //Obs: todas as propriedades são enumeraveis
}
//exibir valores da propriedades dos objeto criado
for(propriedade in carro1){
    console.log(propriedade + ' : ' + carro1[propriedade]);
}

//Testando configuração das propriedades do objeto
carro1.marca = 'Chevrolet';

for(propriedade in carro1){
    console.log(propriedade + ' : ' + carro1[propriedade]);
}

//Testando configuração de permissões do objeto
carro1.motor = 1.0;
console.log(carro1);