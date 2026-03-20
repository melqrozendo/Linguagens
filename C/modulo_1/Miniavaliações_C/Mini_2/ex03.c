#include <stdio.h>
#include <math.h>

int main(){
    int num;

    printf("Digite um numero: ");
    scanf("%d", &num);

    if(num%2 == 0){
        puts("O numero digitado foi PAR!");
    }else{
        puts("O numero digitado foi IMPAR!");
    }

    return 0;
}