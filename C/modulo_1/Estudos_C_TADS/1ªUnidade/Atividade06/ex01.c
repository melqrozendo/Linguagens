#include <stdio.h>


int main(){
	int n1, n2, soma;
	
	printf("Digite n1: ");
	scanf("%d", &n1);
	printf("Digite n2: ");
	scanf("%d", &n2);
	soma = somavalores(n1, n2);
	printf("Soma: %d", soma);
	
	return 0;
	
}

//função
int somavalores(int p1, int p2){
	return p1+p2;
}

