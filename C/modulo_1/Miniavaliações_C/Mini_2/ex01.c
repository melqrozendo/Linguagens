#include <stdio.h>
#include <math.h>

int main(){

    float imc, peso, altura;

    printf("Digite seu peso: ");
    scanf("%f", &peso);
    printf("Digite sua altura: ");
    scanf("%f", &altura);

    imc = peso/(altura*altura);

    printf("IMC foi de: %.2f", imc);

    return 0;

}