#include <stdio.h>
/*
Lembrar! String é um array de char

Funções de entrada de dados:
gets(<string>);
*limitação: estouro do limite do vetor

fgets(<string>, <tam>, stdin);
*último caracter sempre fica reservado ao '\0'(Enter)
*entrada padrão: stdin
*le-se: (stdin)pegar uma entrada de dado padrão do teclado, (tam) limitando ao tamanho declarado na string e (string) reservar na memoria onde foi criado o vetor de char.

Funções de saída de dados:
puts(<string>);
*imprime uma string diretamente na tela
*não admite variaveis de outros tipos apenas string

****Observe!*****

fflush(stdin): importante de ser sempre chamado depois de uma entrada de dados do tipo gets()/fgets()/scanf()/ para que não salve lixo de memoria dado pelo buffer.

*/

void funcaoEntrada1();
void funcaoEntrada2();
void funcaoSaida();

int main() {
    char s[10];

    funcaoEntrada1(s);
    funcaoSaida(s);
    funcaoEntrada2(s);

    return 0;
}
//passagem por referencia = original
void funcaoEntrada1(char *s){
    printf("Digite algo (leitura pelo gets): \n");
    gets(s);//nao controla limite de entrada de dados
    fflush(stdin);

    return;
}

void funcaoSaida(char *s){
    
    puts("Resultado: ");
    puts(s);
    puts("");

    return;
}

void funcaoEntrada2(char *s){

    printf("Digite algo (leitura pelo fgets): \n");
    fgets(s, 10, stdin);
    fflush(stdin);

    puts("Resultado: ");
    puts(s);

    return;
}