/*
Heranças entre objetos:
-todo objeto quando é criado (instanciado), ele herda caracteristicas do tipo de dado Object, que possui uma propriedade prototype

*/
function Carro (marca, modelo, ano){
    this.marca = marca;
    this.modelo = modelo;
    this.ano = ano;
}
//criando um factory function que herda do cosntructor
var makeCarro = function(marca, modelo, ano){
    //retorna um objeto
    return {
        //definir o constructor
        constructor: Carro,
        marca: marca,
        modelo: modelo,
        ano: ano,
        //propriedade com atributo de acesso
        getMarca: function (){
            return this.marca;
        }
    }
}

//criando objeto a partir do constructor:
var carro1 = new Carro('Ford', 'KA', 2021);

//criando objeto a partir do factory function:
var carro2 = makeCarro('Renault', 'Kwid', 2024);

console.log(carro1, carro2);

//verificar de onde os objetos criados foi construido
console.log(Object.getPrototypeOf(carro1));
console.log(Object.getPrototypeOf(carro2));

//testando propriedade de acesso no makeCarro:
console.log(carro2.getMarca());

//criando uma nova propriedade ao objeto criado a partir do factory function
var carroOk = Object.create(carro2, {
    motor: {
        value: 2.0,
        writable: true,
        configurable: true,
        enumerable: true
    }
})

//testando nova propriedade criada para o makeCarro
console.log(carroOk);


