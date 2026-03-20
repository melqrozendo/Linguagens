#include <stdio.h>
/*
String: é um vetor de char
a variavel simples char, consegue armazenar 8 bits na memoria

Sintaxe: 
\0 -> encerra o texto

sintaxe geral:
uso do scanf("%s", nome);

sintaxe especifica: (corrigir o espaço)
uso do scanf("%<tam.-1>[^\n]s", nome);
a definição do tam-1 é que na ultima posição da string teremos um \n para encerrar.
*/
void stringTipo1();
void stringTipo2();

int main(){

    stringTipo1();
    stringTipo2();

    return 0;
}

void stringTipo1(){
    char a[10];
    //armazena dados na string ate o \0
    printf("Digite seu nome completo: ");
    scanf("%s", a);
    fflush(stdin);//limpar buffer(lixo) do teclado

    printf("Resultado: %s\n", a);

    return;
}

void stringTipo2(){
    char b[10];
    //armazena dados na string com fatorlimitante ate o \n(puolar linha)
    printf("Digite seu nome completo: ");
    scanf("%9[^\n]s", b);
    fflush(stdin);//limpar buffer(lixo) do teclado

    printf("Resultado: %s\n", b);

    return;
}