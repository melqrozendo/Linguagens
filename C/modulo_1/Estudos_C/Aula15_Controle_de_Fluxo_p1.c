/*
Controle de Fluxo break e continue

Comando break: 
utilizado para encerrar por completo uma sequencia de repetiçoes;

Comando continue:
utilizado para encerrar uma repetição e passa para próxima;
*/
#include <stdio.h>

int main(){
	int i;
	
	for(i=1; i<=10; i++){
		
		printf("%d ", i);
		
		if(i == 5){
			break;//vai pecorrer até o 5 e exibir
		}
	}
}
