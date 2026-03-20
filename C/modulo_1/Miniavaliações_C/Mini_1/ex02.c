#include <stdio.h>
#define KELVIN 273.15

int main(){
    float temp, conv_Kelvin;

    printf("Digite a Temperatura atual em Celsius: ");
    scanf("%f", &temp);

    conv_Kelvin = temp+KELVIN;

    printf("A temperatura de %.2fC foi de %.2fK", temp, conv_Kelvin);

    return 0;
}