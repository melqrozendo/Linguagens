// Exemplo de pilha: convertendo de decimal para binario
function dec2Bin(decNumber) {
    let restStack = [], rest, binaryString = '';

    while(decNumber > 0) {
        // verifica se o resto é 0 ou 1, e o bit na posição pode ser 0 ou 1
        // o Math.floor: garante que o resultado seja arredondado para baixo
        rest = Math.floor(decNumber % 2);
        // adiciona o resto a pilha
        restStack.push(rest);
        // atribui o numero dividido por 2
         decNumber = Math.floor(decNumber / 2);
        console.log(decNumber)

    }

    while(restStack.length > 0) {
        // Incrementar o que esta sendo retornado e removido pelo pop(), que é o ultimo elemento da pilha
        binaryString += restStack.pop().toString()
        console.log(binaryString)
    }


    return binaryString;
}

console.log(dec2Bin(25));