#include <stdio.h>
/*
Computação é feita em camadas
Exemplo do windows que tem os codigos e a interface grafica

Arquivos: .c e .h

Fanlando um pouco da função main()
*paramentros da função main():
int argc = conta os argumentos dentro da main digitados na linha de comando do prompt;
char *argv[] = guarda todo o conteudo digitado na linha de comando do prompt;
Sintaxe:
int main(int argc, char *argv[]){
    <blocos de comandos>
}

*/
int main(int argc, char *argv[]){
    //printf("Banana!"); 

    //imprimindo argumentos c e v
    int i;

    if(argc > 1){
        printf("Foram inseridos %d argumentos: ", i);
        for(i=0; i<argc; i++){
            printf("%s\n", argv[i]);
        }
    }else{
            printf("Nao foram inseridos dados no programa.\n");
        }
}