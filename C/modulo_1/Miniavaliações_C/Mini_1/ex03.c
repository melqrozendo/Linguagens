#include <stdio.h>
#define PI 3.14

int main(){

    float raio, comp;

    printf("Digite o valor do raio: ");
    scanf("%f", &raio);

    comp = (2*raio*PI);

    printf("Comprimento do raio: %.2f", comp);

    return 0;
}