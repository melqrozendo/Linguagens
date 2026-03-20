#include <stdio.h>

/*
1) Criar uma função que receba um vetor de caracteres (palavra, vetor de char) e retorne a quantidade de caracteres (int)? 
*/
int contadorCaracter(char palavra[]){
    int contador = 0;//inicia o contador com 0
    char controle = palavra[0];
    while(controle != '\0'){
        contador++;
        controle=palavra[contador];
    }
    return contador;
}

int main(){

    // getchar();
    // printf("Digite uma palavra: ");
    // scanf("%19[^\n]", p);
    char *palavra = "melquisedeque";

    printf("A palavra %s tem %d caracteres", palavra, contadorCaracter(palavra));
    return 0;
}