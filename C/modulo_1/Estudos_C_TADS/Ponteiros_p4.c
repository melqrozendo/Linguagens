#include <stdio.h>
/*
em Ponteiros pode-se ter: 
Um ponteiro apontando para outro ponteiro:
1-Assim teremos dois niveis de indireção
Veja que um poteiro criado utiliza um espaço na memoria;
Então:
uma variavel x = 10, pode ser armazenada no ponteiro do tipo int (xPTR) e esse ponteiro pode ser armazenado no ponteiro do tipo int (yPTR).
*/

int main(){
    //Declarações:
    int *xPTR; //declarando um ponteiro do tipo inteiro
    int **yPTR; //declarando um ponteiro de ponteiro do tipo inteiro
    int x = 10; //declarando uma varianvel do tipo inteiro com valor 10

    //Atribuições:
    xPTR = &x;//ponteiro recebe endereço de x
    yPTR = &xPTR;//ponteiro recebe o endereço do ponteiro xPTR

    //Exibir em tela:
    puts("---------------------");
    printf("x = %d\n", x);//imprime o valor de x
    printf("&x = %d\n", &x);//imprime o endereço de x
    puts("---------------------");
    printf("*xPTR = %d\n", *xPTR); //imprime o valor de x
    printf("xPTR = %p\n", xPTR); //imprime o endereço de x
    printf("&xPTR = %p\n", &xPTR); //imprime o endereço da variavel xPTR
    puts("---------------------");
    printf("**yPTR = %d\n", **yPTR); //imprimie o valor de x
    printf("*yPTR = %p\n", *yPTR); //imprime o endereço de x
    printf("yPTR = %p\n", yPTR); //imprime o endereço de xPTR
    printf("&yPTR = %p\n", &yPTR); //imprime o endereço de yPTR
    puts("---------------------");
    return 0;
}