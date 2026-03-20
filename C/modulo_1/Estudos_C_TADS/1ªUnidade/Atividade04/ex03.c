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
	float taxa = 0.0; //taxa ao mês do kwh
	float kwh = 0.0;//consumo de kwh por habitante
	int x;
	float consumo = 0.0;//
	int codigo = 0;
	float maior, menor, soma, media;
	float MA_kwh, ME_kwh, total, MD_kwh; 
	float c1, c2, c3, t1, t2, t3;
	
	printf("Digite a quantidade de habitantes: ");
	scanf("%d", &Qtd);
	printf("Digite o valor(Taxa) do Kwh: R$ ");
	scanf("%f", &taxa);
	
	printf("\n");
	printf("--------------CODIGO DO CONSUMIDOR---------------\n");
	printf("1-Residencial, 2-Comercial, 3-Industrial\n");
	printf("-------------------------------------------------\n");
	
	for(x = 1; x <= Qtd; x++){
		
		printf("Digite o Consumo-Mensal(kwh) da %do pessoa: ", x);
		scanf("%f", &kwh);
		
		printf("Digite o Codigo do Consumidor da %do pessoa: ", x);
		scanf("%d", &codigo);
		printf("-------------------------------------------------\n");
		
		//Calcular consumo = kwh (consumo-mês)* taxa(kwh)
		consumo = kwh * taxa;
		//somatorio de todos os consumos
		soma = soma + consumo;
		//somatorio de kwh
		total = total + kwh;
		
		//condição:
		if(x == 1){
			maior = consumo;
			menor = consumo;
			MA_kwh = kwh;
			ME_kwh = kwh;	
		} else if(consumo > maior){
			maior = consumo;
			MA_kwh = kwh;	
		} else if(consumo < menor){
			menor = consumo;
			ME_kwh = kwh;	
		}
		
		switch(codigo){
			case 1:
				c1 = c1 + consumo;
				t1 = t1 + kwh;
				break;
			case 2:
				c2 = c2 + consumo;
				t2 = t2 + kwh;
				break;
			case 3:
				c3 = c3 + consumo;
				t3 = t3 + kwh;
				break;
			default:
				printf("ERRO!");
		}
		
	}
	//calculando a média de consumo por habitante
	media = soma/Qtd;
	MD_kwh = total/Qtd;
	
	printf("----------------------RECIBO---------------------\n");
	printf("MAIOR CONSUMO: %.2f kwh => R$ %.2f \n", MA_kwh, maior);
	printf("MENOR CONSUMO: %.2f kwh => R$ %.2f \n", ME_kwh, menor);
	printf("MEDIA CONSUMO: %.2f kwh => R$ %.2f \n\n", MD_kwh, media);
	
	printf("Total de consumo [1]: %.2f kwh => R$ %.2f \n", t1, c1);
	printf("Total de consumo [2]: %.2f kwh => R$ %.2f \n", t2, c2);
	printf("Total de consumo [3]: %.2f kwh => R$ %.2f \n", t3, c3);
	printf("-------------------------------------------------\n");
	
}
