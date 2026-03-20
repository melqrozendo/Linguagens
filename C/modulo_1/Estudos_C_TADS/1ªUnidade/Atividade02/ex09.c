#include <stdio.h>
/*
2. Leia um número fornecido pelo usuário. Se esse número for positivo, calcule a raiz quadrada do número. 
Se o número for negativo, mostre uma mensagem dizendo que o número é inválido.
*/
int main(){
	float n1, valor;
	
	printf("Digite um numero:");
	scanf("%f", &n1);
	
	if(n1 > 0){
		valor = sqrt(n1);
		printf("O numero foi positivo e sua raiz quadrada foi: %.2f", valor);
	}else {
		printf("Numero [INVALIDO]");
	}
	
	return 0;
}