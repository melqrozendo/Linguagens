#include <stdio.h>

int main(){
	float n1, n2, media;
	
	do{
		printf("Nota 1: ");
		scanf("%f", &n1);
		
		if(n1<0 || n1>10){
			printf("Erro! \n");
		}
			
	}while(n1<0 || n1>10);
	
	do{
		printf("Nota 2: ");
		scanf("%f", &n2);
		
		if(n2<0 || n2>10){
			printf("Erro! \n");
		}
			
	}while(n2<0 || n2>10);
	
	media = (n1+n2)/2;
	
	printf("Media: %.2f", media);
}
