#include <stdio.h>

int main(){
    //declarar uma matiz de 3 dimensoes - casa, rua, quadra
    int i, j, k;
    int cronograma[1][3][5];

    for(i=1; i<=1; i++){
        for(j=1; j<=3; j++){
            for(k=1; k<=5; k++){
                printf("Digite o numero da %do casa da %do rua da %do quarteirao: ", k,j,i);
                scanf("%d", &cronograma[i][j][k]);
            }
            printf("\n");
        }
        printf("\n");
    }

    for(i=1; i<=1; i++){
        for(j=1; j<=3; j++){
            for(k=1; k<=5; k++){
                printf("Codigos de Casa: %d\n", cronograma[i][j][k]);
            }
            printf("\n");
        }
        printf("\n");
    }

    return 0;
}