#include <stdio.h>
/*
Função: sao subprogramas para organizar codigos em partiçoes, ou seja, é uma subsolução.
Existem:
Funçoes pre-programadas: embutidas/intrinsecas/built-in functions. Ex: scanf();

Sintaxe:
<tipo> <nome_da_função> (<parametros>) {
    <bloco de comando>
    return <informação>;
}
*/

float maior(float num1, float num2){
    if(num1 > num2)
        return num1;
    else
        return num2;
}

int main(){
    float x,y,m;

    printf("Digite um numero: ");
    scanf("%f", &x);
    printf("Digite outro numero: ");
    scanf("%f", &y);

    m = maior(x,y);

    printf("O maior numero digitedo foi: %.2f", m);

    return 0;
}