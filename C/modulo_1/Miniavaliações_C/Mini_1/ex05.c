#include <stdio.h>
#define SALARIO 1200.00

int main(){
    
    float tx, taxa, aumento, novo_Sal;

    printf("Digite o valor da Taxa: ");
    scanf("%f", &tx);

    taxa = tx/100;

    aumento = SALARIO * taxa;

    novo_Sal = SALARIO + aumento;

    printf("Valor total do Salario minimo: R$%.2f depois do aumento de %.2f", novo_Sal, taxa);

    return 0;
}