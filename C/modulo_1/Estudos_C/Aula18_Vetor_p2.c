#include <stdio.h>
/*
automatizar codigo com vetores
uso de metodo de clean code
*/

void vetor();

int main(){
    int v[5] = {2,4,6,8,10};
    int i;
    float s = 0;

    //criando laço de repetição
    for(i=0; i<5; i++){
        s+= v[i]; //vai pecorrer o array e atribuir a s
    }
    printf("\nResultado: %.2f\n", s/5);

    vetor();

    return 0;
}
/*Na linguagem C ela não impede o programador a invadir memoria (pois ela é permissiva), assim mesmo adicionando ao vetor um tamanho n, o vetor tera indice ate n-1*/

//criando uma função para entrada e saida de dados
void vetor(){
    int a[3];
    int x;
    //entrada de dados com vetores
    for(x=0; x<3; x++){
        printf("Digite um numero: ");
        scanf("%d", &a[x]);
    }
    //saida de dados com vetores
    printf("Dados inseridos: \n");
    for(x=0; x<3; x++){
        printf("%d ", a[x]);
    }

    return;
}