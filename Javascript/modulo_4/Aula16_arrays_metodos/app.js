/*
Arrays (metodos complexos):
Filter(): filtra o item desejado e retorna um array
Some(): filtra dados do array (ou deseja confirmar se aquele dado existe no array) e retorna true/false
Find(): filtra os dados e retorna uma string, caso nao um undefined

Arrays (metodos para numeros):
Reduce(): soma todos os numeros do array e retorna o total
*/

//Array
var carros = ['Ford', 'Chevrolet', 'Renault', 'Fiat'];

//Metodo Filter()
var result1 = carros.filter(function(value){
    return value == 'Ford';
});
console.log(result1);

/*
//simulando sem uso de metodo filter
carros.forEach(item => {
    if(item == 'Ford') {
        var carro = new Array(item);
        console.log(carro);
    }
});
*/


//Metodo Some()
var result2 = carros.some(valor => {
    return valor == 'Renault';
});
console.log(result2);

//Metodo Find()
var result3 = carros.find(valor =>{
    return valor == 'Fiat';
})
console.log(result3);




//Array numerico
var num = [10, 20, 30];

//pecorrer array somando os dados numericos
var soma = function(total, nummero) {
    return total + nummero;
};
//Metodo Reduce()
var result4 = num.reduce(soma);
console.log(result4);



