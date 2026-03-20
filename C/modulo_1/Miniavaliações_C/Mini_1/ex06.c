#include <stdio.h>

int main(){
    char letra;

    printf("Digite uma letra: ");
    scanf("%c", &letra);

    switch (letra)
    {
    case 'a':
        printf("%c", letra);
        break;
    case 'e':
        printf("%c", letra);
        break;
    case 'i':
        printf("%c", letra);
        break;
    case 'o':
        printf("%c", letra);
        break;
    case 'u':
        printf("%c", letra);
        break;
    default:
        printf("Letra invalida!");
        break;
    }
    
    return 0;
}