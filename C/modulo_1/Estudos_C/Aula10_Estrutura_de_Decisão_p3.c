/* Desvio de fluxo por estrutura de decisão
Comandos if-else

sintaxe:
if(<condição>){
	<bloco_de_comando1>
}
else {
	<bloco_de_comando2>
}
*/
#include <stdio.h>

int main(){
	float m;
	printf("Insira uma nota:\n");
	scanf("%f", &m);
	
	if(m >= 7.0){
		printf("Aprovado(a)!\n");
	}
	else{
		printf("Reprovado(a)!\n");
	}
}
