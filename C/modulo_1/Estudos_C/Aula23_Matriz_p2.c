#include <stdio.h>

int main(){
    int i = 0, j = 0;
    int mat[3][3];

    for(i=0; i<3; i++){
        for(j=0; j<3;j++){
            printf("Digite um valor: ");
            scanf("%d", &mat[i][j]);
        }
        printf("\n");
    }

    printf("Imprimindo Matriz:\n");
    for(i=0; i<3; i++){
        for(j=0; j<3;j++){
            printf("%d ", mat[i][j]);
        }
        printf("\n");
    }
    
}