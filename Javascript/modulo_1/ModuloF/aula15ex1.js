//declarar variavel composta (inicia com índice 0)
/*
Vetor/Array (ou variavel composta) é uma variavel que tem varios elementos,
cada elemento é composto pelo seu valor e pela chave de identificação */

/*
let num = [5,8,4]
num[3]=6        : acrescentar mais um espaço no vetor
num.push(7)     : metodo que acrescentar valores a um array
num.length      : saber o comprimento do vetor (length é um atributo)
num.sort()      : metodo que coloca os elemntos do array em ordem crescente
num.indexOf()   : metodo que procura valores no array e retornar a posição do elemento
*/
let auto = [5, 8, 4]
auto[3] = 6
auto.push(9)
auto.sort()
console.log(auto)
console.log(auto.length)
console.log(`valor é ${auto}`)
console.log(`o segundo valor recebido é ${auto[1]}`)

