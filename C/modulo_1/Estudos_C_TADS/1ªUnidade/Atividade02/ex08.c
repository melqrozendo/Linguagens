#include <stdio.h>
/*1. Faça um programa que receba dois números e mostre qual deles é o maior.*/

int main(){
	
	float n1, n2;
	
	printf("Digite um valor:");
	scanf("%f", &n1);
	printf("Digite outro valor:");
	scanf("%f", &n2);
	
	if(n1>n2) {
		printf("O valor de n1 = %.2f foi MAIOR", n1);
	}else {
		printf("O valor de n2 = %.2f foi MAIOR", n2);
	}
	
	return 0;
}