#include <stdio.h>

int main(){
	float n1, n2;
	
	printf("Nota 1: ");
	scanf("%f", &n1);
	
	if(n1<0 || n1>10){
		printf("Valor Invalido");
	}else{
		printf("Nota 2: ");
		scanf("%f", &n2);
		if(n2<0 || n2>10){
			printf("Valor Invalido");
		}else{
			printf("Media: %.2f", (n1+n2)/2);
		}
	}
}