#include <stdio.h>

int main(){
    int opcao, nasc, obt, hab, taxa_N, taxa_M;


    puts("[1] - Taxa de Natalidade");
    puts("[2] - Taxa de Obito");
    printf("Digite a opcao que deseja calcular:");
    scanf("%d", &opcao);

    switch (opcao)
    {
    case 1:
        printf("Digite o numero de criancas nascidas: ");
        scanf("%d", &nasc);
        printf("Digite o numero de habitantes: ");
        scanf("%d", &hab);
        taxa_N = (nasc * 1000)/hab;
        printf("Taxa de Natalidade: %d", taxa_N);
        break;
    case 2:
        printf("Digite o numero de obitos: ");
        scanf("%d", &obt);
        printf("Digite o numero de habitantes: ");
        scanf("%d", &hab);
        taxa_M = (obt * 1000)/hab;
        printf("Taxa de Natalidade: %d", taxa_M);
        break;
    default:
        puts("opcao invalida!");
        break;
    }

    return 0;
}