#include <stdio.h>

/*
ARRAY
*/

int main(){
	int i;
	int valor[10];
	
	for(i=0; i<10; i++){
		
		printf("Digite o valor %d: ", i);
		scanf("%d", &valor[i]);
	}
}

/*
Passagem por parametro:
 1- por valor = copia
 2- por referencia = originial
*/
