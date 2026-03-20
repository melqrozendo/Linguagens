#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <locale.h>

#define TAM 3
//criar a struct
struct tipo_pessoa{
    char nome[50];
    int idade;
    float peso;
};
//renomear a struct
typedef struct tipo_pessoa pessoa;

int main(){
    setlocale(LC_ALL, "Portuguese");

    //criando um vetor do tipo struct
    /*
    Para cada posição do vetor lista 
    teremos 3 campos do struct
    */
    pessoa lista[TAM];
    int i;

    for(i=0; i<TAM; i++){
        printf("Digite o (%do) Dados: \n", i+1);

        puts("Nome: ");
        scanf("%50[^\n]s", &lista[i].nome);
        fflush(stdin);

        puts("Idade: ");
        scanf("%d", &lista[i].idade);
        fflush(stdin);

        puts("Peso: ");
        scanf("%f", &lista[i].peso);
        fflush(stdin);
    }
    system("cls");//clear tela
    puts(" ");
    puts("**********Seus dados:*********** \n");
    for(i=0; i<TAM; i++){
        printf("-----------Pessoa %d------------\n", i+1);
        printf("\tNome: %s\n", lista[i].nome);
        printf("\tIdade: %d\n", lista[i].idade);
        printf("\tPeso: %.2f\n", lista[i].peso);
    }
    printf("------------------------------------");

    return 0;
}