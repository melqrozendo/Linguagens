#include <stdio.h>

int main(){
	int sinal = 1;
	float soma = 1;
	int cont = 1;
	
	while(cont <=10){
		soma = soma + (1/pow(2,cont)*sinal);
		printf("%d: soma = %.2f \n", cont, soma);
		cont = cont + 1;
		sinal = sinal * (-1);
		//printf("%d : soma = %.2f \n", cont, soma);
	}
	//printf("soma = %.2f", soma);
}
