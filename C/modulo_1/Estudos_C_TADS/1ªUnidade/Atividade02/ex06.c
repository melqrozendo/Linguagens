#include <stdio.h>
#include <math.h>
/*
35. Sejam a e b os catetos de um triângulo, onde a hipotenusa é obtida pela equação:

hipotenusa = v (a 2 + b 2 ). 

Faça um programa que receba os valores de a e b e calcule o valor da hipotenusa através da equação. Imprima o resultado dessa operação.
*/
int main(){
	
	float a,b,h;
	
	printf("------------VAMOS CALCULAR A HIPOTENUSA-------------- \n");
	printf("Digite o valor do cateto a:");
	scanf("%f", &a);
	printf("Digite o valor do cateto b:");
	scanf("%f", &b);
	
	h = sqrt(pow(a,2) + pow(b,2));
	
	printf("O valor da Hipotenusa foi: %.2f", h);
}
