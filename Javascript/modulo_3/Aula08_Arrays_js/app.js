/*
Arrays:(Map, Filter, Reduce)
Metodos para iterarmos entre os valores de arrays
1-retorna uma array nova
2-definimos no metodo uma função de callback
3-uma função sem retorno, retorna nada (undefined) e undefined é um valor false

FILTER
1-retorna ou filtra os dados desejados
MAP
2-retorna ou inclue nos elementos do array
REDUCE
3-retorna sempre um valor unico

uso:
1-uso de arrays sao constantes pois tudo que vamos pegas do banco sao listas(lista de clientes, produtos, etc)
2-manipular arq com dados

*/
//definindo um array
const precos = [
    "Crédito",
    "R$ 200",
    "R$ 400",
    "Contas Pagar",
    "R$ 300",
    "R$ 400",
    "Meus dados"
];

//organizar dados por metodos de array


/*****************************************FILTER */

//Filter (filtar as strings preco)
/*
const precoFiltro = precos.filter(function(preco) {
    console.log(preco);
    console.log(preco.includes('R$'));
    //verificar se retorna true/false

    // if(preco === "R$ 400"){
    //     return true;
    // }else{
    //     return false;
    // }

    if(preco.includes("R$")){//função de string
        return true;
    }else{
        return false;
    }
});

console.log(precoFiltro); //sem retorno, é um array vazio
*/

//enxugando codigo do metdod Filter
const precoFiltro = precos.filter(preco => {
    return preco.includes('R$');
});
console.log(precoFiltro);


/*****************************************MAP */

//Map (retornar as string em formato do tipo number)
//removando R$ dos precos
/*
const precoNumeros = precoFiltro.map(function(preco) {
    console.log(preco);
    return preco.replace('R$', "");
});
*/
//transformando em numeber - tipo 1
/*
const precoNumeros = precoFiltro.map(function(preco) {
    console.log(preco);
    return +preco.replace('R$', "");
});
*/
//transformando em numeber - tipo 2
const precoNumeros = precoFiltro.map(function(preco) {
    console.log(preco);
    return Number(preco.replace('R$', ""));
});

console.log(precoNumeros); //sem retorno, é um array vazio


/*****************************************REDUCE */
const total = precoNumeros.reduce(function(acumulador, item) {
    console.log(acumulador, item);
    return acumulador + item;
});

console.log(total);