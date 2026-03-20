/*
Definindo atributo de propriedades
*/
var carro = {};

Object.defineProperties(carro, {
    //objetos configuraveis
    _marca: {
        //atibutos 
        value: 'Ford',
        enumerable: true,
        configurable: false,
        writable: true
    },
    _modelo: {
        //atibutos 
        value: 'KA',
        enumerable: true,
        configurable: true,
        writable: true
    },
    _ano: {
        //atibutos 
        value: 2020,
        enumerable: true,
        configurable: true,
        writable: true
    },
    marca: {
        //atibutos de acesso
        get: function() {
            return this._marca;
        },
        set: function(value) {
            this._marca = value;
        }
    },
    modelo: {
        //atibutos de acesso
        get: function() {
            return this._modelo;
        },
        set: function(value) {
            this._modelo = value;
        }
    },
    ano: {
        //atibutos de acesso
        get: function() {
            return this._ano;
        },
        set: function(value) {
            this._ano = value;
        }
    }

});

console.log(carro);

carro.marca = 'Chevrolet';
carro.modelo = 'Onix';
carro.ano = '2023';

console.log(carro);


