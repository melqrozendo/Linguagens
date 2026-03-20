#include <stdio.h>
/*
Escopo de variavel: local x global
Sintaxe de um prototipo de função:
<tipo> <nome_da_funcao> (<parametros>);
*/
void imprima();

int main(){
    imprima();
}

void imprima(){
    printf("Hello mundo!");
    return;
}