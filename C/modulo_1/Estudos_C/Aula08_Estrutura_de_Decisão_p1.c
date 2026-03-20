/*
Estrutura de Decisão

Comando if
Operadores relacionais: permite que crie condiçoes
Maior: >
Maior ou igual: >=
Menor: <
Menor ou igual: <=
Igual: ==
Diferente: !=

sintaxe:

if (<condição>){

	<bloco_de_comando>
}
*/
#include <stdio.h>

int main(){
	float m;
	
	printf("Insira a nota: \n");
	scanf("%f", &m);
	
	if(m >= 7.0){
		printf("Aprovado(a)!\n");
	}
}
