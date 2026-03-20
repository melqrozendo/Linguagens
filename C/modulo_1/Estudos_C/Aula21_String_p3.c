#include <stdio.h>
#include <string.h>
#include <locale.h>
/*
#funções da biblioteca string.h para manipular string:
strcpy(<destino>, <origem>);
*Resolve o problema de fazer string = algo, dado a que a string ja foi declarada. Então serve para fazer uma atribuição a uma string.

strcat(<destino>, <origem>);
*concatena duas string declaradas em dois scanf diferentes. Ex: em um scanf declarei um nome e no outro scanf o sobrenome.

strlen(<string>);
*mostra o tamanho/comprimento da string

strcmp(<string1>, <string2>);
*comapara se uma string é igual ou diferente
se for igual = 0
se for diferente = 1

#função da biblioteca locale.h
setlocale(LC_ALL, "Portuguese");
*permite que use acentos

*/

void funcaoStringTipo1();//strcpy
void funcaoStringTipo2();//strcat
void funcaoStringTipo3();//strlen
void funcaoStringTipo4();//strcmp

#define N 20

int main(){
    setlocale(LC_ALL, "Portuguese");

    //funcaoStringTipo1();
    //funcaoStringTipo2();
    //funcaoStringTipo3();
    funcaoStringTipo4();
    
    return 0;
}

void funcaoStringTipo1(){
    char origem[N] = {"Ola, mundo!"};
    char destino[N];
    //fflush(stdin);//limpando buffer

    printf("Antes do strcpy: \n");
    puts(origem);
    puts(destino);

    strcpy(destino, origem);//função de atribuição de string

    printf("Depois do strcpy: \n");
    puts(origem);
    puts(destino);

    return;
}

void funcaoStringTipo2(){
    char s1[N] = {"Logica de"};
    char s2[N] = {" Programacao!"};

    printf("Antes do strcat: \n");
    printf("str1: %s\n", s1);
    printf("str2: %s\n", s2);

    strcat(s1,s2);//função de concatenação de string

    printf("Depois do strcat:\n");
    puts(s1);

    return;
}

void funcaoStringTipo3(){
    char s[N];
    int i;

    printf("Digite um texto: \n");
    gets(s);//funcao de entrada de dados
    fflush(stdin);

    i = strlen(s);//funcao que conta a qtd de caracter do s e atribiu a i (tamanho)

    printf("\nTamanho do texto: %d\n\n", i);

    printf("Impressao de posicao a posicao: \n");
    for(i=0; i<strlen(s); i++){
        printf("%c", s[i]);
    }

    return;
}

void funcaoStringTipo4(){
    char hardText[N] = {"bootg"};
    char senha_usr[N];
    int ok;

    printf("Digite sua Senha:\n");
    gets(senha_usr);

    ok = strcmp(hardText, senha_usr);//funcao de comparação de string sendo atribuida a ok
    if(ok == 0){
        printf("Senha correta!\n");
    }else{
        printf("Senha incorreta!\n");
    }

    return;
}
