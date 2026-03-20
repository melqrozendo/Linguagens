/*LER ARQUIVO:*/
#include <stdio.h>
#include <stdlib.h>
#include <string.h>

#define TAM 4

typedef struct _item
{
    int id;
    char nome[30];
    char categoria[30];
} Item;

int main() {
    Item itens[10];
    FILE *f;

    f = fopen("dados.dat", "rb");
    if (f == NULL) {
        printf("Erro abrindo o arquivo!");
    } else {
        //Arquivo aberto com sucesso!
        fread(itens, sizeof(Item), TAM, f);
        fclose(f);
        for (int i = 0; i < TAM; i+=1) {
            printf("%d %s %s \n", itens[i].id, itens[i].nome, itens[i].categoria);
        }
    }


    return 0;
}