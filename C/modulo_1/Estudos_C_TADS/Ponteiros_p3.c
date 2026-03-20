#include <stdio.h>

int main(){
    int x = 10;
    int *xPTR; //criando ponteiro do tipo inteiro

    xPTR = &x; //& é o operador de endereço

    printf("x = %d\n", x);//imprime o conteudo da variavel
    printf("&x = %d\n", &x);//imprime o endereço da variavel x
    printf("*xPTR = %d\n", *xPTR); //imprime o valor de x
    printf("xPTR = %p\n", xPTR); //imprime o endereço de x
    printf("&xPTR = %p\n", &xPTR); //imprime o endereço da variavel xPTR
    return 0;
}

/*no compilador:
&x(endereço de x) e xPTR(endereço de x) devem ser iguais no compilador

*/