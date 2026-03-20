/*
Prototype:
-é melhor compartilhar uma propriedade de função do que defini-la para cada objeto criado.
-todo metodo construtor ou função possui o recurso prototype (que serve para compartilhar caracteristicas entre objetos)
*/
function Carro (marca, modelo, ano){
    this.marca = marca;
    this.modelo = modelo;
    this.ano = ano;
    //propriedade funcao da função construtora criada
    // this.getMarca = function(){
    //     return this.marca;
    // }
}

//criando prototype - tipo 1
// Carro.prototype.getMarca = function(){
//     return this.marca;
// }
// Carro.prototype.getModelo = function() {
//     return this.modelo;
// }
// Carro.prototype.getAno = function(){
//     return this.ano;
// }

//criando prototype - tipo 2
Carro.prototype = {
    //definir propriedade constructor:
    constructor: Carro,
    getMarca: function() {
        return this.marca;
    },
    getModelo: function() {
        return this.modelo;
    },
    getAno: function(){
        return this.ano;
    }
}
//criando objeto
var carro1 = new Carro('Ford', 'KA', 2023);
var carro2 = new Carro('Chevrolet', 'Onix', 2021);
console.log(carro1, carro2);
console.log(carro1.getMarca(), carro1.getModelo(), carro1.getAno());
console.log(carro2.getMarca(), carro2.getModelo(), carro2.getAno());

//como verificar se o constructor do objeto criado é 'Carro'

//testando se o objeto é instancia do construtor 'Carro':
console.log(carro1 instanceof Carro);//true

//testando se o constructor de carro1 é Carro, sem ter definido a propriedade constructor no prototype vai gerar (false), mas quando definimos, geramos (true):
console.log(carro1.constructor === Carro);//true

