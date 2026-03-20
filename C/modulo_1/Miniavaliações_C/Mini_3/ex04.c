#include <stdio.h>

int main(){
    int opcao;
    float valor, desconto, valor_Final;
    float VISTA = 0.1;


    printf("Digite o valor da Compra: ");
    scanf("%f", &valor);
    puts("[1] - a vista");
    puts("[2] - a prazo");
    printf("Digite a forma que deseja pagar:");
    scanf("%d", &opcao);

    switch (opcao)
    {
    case 1:
        desconto = valor*VISTA;
        valor_Final = valor - desconto;
        printf("Valor final da Compra a VISTA: %.2f\n", valor_Final);
        break;
    case 2:
        printf("Valor final da Compra a PRAZO: %.2f\n", valor);
        break;
    default:
        puts("opcao invalida!");
        break;
    }

    return 0;
}