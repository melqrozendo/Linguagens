#include <stdio.h>

/*
MATRIZ
*/
int main(){
	int i, j;
	int valor[3][3] = {1,2,3,4,5,6,7,8,9};
	
	/*
	printf("Digite o valor %d: ", i);
		scanf("%d", &valor[i]);
	*/
	
	for(i=0; i<3; i++){
		for(j=0;j<3;j++){
			
			//printf("%d ", &valor[i][j]);//chamo o endereço de memoria do elementos
			printf("%d ", valor[i][j]);//chamo os elementos
		}	
		printf("\n");
	}
}
