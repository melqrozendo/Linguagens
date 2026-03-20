#include <stdio.h>
/*
Passagem de paramentro por:
1- valor = copia
2-referencia = original
Abaixo vamos realizar a passagem de um ponteiro por referencia
*/

//criando uma função que recebe um ponteiro para um inteiro
void cube(int *nP){
    //Alterar o valor da variavel referenciada por nP
    *nP = *nP * *nP * *nP;//o valor de n esta sendo multiplicado por 3 vezes
}

int main(){
    int n = 5;
    printf("n = %d\n", n);//imprime valor de n

    cube(&n);//passando o endereço da variavel n

    printf("n = %d\n", n);//imprime o valor de n apos retorna da função cube
}