//criando uma função de maneira recurssiva
//RECURSIVIDADE
function fatorial(n){
    if (n==1){
        return 1
    } else {
        return n * fatorial(n-1)//chama a função dentro da função
    }
}

console.log(fatorial(5))

/*
explicando codigo:
se 5! = 5x4x3x2x1
então 5! = 5x4!

assim:
n! = n x (n-1)!
1! = 1
*/
