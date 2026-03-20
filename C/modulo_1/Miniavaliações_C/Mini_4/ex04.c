#include <stdio.h>
/*
Os juros simples em um empréstimo são calculados pela fórmula juros = capital * taxa * dias / 365. A fórmula anterior admite que taxa seja a taxa anual de juros e, portanto, inclui a divisão por 365(dias). Desenvolva um programa em C que receba os valores de capital, taxa e dias de vários empréstimos, calcule os juros simples de cada empréstimo e os exiba, usando a fórmula anterior.
*/
int main()
{
    //declaracao de variaveis
    float capital , taxa, juros ;
    int dias;
    
    //entrada de dados e processamento
    printf("Entre com o valor do emprestimo (-1 para finalizar): ");
    scanf ("%f", &capital);
    
    while (capital != -1) 
    {

        printf("Entre com a taxa de juros: ");
        scanf ("%f", &taxa);
        printf("Entre com o periodo do emprestimo em dias: ");
        scanf ("%d", &dias);
        juros = (capital * taxa * dias) / 365;
        printf ("O valor dos juros eh: $%.2f\n", juros);
        printf ("\n");
        printf("Entre com o valor do emprestimo (-1 para finalizar): ");
        scanf ("%f", &capital);
    } 

    return 0;
}

