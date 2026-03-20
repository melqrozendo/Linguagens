#include <stdio.h>
/*
Escreva um programa em C que solicite ao usuário dois números inteiros e realize as seguintes operações:
a) Calcule a soma dos dois números e exiba o resultado.
b) Calcule a diferença entre o primeiro e o segundo número e exiba o resultado.
c) Calcule o produto dos dois números e exiba o resultado.
d) Calcule o resto da divisão do primeiro número pelo segundo número e exiba o resultado.
*/

int main(){
	int n1, n2, soma, subt, mult, resto;
	
	printf("Digite o 1o numero inteiro: ");
	scanf("%d", &n1);
	printf("Digite o 2o numero inteiro: ");
	scanf("%d", &n2);
	
	//Resolvendo letra a:
	soma = n1 + n2;
	printf("a) A soma entre %d e %d foi %d \n", n1, n2, soma);
	
	//Resolvendo letra b:
	subt = n1 - n2;
	printf("b) A diferenca entre %d e %d foi %d \n", n1, n2, subt);
	
	//Resolvendo letra c:
	mult = n1 * n2;
	printf("c) O produto entre %d e %d foi %d \n", n1, n2, mult);
	
	//Resolvendo letra b:
	resto = n1%n2;
	printf("d) O resto da divisao entre %d e %d foi %d \n", n1, n2, resto);
}