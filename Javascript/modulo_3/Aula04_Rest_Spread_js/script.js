/*
Uso do Rest (coletar o resto de argumentos):
1- podemos criar uma função, passar um argumento principal e em seguida passar o Rest (lista de argumentos), ou seja se torna um array de argumentos.

Uso do Spread (espalhar os argumentos):
1- podemos criar uma variavel e definir um array de numeros, logo apos desejamos coletar o maior desses numeros.
*/

//Usando Rest
function showList(empresa, ...clientes) {
    console.log(empresa);
    console.log(clientes);
}

showList('Netflix', 'Rozendo', 'Joana');

//Usando Spread - Exemplo 1
const num = [1, 2, 3, 4, 5, 26, 45, 56, 4, 5];
//o metodo max() não aceita array apenas numeros
console.log(Math.max(num)); //NaN
//assim:
console.log(Math.max(1,2,4,6,7,95,45));//95
//então como pegar o numero dentro de um array
console.log(Math.max(...num));

//Usando Spread - Exemplo 2
const itens1 = document.querySelectorAll('li');
const itens2 = Array.from(document.querySelectorAll('li'));
//o retorno é uma NodeList (parece um array mas nao é)
console.log(itens1);

//uso do forEach (para cada): retorna cada um dos itens da array
itens1.forEach(item => {
    console.log(item);
});

//uso do map: retorna uma nova array, porem o elemento li não é um array (porem podemos transforma-lo)

//usando spread
[...itens1].map(item =>{
    console.log(item);
});

//nao usando spread
itens2.map(item => {
    console.log(item);
})


//clonar objetos
const carro = {cor: 'Azul', portas: 4, ano: 2023};
console.log(carro);
//clonando com spread e adicionando mais uma propriedade
const cloneCarro = {...carro, turbo: true};
console.log(cloneCarro);

//criar um objeto a partir de uma classe
class Transporte {
    constructor() {
        this.terrestre = true;
    }
}

//criando class que extende a class Transporte
class Carro extends Transporte {
    constructor(cor, portas){
        //passando o super() sempre em classes 
        super();

        this.cor = cor;
        this.portas = portas;
    }
}

//criando um novo objeto
const car = new Carro ('Vermelho', 4);
//fazendo clone com spread
const clonCarro = {...car};

console.log(car);//objeto criado da class de extendida
console.log(clonCarro);

