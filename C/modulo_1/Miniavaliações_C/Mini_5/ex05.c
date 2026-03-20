#include <stdio.h>
/*Calcular fatorial*/
int main(){
    int num, i, fatorial = 1;

    printf("Digite um numero inteiro: ");
    scanf("%d", &num);

    if(num > 0){
        printf("%d! = ", num);
        for(i=num; i>=1;i--){
            fatorial = fatorial * i;
            printf("%d * ", i);
        }
    }
    printf("\n%d\n", fatorial);

    return 0;
}