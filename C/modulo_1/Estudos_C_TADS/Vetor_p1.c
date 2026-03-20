#include <stdio.h>
/*Vetor*/
int main()
{
    int c;
    
    scanf("%d", &c);
    int vetor[c];
    
    for(int i=0;i<c; i++){
        scanf("%d", &vetor[i]);
    }
    
    for(int i=0; i<c; i++){
        if(vetor[i] > 8000){
            printf("Mais de 8000!\n");
        }else{
            printf("Inseto!\n");
        }
    }
    
    System("pause");
    return 0;
}
