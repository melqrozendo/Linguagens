#include <stdio.h>
#define FUN 0.1
#define VIP 0.05

int main(){
    float valor, desconto, valor_Final;
    int opcao;

    printf("Digite o valor da compra: ");
    scanf("%f", &valor);
    printf("Digite o tipo de Cliente: ");
    scanf("%d", &opcao);

    switch (opcao)
    {
    case 1:
        puts("Cliente COMUM");
        printf("Sua compra foi de: %.2f\n", valor);
        break;
    case 2:
        puts("FUNCIONARIO");
        desconto = valor*FUN;
        valor_Final = valor - desconto;
        printf("Sua compra foi de: %.2f\n", valor_Final);
        break;
    case 3:
        puts("Cliente VIP");
        desconto = valor*VIP;
        valor_Final = valor - desconto;
        printf("Sua compra foi de: %.2f\n", valor_Final);
        break;
    default:
        puts("Opcao invalida!");
        break;
    }

    return 0;
}