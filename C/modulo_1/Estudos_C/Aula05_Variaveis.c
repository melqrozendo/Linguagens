/*
Variáveis - solicita um espaço de memoria quando declarada
Regras de nomeclatura
<tipo> <nome>;

Tipos de dados:
int
float
double
char

Atribuição: tribui valor a variavel declarada
<variavel> =  <informação>

Constantes: não permite que o conteudo do valor seja alterado ao longo do codigo;
#define <nome> <valor>
*/
#include <stdio.h>

#define texto "Entrada e  saida de dados."

int main (){
	printf("%s\n", texto);
	
	int idade = 0;
	float altura = 0.0;
	char nome[50] = "";
	
	printf("Digite a idade: \n");
	scanf("%d", &idade);
	
	printf("Digite a altura: \n");
	scanf("%f", &altura);
	
	printf("Digite o nome: \n");
	scanf("%s", &nome);
	
	printf("Dados informados:\n");
	printf("Idade: %d. \n", idade);
	printf("Altura: %.2f. \n", altura);
	printf("Nome: %s. \n", nome);
}
