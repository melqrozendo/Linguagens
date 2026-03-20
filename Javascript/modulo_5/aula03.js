var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

for(var i=0;i<days.length; i++) {
    console.log(days[i]);
}

// Estrutura de dados para resolver fibonacci - a soma dos dois numeros anteriores é igual o posterior
var fibonacci = [];

fibonacci[0] = 0;
fibonacci[1] = 1;
fibonacci[2] = 1;

for(let i=3;i<20; i++){
    fibonacci[i] = fibonacci[i-1] + fibonacci[i-2];
}

console.log(fibonacci);
