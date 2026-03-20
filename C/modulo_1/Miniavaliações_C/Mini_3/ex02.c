#include <stdio.h>

int main(){
    int mes;

    printf("Digite o numero do mes: ");
    scanf("%d", &mes);

    switch (mes)
    {
    case 1:
        puts("JANEIRO");
        break;
    case 2:
        puts("FEVEREIRO");
        break;
    case 3:
        puts("MARÇO");
        break;
    case 4:
        puts("ABRIL");
        break;
    case 5:
        puts("MAIO");
        break;
    case 6:
        puts("JUNHO");
        break;
    case 7:
        puts("JULHO");
        break;
    case 8:
        puts("AGOSTO");
        break;
    case 9:
        puts("SETEMBRO");
        break;
    case 10:
        puts("OUTUBRO");
        break;
    case 11:
        puts("NOVEMBRO");
        break;
    case 12:
        puts("DEZEMBRO");
        break;
    default:
        puts("opcao invalida!");
        break;
    }

    return 0;
}