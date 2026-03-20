/*
Comando SWITCH-CASE:
estrutura de decisão múltipla

1-é como se fossem vários if em sequencia 
2-Ùtil para comparar uma única variavel
3-somente comparaçoes de igualdade
4-Caso seja igual a 1 dos valores:
	executa o respectivo bloco
	Ignora todos os outros blocos

sintaxe:
switch(<var>){
		case <v1>:
				<bloco_de_comando1>
				break;
		case <v2>:
				<bloco_de_comando2>
				break;
		default:
				<bloco_de_comando_padrão>
				break;
		
*/
#include <stdio.h>

int main(){
	int d;
	printf("Insira um valor de 1 a 7: \n");
	scanf("%d", &d);
	
	switch(d){
		case 1:
			printf("Domingo. \n");
			break;
		case 2:
			printf("Segunda-feira. \n");
			break;
		case 3:
			printf("Terça-feira. \n");
			break;
		case 4:
			printf("Quarta-feira. \n");
			break;
		case 5:
			printf("Quinta-feira. \n");
			break;
		case 6:
			printf("Sexta-feira. \n");
			break;
		case 7:
			printf("Sábado. \n");
			break;
		default:
			printf("Não consta.\n");
			break;
	}
}
