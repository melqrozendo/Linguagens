/*
Operadores de entrada e saída de dados:

saída de dados com printf()
Regra:
	printf("<texto>");
	
Especificadores de formato
Regra:
Digitos | Descrição
%d ou %i = Números inteiros em base decimal
%X = Números inteiros em base hexadecimal
%f = Números em ponto flutuante (com casas decimais)
%e = Números em notação cientifica (com casas decimais)
%c = Caracteres alfanumericos (texto)
%s = Sequencia de caracteres alfanumericos (texto)
.<num> = Especifica quantos dígitos serão impressos após a vírgula

Sequência de escape
Regra: 
Escape | Descrição
\a - Toca um bipe, alarme sonoro padrão do sistema
\b - Backspace
\n - quebra de linha
\t - tabulação horizontal (TAB)
\r - Retorna ao inicio da linha
\0 - caracte nulo
\v - Tabulação vertical
*/
#include <stdio.h>

int main (){
	printf("Ola, tudo bem? \n");
	printf("Valor inteiro: %d. \n", 10);
	printf("Valor real: %f. \n", 3.1415);
	printf("Valor real com apenas duas casas: %.2f. \n", 3.141592);
	printf("Dado de texto: %c. \n", 'a');
	printf("Dado de texto: %s. \n", "testando");
}
