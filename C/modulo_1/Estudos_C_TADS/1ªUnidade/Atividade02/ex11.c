#include <stdio.h>
/*
15. Usando switch, escreva um programa que leia um inteiro entre 1 e 7 e imprima o dia da semana correspondente a este numero. 
Isto é, domingo se 1, segunda-feira se 2, e assim por diante.
*/
int main(){
	
	int dia;
	printf("Digite um valor entre 1 e 7:");
	scanf("%d", &dia);
	
	switch (dia){
		case 1:
			printf("Domingo");
			break;
		case 2:
			printf("Segunda-feira");
			break;
		case 3:
			printf("Terça-feira");
			break;
		case 4:
			printf("Quarta-feira");
			break;
		case 5:
			printf("Quinta-feira");
			break;
		case 6:
			printf("Sexta-feira");
			break;
		default:
			printf("ERRO");
			break;
	}
}