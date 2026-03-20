#include <stdio.h>

int main()
{
    int valor;
    
    printf("------------MENU----------\n");
    printf("[1] Cadastrar\n");
    printf("[2] Cadastrar\n");
    printf("[3] Cadastrar\n");
    printf("[4] Cadastrar\n");
    printf("[5] Cadastrar\n");
    printf("---------------------------\n");
    
    printf("Digite uma opcao do MENU:");
    scanf("%d", &valor);
    
    switch(valor){
        case 1:
            printf("Voce escolheu a 1 opcao\n");
            break;
        case 2:
            printf("Voce escolheu a 2 opcao\n");
            break;
        case 3:
            printf("Voce escolheu a 3 opcao\n");
            break;
        case 4:
            printf("Voce escolheu a 4 opcao\n");
            break;
        case 5:
            printf("Voce escolheu a 5 opcao\n");
            break;
        default:
            printf("[ERRO]\n");
            break;
    }

    return 0;
}

