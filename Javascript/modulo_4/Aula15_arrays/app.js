/*
Arrays: (objetos JS)
1-se por meio de uma variavel conseguimos acessar metodos, entao é um Object

Metodos do Array:
pop(): remove o ultimo elemento do array
length: retorna a quantidade de elementos do array
push(''): permite inserir um item no final do array
shift(): remove o primeiro elemento do array
unshift(''): permiti inserir um item no inicio do array

splice('<posicao>', '<qntd de item>'):
-pode remover o item na posição especifica
-pode obter o item na posição especifica
-podemos operar a remoçao de um item e uma implementação de outro item na mesma posição por meio de uma funçao dinamica.

slice(): estrutura original do array

*/

var carros = ['Ford', 'Chevrolet', 'Renault', 'Fiat'];
// carros.pop();
// console.log(carros.length);
// carros.push('Jeep');
// carros.shift();
// carros.unshift('Volkswagen');
// carros.splice(1,1);//removendo item da posiçao 1
// console.log(carros.splice(1,1));//obtendo item na posição1
carros.slice();
console.log(carros);


//função dinamica para uso do metod slipe()
var getCarro = function(posicao, qtd){
    //variavel no escopo local
    var carros = ['Ford', 'Chevrolet', 'Renault', 'Fiat'];

    return carros.splice(posicao, qtd);
    // console.log(carros);
}

var novosCarros = getCarro(1,2);
console.log(novosCarros);

//obter resultado de um item do array sem metodos
var carro = novosCarros[1];
console.log(carro);

//obter os resusltado de um array sem metodos usando forEach(para cada)
novosCarros.forEach(function(item, index){
    console.log(index, item);
})

