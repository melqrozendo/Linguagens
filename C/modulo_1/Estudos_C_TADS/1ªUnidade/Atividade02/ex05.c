#include <stdio.h>
/*
6. Leia uma temperatura em graus Celsius e apresente-a convertida em graus Fahrenheit.
A fórmula de conversão é: F = C * (9.0/5.0)+32.0, sendo F a temperatura em Fahrenheit e C a temperatura em Celsius.
*/
int main(){
	//converter celsius para fahrenheit
	float temp, fahr;
	
	printf("Insira a temperatura em Celsius:");
	scanf("%f", &temp);
	
	//°F = (°C x 1.8) + 32
	fahr = (temp * 1.8) + 32;
	
	printf("A temperatura em Fanrenheit foi: %.2f F", fahr);
	
	return 0;
	
}