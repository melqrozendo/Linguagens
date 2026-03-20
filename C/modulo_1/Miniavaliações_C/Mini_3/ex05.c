#include <stdio.h>

int main(){
    char genero;

    puts("[M] - Masculino");
    puts("[F] - Feminino");
    printf("Digite o seu genero: ");
    scanf("%c", &genero);

    switch (genero)
    {
    case 'M':
        puts("MASCULINO");
        break;
    case 'F':
        puts("FEMININO");
        break;
    default:
        puts("Opcao invalida!");
        break;
    }

    return 0;
}