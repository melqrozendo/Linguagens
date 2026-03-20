#include <stdio.h>

/*
ARRAY
*/

int main(){
	int i;
	int valor[5];
	
	for(i=0; i<5; i++){
		
		printf("Digite o valor %d: ", i);
		scanf("%d", &valor[i]);
	}
	puts("\nValores recebidos: ");
	for(i=0;i<5; i++){
		printf("%d ", valor[i]);//exibir os valores de entrada
	}
}

/*
Passagem por parametro:
 1- por valor = copia
 2- por referencia = originial
*/
