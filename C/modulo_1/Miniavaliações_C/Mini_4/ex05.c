#include <stdio.h>
/*
montar quadrado lendo lado de quadrado
*/
int main(){
	int i, j, n;
	char valor[n][n];
	
	printf("Digite o valor do lado do quadrado: ");
	scanf("%d", &n);

    for(i=0; i<n; i++){
        for(j=0; j<n; j++){
            printf("*", valor[i][j]);
        }
        printf("\n");
    }
    return 0;
}