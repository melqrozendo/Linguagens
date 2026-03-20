/*
Comando DO-While:
Possue:
1-Inicialização
2-Condição
3-Atualização

Obs:
1-Condição avaliada somente ao final
2-Bloco de comandos é executado, obrigatoriamente, ao menos 1x

sintaxe:
do{
	<bloco_de_comando>
}While(<condição>)
*/
#include <stdio.h>

int main(){
	
	int n = 1;
	
	do{
		printf("%d \n", n);
		n++;
	}while(n <= 10);
	
}
