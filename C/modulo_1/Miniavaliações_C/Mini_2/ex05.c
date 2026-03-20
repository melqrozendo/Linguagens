#include <stdio.h>

int main(){
    int i, maior = 0, menor = 0;
    int num[5];

    for(i=0; i<5; i++){
        printf("Digite o %do numero: ", i);
        scanf("%d", &num[i]);
    }

    for(i=0; i<5; i++){
        if(num[i]<menor){
            menor = num[i];
        }
        if(num[i]>maior){
            maior = num[i];
        }
    }
    printf("O numero %d e MENOR\n", menor);
    printf("O numero %d e MAIOR\n", maior);

    return 0;
}