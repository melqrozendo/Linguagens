#include <stdio.h>
#include <string.h>
#include <locale.h>
/*
Structs(registros): criação de um novo tipo de dados que recebe varios tipos de dados

Sintaxe de definição: (criando um tipo de dado)
struct <novo_tipo>{
    <tipo1> <campo1>;
    <tipo2> <campo2>;
}
**************
Comando typedef: renomeia um identificador
Sintaxe:
typedef <tipo> <novo_nome>;

**************

Sintaxe de declaração: (declarar o tipo de dado no codigo)
struct <novo_tipo> <nome_variavel>;
ou
Depois do typedef:
<novo_nome> <nome_variavel>;

**************
Como Acessar os campos do structs
Sintaxe: 
<variavel>.<campo>;
**************

Obs: Vetor de Structs(registros)
*/
#define TAM 50

struct tipo_pessoa{
    int idade;
    float peso;
    char nome[TAM];
};
//renomeei o struct para o nome 'pessoa'
typedef struct tipo_pessoa pessoa;

int main(){
    setlocale(LC_ALL, "Portuguese");

    //criando uma variavel 'dados' do tipo pessoa
    //e inicializando
    pessoa dados = {0, 0.0, "Teste"};

    printf("Inicio: \n");
    printf("Idade: %d\n", dados.idade);
    printf("Peso: %.2f\n", dados.peso);
    printf("Nome: %s\n", dados.nome);

    //*********Atribuindo valores aos campos************* 
    dados.idade = 10;
    dados.peso = 34.56;
    strcpy(dados.nome, "Texto");//função de atribuição de string

    printf("\nAlterado: \n");
    printf("Idade: %d\n", dados.idade);
    printf("Peso: %.2f\n", dados.peso);
    printf("Nome: %s\n", dados.nome);

    //********Solicitando ao usuario****************
    printf("\nInsira sua idade: ");
    scanf("%d", &dados.idade);
    printf("Insira seu peso: ");
    scanf("%f", &dados.peso);
    fflush(stdin);
    printf("Insira seu Nome: ");
    scanf("%49[^\n]s", dados.nome);

    printf("\nSolicitado: \n");
    printf("Idade: %d\n", dados.idade);
    printf("Peso: %.2f\n", dados.peso);
    printf("Nome: %s\n", dados.nome);

    return 0;
}