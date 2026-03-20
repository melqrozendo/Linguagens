#include <stdio.h>
/*vetor*/
int main()
{
    int c,i;
    
    scanf("%d", &c);
    int vetor[c];
    
    for(i=0;i<c; i++){
        scanf("%d", &vetor[i]);
    }
    
    for(i=0; i<c; i++){
        if(vetor[i] > 8000){
            printf("Mais de 8000!\n");
        }else{
            printf("Inseto!\n");
        }
    }
    
    system("pause");
    return 0;
}