#include <stdio.h>
/*
7. Faça um programa que receba dois números e mostre o maior. 
Se por acaso, os dois números forem iguais, imprima a mensagem Números iguais.
*/

int main(){
	
	float n1, n2;
	
	printf("Digite um valor:");
	scanf("%f", &n1);
	printf("Digite outro valor:");
	scanf("%f", &n2);
	
	if(n1 > n2){
		printf("O valor de n1: %.2f foi MAIOR", n1);
	}
	if(n2 > n1){
		printf("O valor de n2: %.2f foi MAIOR", n2);
	}
	if(n1 == n2){
		printf("NUMEROS IGUAIS!");
	}
	
	return 0;
}