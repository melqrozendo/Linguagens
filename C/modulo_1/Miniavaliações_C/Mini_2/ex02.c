#include <stdio.h>
#include <math.h>

int main(){
    float nota;

    printf("Digite a nota do aluno: ");
    scanf("%f", &nota);
    
    if(nota > 0 && nota <10){
        if(nota<7){
            printf("Aluno REPROVADO!");
        }else if(nota >=7){
            printf("Aluno APROVADO!");
        }
    }

    return 0;
}