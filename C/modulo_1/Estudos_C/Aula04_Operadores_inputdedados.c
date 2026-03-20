/*
Operaçoes com entrada de dados

sintaxe de entrada de dados:
regra:
	scanf("%<.formt>", &<variaveis>);
	
obs: precisa declara variavel, reserva espaço na memoria;

Dados do tipo:
inteiro = %d
float = %f
caractere = %s
*/
#include <stdio.h>

int main(){
	int idade = 0; //declarando variavel
	
	printf("Valor inicial da idade: %d. \n", idade);
	
	printf("Digite uma idade: \n");
	scanf("%d", &idade);
	
	printf("Idade informada: %d.\n", idade);
}
