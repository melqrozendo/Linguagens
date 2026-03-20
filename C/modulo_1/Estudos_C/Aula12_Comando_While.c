/*
Comando While:
1-Inicialização de uma ou mais variaveis de controle
2-Definição de uma condição de parada
	Enquanto for verdadeira: repete
3-Atualização da variavel de controle

sintaxe:
while(<condição>){
	<bloco_de_comando>
}

*/
#include <stdio.h>

int main(){
	
	int d = 1;
	
	while(d<=10){
		printf("%d", d);
		d++;//variavel de controle
	}
}