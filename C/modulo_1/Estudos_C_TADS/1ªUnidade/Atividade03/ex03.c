#include <stdio.h>

int main(){
	int valor = 0;
	int cont = 0;
	int maior = 0;
	int vezes = 0;
	int continuar;
	
	do {
		printf("Digite um valor: ");
		scanf("%i", &valor);
		if(cont == 0){
			maior = valor;
			vezes = 1;
		}else if(valor > maior){
			maior = valor;
			vezes = 1;
		}else if(valor == maior){
			vezes++;
		}
		cont++;
		printf("Deseja continuar: 0-Nao | 1- Sim\n");
		scanf("%i",&continuar);
		
	}while(continuar == 1);
}