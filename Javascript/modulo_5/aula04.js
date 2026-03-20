console.log('Adicionando elementos no array:');

let numbers = [1,2,3,4,5,6,7,8,9,10];

console.log('Numeros:' + numbers)

// metodos nativos de Inserao de dados no final
numbers.push(11);
console.log(numbers)
// metodo nativo de Insersao de dados no inicio
numbers.unshift(0);
console.log(numbers)
// metodo nativo de Remocao de dados do fim
numbers.pop();
console.log(numbers);
// metodo nativo de Remocao de dados do Inicio
numbers.shift();
console.log(numbers);
// metodo nativo para Insersao de dados de uma posicao especifica
numbers.splice(3, 0, 21, 24, 25);
console.log(numbers);
// metodo nativo para Remocao de dados de uma posicao especifica
numbers.splice(3, 3);
console.log(numbers); 
