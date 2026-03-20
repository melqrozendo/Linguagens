#include <stdio.h>

int main(){
	int i,j,x;
	
	printf("Digite o lado: ");
	scanf("%d", &x);
	
	for(i=0; i<x; i++){
		for(j=0; j<x; j++){
		printf("* ");
	}
	printf("\n");
	}
}