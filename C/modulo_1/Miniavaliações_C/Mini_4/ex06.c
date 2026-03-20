#include <stdio.h>
/*
Um palíndromo é um número ou texto que é lido da mesma forma tanto da direita para a esquerda como da esquerda para a direita. Por exemplo, cada um dos inteiros seguintes, de cinco dígitos, é palíndromo: 12321,55555,45554 e 11611.Escreva um programa que leia um inteiro de cinco dígitos e determine se ele é palíndromo ou não. (Sugestão: Use os operadores divisão e resto, para separar o número em seus algarismos isolados.)
*/
int main()
{
    //declaracao de variaveis
    int numero, a1, a2, a3, a4, a5;
    
    //entrada de dados e processamento
    printf ("Entre com um inteiro de 5 digitos: ");
    scanf ("%d", &numero);
    
    a1 = numero / 10000;
    a2 = (numero - (a1 * 10000)) / 1000;
    a3 = (numero - ((a1 * 10000) + (a2 * 1000))) / 100;
    a4 = (numero - ((a1 * 10000) + (a2 * 1000) + (a3 * 100))) / 10;
    a5 = (numero - ((a1 * 10000) + (a2 * 1000) + (a3 * 100) + (a4 * 10))); 
    
    printf ("%d\n", a1);
    printf ("%d\n", a2);
    printf ("%d\n", a3);    
    printf ("%d\n", a4);
    printf ("%d\n", a5);    
    
    if ((a1 == a5) && (a2 ==  a4))
    {
        printf ("O numero %d eh palindromo", numero);
    }else
    {
        printf ("O numero %d nao eh palindromo", numero);
    }
    
    return 0;
}
