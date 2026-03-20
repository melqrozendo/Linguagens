#include <stdio.h>

int main(){
	int n = 0;
	int linha =1;
	int coluna = 0;
	int valor = 1;
	
	scanf("%d", &n);
	
	while(linha<=n){
		for(coluna = 1; coluna<=linha; coluna++){
			printf("%d ", valor);
			valor = valor + 1;
		}
		printf("\n");
		linha = linha + 1;
	}
	return 0;
}