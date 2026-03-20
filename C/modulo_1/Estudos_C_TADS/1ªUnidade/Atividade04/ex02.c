#include <stdio.h>
/*
59. Escreva um programa que leia o numero de habitantes de uma determinada cidade, o  ´
valor do kwh, e para cada habitante entre com os seguintes dados: consumo do mesˆ
e o codigo do consumidor (1-Residencial, 2-Comercial, 3-Industrial). No final imprima o  ´
maior, o menor e a media do consumo dos habitantes; e por fim o total do consumo de  ´
cada categoria de consumidor.
*/
int main(){
	int Qtd = 0;
	float kwh = 0.0;
	int x;
	float consumo = 0.0;
	int codigo = 0;
	float maior, menor, soma, media;
	float c1, c2, c3;
	
	printf("Digite a quantidade de habitantes: ");
	scanf("%d", &Qtd);
	printf("Digite o valor(Taxa) de Kwh: ");
	scanf("%f", &kwh);
	
	for(x = 0; x < Qtd; x++){
		
		printf("Digite seu consumo-mes: ");
		scanf("%f", &consumo);
		
		//tax*consumo
		
		//printf("--------------CODIGO DO CONSUMIDOR---------------\n");
		//printf("1-Residencial, 2-Comercial, 3-Industrial\n");
		printf("Digite o codigos do consumidor: ");
		scanf("%d", &codigo);
		
		soma = soma + consumo;
		
		//condição:
		if(x == 0){
			maior = consumo;
			menor = consumo;
		} else if(consumo > maior){
			maior = consumo;
		} else if(consumo < menor){
			menor = consumo;
		}
		
		switch(codigo){
			case 1:
				c1 = c1 + consumo;
				break;
			case 2:
				c2 = c2 + consumo;
				break;
			case 3:
				c3 = c3 + consumo;
				break;
			default:
				printf("ERRO!");
				break;
		}
		
	}
	
	printf("MAIOR CONSUMO: %.2f \n ", maior);
	printf("MENOR CONSUMO: %.2f \n", menor);
	media = soma/Qtd;
	printf("MEDIA CONSUMO: %.2f \n", media);
	
	printf("Total de consumo - codigo1: %.2f \n", c1);
	printf("Total de consumo - codigo2: %.2f \n", c2);
	printf("Total de consumo - codigo3: %.2f \n", c3);
	
}
