/*GRAVAR ARQUIVO:*/
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
    Item itens[10] = {
        {1, "Cadeira", "Móvel"},
        {2, "Mesa", "Móvel"},
        {3, "Estante", "Móvel"},
        {4, "Poltrona", "Móvel"},
    };
    FILE *f;

    f = fopen("dados.dat", "wb");
    if (f == NULL) {
        printf("Erro abrindo o arquivo!");
    } else {
        // Arquivo aberto com sucesso!
        fwrite(itens, sizeof(Item), TAM, f);
        fclose(f);
    }
    return 0;
}