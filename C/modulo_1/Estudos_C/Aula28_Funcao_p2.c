#include <stdio.h>
/*
Entendendo parametros em Funções:
***Sintaxe para struct:
<tipo> <funcao>(<tipo_struct> <parametro>){
    <bloco de comando>
    return;
}

***Sintaxe para vetores/matrizes:
****VETORES*****
Exemplo 1:
<tipo> <funcao>(int vet[], int n){
    <bloco de comando>
    return;
}
Exemplo 2:
<tipo> <funcao>(int vet[n]){
    <bloco de comando>
    return;
}
Exemplo 3:
<tipo> <funcao>(int *vet, int n){
    <bloco de comando>
    return;
}
****MATRIZES*****
Exemplo 1:
<tipo> <funcao>(int mat[][3], int n){
    <bloco de comando>
    return;
}
Exemplo 2:
<tipo> <funcao>(int mat[3][3]){
    <bloco de comando>
    return;
}

*/
void imprime1(int vet[], int n){
    int i;
    for(i=0; i<n; i++){
        printf("%d", vet[i]);
    }
}

void imprime2(int vet[5]){
    int i;
    //navegar pelo vetor
    for(i=0; i<5; i++){
        printf("%d", vet[i]);
    }
}

void imprime3(int *vet, int n){
    int i;
    //navegar pelo vetor
    for(i=0; i<n; i++){
        printf("%d", vet[i]);
    }
}

void imprime4(int mat[][3], int n){
    int i, j;
    for(i=0; i<n; i++){
        for(j=0; j<3; j++){
            printf("%d", mat[i][j]);
        }
        printf("\n");
    }
}

int main(){
    int vet[5] = {1,2,3,4,5};

    puts("Primeiro imprime: ");
    imprime1(vet,5);//chamada a função 1

    puts("\nSegundo imprime: ");
    imprime2(vet);//chamada a função 2

    puts("\nTerceiro imprime: ");
    imprime3(vet, 5);//chamada a função 3

    int mat[3][3] = {{1,2,3},{4,5,6},{7,8,9}};

    puts("\nQuarto imprime: ");
    imprime4(mat, 3);//chamada a função 4

}