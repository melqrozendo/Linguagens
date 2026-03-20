#include <stdio.h>
/*
37. Faça um programa que leia o valor de um produto e imprima o valor com desconto, tendo em vista que o desconto foi de 12%.
*/
int main(){
	float preco, desc, novopreco;
	
	printf("Digite o valor do produto: ");
	scanf("%f", &preco);
	
	desc = (preco * 0.12);
	
	novopreco = preco - desc;
	
	printf("O valor do produto com desconto foi: R$ %.2f", novopreco);
	
	return 0;
}