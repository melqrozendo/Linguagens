/*
A instrução this:
-Fora dos escopos locais o this sempre se refere ao objeto global Window
-em objetos o this vai se referir a 'instancia' e pode acessar sua propriedades

>>>>>O this permiti:<<<<<<<<<<
-exibir o valor da propriedade dentro do objeto
-alterar o valor da propriedade dentro do objeto

Obs>>>em JS tudo é objeto
*/
//verificar o que o this
//toda variavel declarada se torna propriedade do objeto global Window
var teste = 5;
console.log(this);
console.log(this.teste);
console.log(teste);

// alert('ola!');
// this.alert('ola! mundo.')

//this pode referenciar ele mesmo
let carro = {
    marca: "Ford",
    modelo: "Ka",
    ano: 2020,
    dono: "Rozendo",
    idade: 16,

    km: function(){
        var kilometragem = 5000;
        if(kilometragem < 5000){
            //propriedade do objeto instanciado para exibir
            console.log("O Carro de " + this.dono + " esta Novo!")
        }else if(kilometragem >= 5000){
            //propriedade do objeto instanciado para exibir
            console.log("O Carro de " + this.dono + " esta semiNovo!");
        }else{
            //propriedade do objeto instanciado para exibir
            console.log("O Carro de " + this.dono + " esta velho!");
        }
    },

    cnh: function(){
        this.idade += 1;
        console.log(carro.idade);

        if(this.idade < 18){
            console.log("O dono "+ this.dono+ " não permitir menores dirigir seu carro "+ this.marca);
        }else if(this.idade >= 18){
            console.log("O dono "+ this.dono+ " permite que dirija seu carro "+ this.marca);
        }else if(this.idade< 65){
            console.log("O dono "+ this.dono+ " não permite que pessoas idosas dirijam seu carro "+ this.marca);
        }
    }

};

//chamando propriedades e metodos do objeto 'carro'
console.log(carro.marca);
console.log(carro.modelo);
console.log(carro.ano);
console.log(carro.dono);
console.log(carro.idade);

carro.km();
carro.cnh();

