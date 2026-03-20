#include <stdio.h>
/*
Escreva um programa em linguagem C que solicite ao usuário seu nome e idade, 
e em seguida exiba essas informações na tela.
*/
int main(){
	char nome[50];
	int idade;
	
	printf("Digite seu nome: ");
	scanf("%s", &nome);
	printf("Digite sua idade: ");
	scanf("%d", &idade);
	
	printf("O nome do usuario foi: %s e idade foi: %d anos ", nome, idade);
	
}
