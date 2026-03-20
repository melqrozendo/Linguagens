#include <stdio.h>
/*
ler certa quantidade de numeros fornecida pelo usuario
e leia o maior valor digitado e quantas vezes foi digitado
*/
int main(){
	int qtd = 0;
	int cont = 0;
	int valor = 0;
	int maior = 0;
	int vezes = 0;
	printf("Informe a quantidade: ");
	scanf("%i", &qtd);
	
	while(cont < qtd){
		
		printf("Digite o valor: ");
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
	}
	printf("Maior: %d \n", maior);
	printf("Repeticoes do Maior: %d \n", vezes);
}
