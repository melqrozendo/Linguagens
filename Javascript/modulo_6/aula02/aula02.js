var a = 5;
var b = 6;

var soma = a + b;
console.log(`Resultado: ${soma}`);

var peso = 100;
var altura = 0;

let valorAltura = (altura != 0);

if(valorAltura) {
    var imc = peso / (altura * altura)
    console.log(`Peso: ${imc}`);
} else {
    console.log('A aultura deve ser diferente de zero.')
}


// Objeto em JS
let nomeLoja = 'Real Carros'
let valorCarro = 25000;
let anoCarro = 2025;

var loja = {
    nome: nomeLoja,
    carro: valorCarro,
    ano: anoCarro
}

console.log(`A loja ${loja.nome} tem um carro ano ${loja.ano} no valor de R${loja.carro},00 reais.`)

// Arrays
var loja = [];
var carros = ['ford', 'Renault', 'Nissan'];
var anos = [2020, 2021, 2022];
loja = [carros, anos];

for(let i=0; i<loja.length; i++) {
    for(let j=0; j<loja[i].length; j++) {
        let rotulo = (i === 0) ? "Marcas" : "Ano";
        console.log(`${rotulo}: ${loja[i][j]}`);
    }
}

// Arryas de objetos
let estoque = [
    { marca: 'Ford', ano: 2020 },
    { marca: 'Renault', ano: 2021 }
];