#include <stdio.h>
#define DOLAR 4.80

int main(){

    float valor, conv_dolar;

    printf("Digite um valor em Real: ");
    scanf("%f", &valor);

    conv_dolar = valor/DOLAR;

    printf("Valor de R$%.2f foi de U$%.2f ", valor, conv_dolar);

    return 0;
}